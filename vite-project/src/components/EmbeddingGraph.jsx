import { useCallback, useEffect, useRef, useState } from "react";

// Tecnologias reais do stack, agrupadas por camada. Cada camada reaproveita uma cor
// semântica já existente no site em vez de uma cor nova: "product" = --primary (o violeta
// do "Full-Stack Engineer" no Hero), "ai" = --accent (o dourado de "AI-powered"),
// "infra" = --graph (o teal reservado a este componente).
const NODES = [
    { id: 0, label: "Next.js", band: "top", category: "product" },
    { id: 1, label: "FastAPI", band: "top", category: "product" },
    { id: 2, label: "LangGraph", band: "top", category: "ai" },
    { id: 3, label: "LangChain", band: "top", category: "ai" },
    { id: 4, label: "Langfuse", band: "top", category: "ai" },
    { id: 5, label: "Qdrant", band: "bottom", category: "infra" },
    { id: 6, label: "PostgreSQL", band: "bottom", category: "infra" },
    { id: 7, label: "Docker", band: "bottom", category: "infra" },
];

// Pares que existem de verdade no fluxo de um app de IA em produção: o front consome a API,
// a API expõe os agentes (LangGraph), construídos sobre LangChain e rastreados pelo Langfuse;
// os dados (Qdrant/Postgres) rodam containerizados no Docker.
// Só conecta nós da mesma banda para as linhas nunca cruzarem o texto central do Hero.
const EDGES = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [2, 4],
    [5, 6],
    [6, 7],
    [5, 7],
];

const CATEGORY_TOKEN = { product: "primary", ai: "accent", infra: "graph" };
const EDGE_PRIORITY = ["ai", "product", "infra"];
const edgeToken = (a, b) => {
    const catA = NODES[a].category;
    const catB = NODES[b].category;
    return CATEGORY_TOKEN[EDGE_PRIORITY.find((cat) => cat === catA || cat === catB)];
};

const ADJACENCY = NODES.reduce((acc, node) => {
    acc[node.id] = new Set();
    return acc;
}, {});
EDGES.forEach(([a, b]) => {
    ADJACENCY[a].add(b);
    ADJACENCY[b].add(a);
});

// Faixas verticais (fração da altura do container) onde cada banda pode viver -
// nunca invadem a faixa central onde o texto do Hero fica.
const BAND_RANGE = { top: [0.12, 0.25], bottom: [0.76, 0.83] };

// Metade da largura do "graph-node-dot" (w-1.5 = 6px), usado para ancorar o dot em (x, y).
const NODE_DOT_RADIUS = 3;

const REPULSION = 2200;
const SPRING_K = 0.025;
const REST_LENGTH = 78;
const DAMPING = 0.82;
const CENTER_K = 0.0018;
const MAX_SPEED = 12;
const SLEEP_EPSILON = 0.05;
const RELAX_STEPS = 120;

// Fundo do Hero: um grafo de embedding com as tecnologias do stack, no lugar de um
// campo de estrelas genérico - a "constelação" aqui é literal (espaço vetorial), não decorativa.
// É um pequeno sistema de forças estilo grafo do Obsidian: nós se repelem, arestas puxam como
// molas, e arrastar um nó perturba de verdade seus vizinhos reais.
export const EmbeddingGraph = () => {
    const containerRef = useRef(null);
    const nodesRef = useRef([]);
    const dimsRef = useRef({ width: 0, height: 0 });
    const draggingRef = useRef(null);
    const runningRef = useRef(false);
    const rafRef = useRef(null);
    const reducedMotionRef = useRef(false);
    const apiRef = useRef({});

    const [positions, setPositions] = useState([]);
    const [hoveredId, setHoveredId] = useState(null);

    const render = useCallback(() => {
        setPositions(
            nodesRef.current.map(({ id, label, band, category, x, y }) => ({ id, label, band, category, x, y }))
        );
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return undefined;

        reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const step = () => {
            const nodes = nodesRef.current;
            const { width, height } = dimsRef.current;
            const padX = width * 0.06;
            let totalSpeed = 0;

            for (const node of nodes) {
                if (draggingRef.current?.id === node.id) continue;

                let ax = 0;
                let ay = 0;

                for (const other of nodes) {
                    if (other.id === node.id || other.band !== node.band) continue;
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const distSq = Math.max(dx * dx + dy * dy, 60);
                    const dist = Math.sqrt(distSq);
                    const force = REPULSION / distSq;
                    ax += (dx / dist) * force;
                    ay += (dy / dist) * force;
                }

                for (const [a, b] of EDGES) {
                    if (a !== node.id && b !== node.id) continue;
                    const other = nodes[a === node.id ? b : a];
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const dist = Math.max(Math.hypot(dx, dy), 1);
                    const force = (dist - REST_LENGTH) * SPRING_K;
                    ax += (dx / dist) * force;
                    ay += (dy / dist) * force;
                }

                const [minFrac, maxFrac] = BAND_RANGE[node.band];
                const bandCenterY = (height * (minFrac + maxFrac)) / 2;
                ax += (width / 2 - node.x) * CENTER_K;
                ay += (bandCenterY - node.y) * CENTER_K;

                node.vx = (node.vx + ax) * DAMPING;
                node.vy = (node.vy + ay) * DAMPING;

                const speed = Math.hypot(node.vx, node.vy);
                if (speed > MAX_SPEED) {
                    node.vx = (node.vx / speed) * MAX_SPEED;
                    node.vy = (node.vy / speed) * MAX_SPEED;
                }

                node.x += node.vx;
                node.y += node.vy;

                const [minY, maxY] = [height * minFrac, height * maxFrac];
                if (node.x < padX) { node.x = padX; node.vx = 0; }
                if (node.x > width - padX) { node.x = width - padX; node.vx = 0; }
                if (node.y < minY) { node.y = minY; node.vy = 0; }
                if (node.y > maxY) { node.y = maxY; node.vy = 0; }

                totalSpeed += Math.abs(node.vx) + Math.abs(node.vy);
            }

            return totalSpeed;
        };

        const tick = () => {
            const totalSpeed = step();
            render();
            if (totalSpeed < SLEEP_EPSILON && !draggingRef.current) {
                runningRef.current = false;
                return;
            }
            rafRef.current = requestAnimationFrame(tick);
        };

        const wake = () => {
            if (runningRef.current) return;
            runningRef.current = true;
            rafRef.current = requestAnimationFrame(tick);
        };

        const layout = () => {
            const { width, height } = dimsRef.current;
            if (!width || !height) return;
            nodesRef.current = NODES.map((node) => {
                const [minFrac, maxFrac] = BAND_RANGE[node.band];
                return {
                    ...node,
                    x: width * 0.08 + Math.random() * width * 0.84,
                    y: height * (minFrac + Math.random() * (maxFrac - minFrac)),
                    vx: 0,
                    vy: 0,
                };
            });
            for (let i = 0; i < RELAX_STEPS; i += 1) step();
            render();
        };

        apiRef.current.startDrag = (id) => {
            draggingRef.current = { id };
            wake();
        };

        const resizeObserver = new ResizeObserver(([entry]) => {
            dimsRef.current = { width: entry.contentRect.width, height: entry.contentRect.height };
            if (nodesRef.current.length === 0) layout();
            else if (!reducedMotionRef.current) wake();
        });
        resizeObserver.observe(container);

        const handlePointerMove = (event) => {
            const dragging = draggingRef.current;
            if (!dragging) return;
            const node = nodesRef.current.find((n) => n.id === dragging.id);
            if (!node) return;
            const rect = container.getBoundingClientRect();
            const { width, height } = dimsRef.current;
            const padX = width * 0.06;
            const [minFrac, maxFrac] = BAND_RANGE[node.band];
            node.x = Math.min(Math.max(event.clientX - rect.left, padX), width - padX);
            node.y = Math.min(Math.max(event.clientY - rect.top, height * minFrac), height * maxFrac);
            node.vx = 0;
            node.vy = 0;
        };

        const handlePointerUp = () => {
            draggingRef.current = null;
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
        window.addEventListener("pointercancel", handlePointerUp);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
            window.removeEventListener("pointercancel", handlePointerUp);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [render]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {positions.length > 0 && (
                <>
                    <svg width={dimsRef.current.width} height={dimsRef.current.height} className="absolute inset-0">
                        {EDGES.map(([a, b], index) => {
                            const from = positions.find((p) => p.id === a);
                            const to = positions.find((p) => p.id === b);
                            if (!from || !to) return null;
                            const hoverActive = hoveredId !== null;
                            const highlighted = hoveredId === a || hoveredId === b;
                            return (
                                <line
                                    key={index}
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    className="graph-edge"
                                    style={{
                                        "--edge-color": `var(--${edgeToken(a, b)})`,
                                        animation: hoverActive ? "none" : undefined,
                                        opacity: hoverActive ? (highlighted ? 1 : 0.08) : undefined,
                                        strokeWidth: highlighted ? 1.75 : undefined,
                                    }}
                                />
                            );
                        })}
                    </svg>
                    {positions.map((node) => {
                        const hoverActive = hoveredId !== null;
                        const highlighted = hoveredId === node.id || ADJACENCY[node.id]?.has(hoveredId);
                        return (
                            <div
                                key={node.id}
                                className="absolute flex items-center pointer-events-auto cursor-grab touch-none select-none transition-[opacity,transform] duration-300 ease-out"
                                style={{
                                    // Ancorado pela borda esquerda (não pelo centro do bloco todo) para que o
                                    // ponto fique exatamente em (node.x, node.y) - onde as arestas terminam -
                                    // em vez do centro do rótulo de texto, que tem largura variável.
                                    left: node.x - NODE_DOT_RADIUS,
                                    top: node.y,
                                    opacity: hoverActive ? (highlighted ? 1 : 0.3) : 1,
                                    transform: `translateY(-50%) scale(${highlighted && hoverActive ? 1.12 : 1})`,
                                    transformOrigin: "left center",
                                }}
                                onPointerDown={(event) => {
                                    event.preventDefault();
                                    apiRef.current.startDrag?.(node.id);
                                }}
                                onPointerEnter={() => setHoveredId(node.id)}
                                onPointerLeave={() =>
                                    setHoveredId((current) => (current === node.id ? null : current))
                                }
                            >
                                <span
                                    className="graph-node-dot"
                                    style={{ "--node-color": `var(--${CATEGORY_TOKEN[node.category]})` }}
                                />
                                <span className="font-mono text-xs text-foreground/50 whitespace-nowrap">
                                    {node.label}
                                </span>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};
