// Seção de projetos - exibe projetos em destaque com descrições e links

import { ExternalLink, Github, ArrowRight } from "lucide-react"

// Dados dos projetos - substitua pelos seus projetos reais
const projects = [
    {
        id: 1,
        name: "IA + JADE",
        description: "Projeto de IA com agente Jade desenvolvido na Universidade de Granada (ES), nele o Raccon deve encontrar a lata de lixo utilizando o menor caminho possível",
        image: "/projects/#",
        tags: ["React", "Tailwind", "TypeScript"],
        link: "#",
        github: "https://github.com/MuketaUeda/DBA-2"
    },
    {
        id: 2,
        name: "Project 2",
        description: "Description 2",
        image: "/projects/#",
        tags: ["React", "Tailwind", "TypeScript"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        name: "Project 3",
        description: "Description 3",
        image: "/projects/#",
        tags: ["React", "Tailwind", "TypeScript"],
        link: "#",
        github: "#"
    },
]

// Seção de projetos em destaque
export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {/* Descrição da seção */}
                <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for development.
                </p>

                {/* Grid de cards de projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            {/* Imagem do projeto */}
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Conteúdo do card */}
                            <div className="p-6">
                                {/* Tags do projeto */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Nome do projeto */}
                                <h3 className="text-xl font-semibold mb-1 text-foreground">{project.name}</h3>
                                
                                {/* Descrição do projeto */}
                                <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
                                
                                {/* Links do projeto */}
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {/* Link para o projeto */}
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        {/* Link para o GitHub */}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Botão para GitHub */}
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center gap-2 mx-auto" target="_blank" rel="noopener noreferrer" href="https://github.com/MuketaUeda">
                        Check out my GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}