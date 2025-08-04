// ProjectsSection Component - Displays featured projects with descriptions and links

import { ExternalLink, Github, ArrowRight } from "lucide-react"

// Sample projects data - replace with your actual projects
const projects = [
    {
        id: 1,
        name: "Project 1",
        description: "Description 1",
        image: "/projects/#",
        tags: ["React", "Tailwind", "TypeScript"],
        link: "#",
        github: "#"
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
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative z-20">
            <div className="container mx-auto max-w-5xl">
                {/* Section title with primary color accent */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">Descrição</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                {/* Project tags*/}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <h3 className="text-xl font-semibold mb-1 text-foreground">{project.name}</h3>
                                
                                <p className="text-sm text-foreground/60 mb-4">{project.description}</p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* GitHub button*/}
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center gap-2 mx-auto" target="_blank" rel="noopener noreferrer" href="https://github.com/MuketaUeda">
                        Check out my GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}