// Importa ícones do lucide-react para elementos visuais
import { Code, User, Briefcase } from "lucide-react";

// Seção "Sobre Mim" - informações pessoais e profissionais
export const AboutSection = () => {
    return (
        // Container principal da seção
        <section id="about" className="py-24 px-4 relative">
            {/* Container com largura máxima para melhor alinhamento */}
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção com cor primária */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                
                {/* Layout em grid: informações pessoais + cards de habilidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Coluna esquerda: Descrição pessoal e botões de ação */}
                    <div className="space-y-6">
                        {/* Título profissional */}
                        <h3 className="text-2xl font-semibold">Software Engineer & Full-Stack Developer</h3>
                        
                        {/* Parágrafos de descrição pessoal */}
                        <p className="text-foreground/60">
                            I'm a passionate software engineer with expertise in modern web technologies. 
                            I love creating user-friendly applications that solve real-world problems.
                        </p>
                        <p className="text-foreground/60">
                            With experience in both frontend and backend development, I bring ideas to life 
                            through clean, efficient code and intuitive user interfaces.
                        </p>

                        {/* Container de botões de ação */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                            {/* Botão principal de contato */}
                            <a href="#contact" className="cosmic-button text-sm px-4 py-2">
                                Get In Touch
                            </a>
                            
                            {/* Botões secundários para download de CV */}
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                CV - PTBR
                            </a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                CV - EN
                            </a>
                        </div>
                    </div>
                    
                    {/* Coluna direita: Cards de habilidades profissionais */}
                    <div className="grid grid-cols-1 gap-6">
                        
                        {/* Card: Desenvolvimento Web */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Web Development</h4>
                                    <p className="text-foreground/60">Building modern web applications</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card: Desenvolvimento Mobile */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Mobile Development</h4>
                                    <p className="text-foreground/60">Creating responsive mobile apps</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card: Design UI/UX */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">UI/UX Design</h4>
                                    <p className="text-foreground/60">Designing user-friendly interfaces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};