// Importa ícones do lucide-react para elementos visuais
import { Monitor, Brain, Bot } from "lucide-react";

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
                        I'm a passionate software engineer focused on building intelligent products powered by AI.
                        I enjoy combining software engineering and artificial intelligence to create solutions that are smart, intuitive, and impactful.
                        </p>
                        <p className="text-foreground/60">
                        With experience across frontend, backend, and applied machine learning, 
                        I bring ideas to life through clean, efficient code and data-driven design.
                        </p>

                        {/* Container de botões de ação */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center text-center">
                            {/* Botão principal de contato */}
                            <a href="#contact" className="cosmic-button text-sm px-4 py-2 flex items-center justify-center">
                                Get In Touch
                            </a>
                            
                            {/* Botões secundários para download de CV */}
                            <a 
                                href="/cv/CV_Gabriel_Rosati_IA.pdf" 
                                download="CV_Gabriel_Rosati_IA.pdf"
                                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                CV - PTBR
                            </a>
                            <a 
                                href="/cv/CV_Gabriel_Rosati_IA_EN.pdf" 
                                download="CV_Gabriel_Rosati_IA_EN.pdf"
                                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
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
                                    <Monitor className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Web Development</h4>
                                    <p className="text-foreground/60">Building full-stack modern web applications</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card: IA Agents */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">IA Agents</h4>
                                    <p className="text-foreground/60">Creating intelligent agents that can perform tasks autonomously</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Card: IA Chatbot (RAG) */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bot className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">IA Chatbot (RAG)</h4>
                                    <p className="text-foreground/60">Creating chatbots that can answer questions based on proprietary data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};