import { useState } from "react";
import {cn} from "@/lib/utils";

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
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Botões de filtro por categoria */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize font-mono text-sm",
                            activeCategory !== category
                                ? "bg-secondary/70 text-foreground hover:bg-secondary"
                                : category === "artificial-intelligence"
                                    ? "bg-accent text-accent-foreground"
                                    : "bg-primary text-primary-foreground"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Lista de tags de habilidades */}
                <div className="flex flex-wrap justify-center gap-3">
                    {filteredSkills.map((skill, key) => (
                        <span key={key} className={cn("px-4 py-2 rounded-full border font-mono text-sm transition-colors duration-300",
                            skill.Category === "artificial-intelligence"
                                ? "border-accent/50 text-accent"
                                : "border-primary/30 text-foreground/80"
                        )}>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
