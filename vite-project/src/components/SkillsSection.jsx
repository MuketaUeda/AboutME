import { useState } from "react";
import {cn} from "@/lib/utils";

// Dados das habilidades com níveis e categorias
const skills = [
    // Frontend
    {name: "HTML", Level: "80", Category: "Frontend"},
    {name: "CSS", Level: "70", Category: "Frontend"},
    {name: "JavaScript", Level: "70", Category: "Frontend"},
    {name: "React", Level: "70", Category: "Frontend"},
    {name: "Next.js", Level: "60", Category: "Frontend"},
    {name: "Tailwind CSS", Level: "65", Category: "Frontend"},
    
    // Backend
    {name: "Node.js", Level: "60", Category: "Backend"},
    {name: "Python", Level: "80", Category: "Backend"},
    {name: "ASP.NET Core", Level: "60", Category: "Backend"},
    {name: "AWS", Level: "50", Category: "Backend"},
    {name: "RabbitMQ", Level: "60", Category: "Backend"},
    
    // Database
    {name: "SQL", Level: "70", Category: "Database"},
    {name: "MongoDB", Level: "70", Category: "Database"},
    {name: "PostgreSQL", Level: "70", Category: "Database"},
    {name: "AstraDB", Level: "50", Category: "Database"},
    
    // Tools
    {name: "Git", Level: "80", Category: "Tools"},
    {name: "Linux", Level: "70", Category: "Tools"},
    {name: "Figma", Level: "90", Category: "Tools"},
    {name: "Docker", Level: "70", Category: "Tools"},
    {name: "CI/CD", Level: "50", Category: "Tools"},
    {name: "Vercel", Level: "60", Category: "Tools"},


    // IA
    {name: "PyTorch", Level: "40", Category: "artificial-intelligence"},
    {name: "Gemini API", Level: "50", Category: "artificial-intelligence"},
    {name: "LangChain", Level: "40", Category: "artificial-intelligence"},
    {name: "Pinecone", Level: "40", Category: "artificial-intelligence"},
    {name: "CrewIA", Level: "40", Category: "artificial-intelligence"},
    {name: "Scikit-learn", Level: "40", Category: "artificial-intelligence"}
];

// Categorias disponíveis para filtro
const categories = ["all", "frontend", "backend", "database", "artificial-intelligence","tools" ];

// Seção de habilidades - mostra skills com filtros por categoria
export const SkillsSection = () => {
    // Estado para controlar categoria ativa
    const [activeCategory, setActiveCategory] = useState("all");

    // Filtra habilidades baseado na categoria selecionada
    const filteredSkills = skills.filter((skill) => 
        activeCategory === "all" || skill.Category.toLowerCase() === activeCategory
    );
    
    return (
        <section id="skills" className="py-24 px-4 relative bg-background/50">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Botões de filtro por categoria */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"    
                        )}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid de cards de habilidades */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => ( 
                        <div key={key} className="bg-background p-6 rounded-lg shadow-sm card-hover">
                            {/* Nome da habilidade */}
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            
                            {/* Barra de progresso */}
                            <div className="w-full bg-foreground/20 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left transition-all duration-1500 ease-out" 
                                    style={{width: skill.Level + "%"}}
                                />
                            </div>
                            
                            {/* Porcentagem */}
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.Level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};