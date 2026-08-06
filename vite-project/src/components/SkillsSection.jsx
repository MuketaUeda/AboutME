import { useState } from "react";
import {cn} from "@/lib/utils";
import { Badge, badgeVariants } from "./ui/badge";

// Dados das habilidades por categoria
const skills = [
    // Frontend
    {name: "TypeScript", Category: "Frontend"},
    {name: "React", Category: "Frontend"},
    {name: "Next.js", Category: "Frontend"},
    {name: "Tailwind CSS", Category: "Frontend"},

    // Backend
    {name: "Python", Category: "Backend"},
    {name: "FastAPI", Category: "Backend"},
    {name: "Node.js", Category: "Backend"},

    // Database
    {name: "SQL", Category: "Database"},
    {name: "MongoDB", Category: "Database"},
    {name: "PostgreSQL", Category: "Database"},
    {name: "Pinecone", Category: "Database"},
    {name: "Qdrant", Category: "Database"},

    // Tools
    {name: "Git", Category: "Tools"},
    {name: "Linux", Category: "Tools"},
    {name: "Figma", Category: "Tools"},
    {name: "Vercel", Category: "Tools"},
    {name: "n8n", Category: "Tools"},
    {name: "Snowflake", Category: "Tools"},

    // Infra
    {name: "AWS", Category: "Infra"},
    {name: "Docker", Category: "Infra"},
    {name: "Kubernetes", Category: "Infra"},
    {name: "CI/CD", Category: "Infra"},

    // IA
    {name: "PyTorch", Category: "artificial-intelligence"},
    {name: "LangGraph", Category: "artificial-intelligence"},
    {name: "LangChain", Category: "artificial-intelligence"},
    {name: "Fine-Tuning", Category: "artificial-intelligence"},
    {name: "Scikit-learn", Category: "artificial-intelligence"},
    {name: "LangFuse", Category: "artificial-intelligence"}

];

// Categorias disponíveis para filtro
const categories = ["all", "frontend", "backend", "database", "infra", "artificial-intelligence", "tools"];

// Cor sólida por categoria - 6 tons distintos, sem opacidade/tinta
const categoryColors = {
    frontend: "bg-main text-main-foreground",
    backend: "bg-chart-2 text-foreground",
    database: "bg-chart-1 text-foreground",
    tools: "bg-[hsl(var(--category-tools))] text-foreground",
    infra: "bg-[hsl(var(--category-infra))] text-foreground",
    "artificial-intelligence": "bg-accent text-accent-foreground",
};

// Seção de habilidades - lista de tecnologias com filtro por categoria
export const SkillsSection = () => {
    // Estado para controlar categoria ativa
    const [activeCategory, setActiveCategory] = useState("all");

    // Filtra habilidades baseado na categoria selecionada
    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.Category.toLowerCase() === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Skills
                </h2>

                {/* Botões de filtro por categoria */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn(badgeVariants({ variant: "neutral" }), "capitalize cursor-pointer transition-colors duration-150 px-5 py-2 text-sm",
                            activeCategory === category && (category === "all"
                                ? "bg-foreground text-background"
                                : categoryColors[category])
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Lista de tags de habilidades */}
                <div className="flex flex-wrap justify-center gap-3">
                    {filteredSkills.map((skill, key) => (
                        <Badge key={key} variant="neutral" className={cn("text-sm px-4 py-2", categoryColors[skill.Category.toLowerCase()])}>
                            {skill.name}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
};
