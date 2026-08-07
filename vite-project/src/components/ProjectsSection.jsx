// Seção de projetos - exibe projetos em destaque com descrições e links

import { ExternalLink, Github, ArrowRight, AlertTriangle, ShoppingBag, Layers, Server, Map, MessageSquare } from "lucide-react"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

// Dados dos projetos - substitua pelos seus projetos reais
const projects = [
    {
        id: 1,
        name: "Task Exception Prediction",
        description: "Binary classification model predicting task exceptions in transportation logistics, using XGBoost tuned for precision over recall — 66% precision with full test coverage and CI/CD.",
        icon: AlertTriangle,
        color: "bg-main text-main-foreground",
        tags: ["Python", "XGBoost", "scikit-learn", "Pytest"],
        link: "#",
        github: "https://github.com/MuketaUeda/TaskException"
    },
    {
        id: 2,
        name: "The Mome Store",
        description: "Store created for the protein snack brand The Mome to sell their product online, using Next.js + Shopify headless.",
        icon: ShoppingBag,
        color: "bg-chart-1 text-foreground",
        tags: ["Next.js", "Shopify", "Headless Commerce"],
        link: "https://themome.vercel.app/",
        github: "https://github.com/MuketaUeda"
    },
    {
        id: 3,
        name: "Deck of Cards Classifier with PyTorch",
        description: "Deep Learning card classifier using PyTorch, capable of accurately identifying 53 classes — all standard playing cards plus the joker.",
        icon: Layers,
        color: "bg-chart-2 text-foreground",
        tags: ["Python", "PyTorch", "Jupyter Notebook"],
        link: "https://www.kaggle.com/code/gabrielrosati/pytorch-agent",
        github: "https://github.com/MuketaUeda/IAModelPyTorch"
    },
    {
        id: 4,
        name: "Chat Engine",
        description: "Customer support chatbot built with LangGraph, integrating the official WhatsApp Business API — FastAPI backend with PostgreSQL, containerized via Docker Compose.",
        icon: Server,
        color: "bg-chart-3 text-foreground",
        tags: ["LangGraph", "WhatsApp API", "FastAPI", "PostgreSQL"],
        link: "https://chatengine.urutaus.com/",
        github: "https://github.com/MuketaUeda"
    },
    {
        id: 5,
        name: "MapeIA",
        description: "AI-powered tool that extracts SAS/SQL scripts from SAS Enterprise Guide projects and uses GPT-4o-mini to map table dependencies and auto-generate documentation.",
        icon: Map,
        color: "bg-chart-4 text-foreground",
        tags: ["Python", "OpenAI API", "SAS", "Automation"],
        link: "#",
        github: "https://github.com/MuketaUeda/MapeIA"
    },
    {
        id: 6,
        name: "O Ursão",
        description: "A chatbot RAG built with Next.js, LangChain and AstraDB, created to answer questions about the Oktoberlim, and help the team to get insights for the future events.",
        icon: MessageSquare,
        color: "bg-chart-5 text-foreground",
        tags: ["Next.js", "LangChain", "Gemini API", "AstraDB", "Vercel"],
        link: "#",
        github: "https://github.com/MuketaUeda/TheBigBear"
    }
]

// Seção de projetos em destaque
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                    Featured <span className="text-main text-stamp">Projects</span>
                </h2>

                {/* Descrição da seção */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for development.
                </p>

                {/* Grid de cards de projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const Icon = project.icon;
                        return (
                        <Card key={project.id} className="group p-6 gap-0 transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
                            {/* Selo colorido do projeto */}
                            <div className={`w-14 h-14 flex items-center justify-center border-2 border-border shadow-shadow -rotate-6 mb-4 transition-transform duration-300 group-hover:rotate-0 ${project.color}`}>
                                <Icon className="h-7 w-7" />
                            </div>

                            {/* Tags do projeto */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="neutral">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Nome do projeto */}
                            <h3 className="text-xl font-semibold mb-1 text-foreground">{project.name}</h3>

                            {/* Descrição do projeto */}
                            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                            {/* Links do projeto */}
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {/* Link para o projeto */}
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-main transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    {/* Link para o GitHub */}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-main transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </Card>
                        );
                    })}
                </div>

                {/* Botão para GitHub */}
                <div className="text-center mt-12">
                    <Button asChild>
                        <a className="w-fit flex items-center gap-2 mx-auto" target="_blank" rel="noopener noreferrer" href="https://github.com/MuketaUeda">
                            Check out my GitHub <ArrowRight size={16}/>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}