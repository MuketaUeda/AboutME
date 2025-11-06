import { ArrowDown } from "lucide-react";

// Seção principal do site - apresentação inicial
export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            {/* Container principal com conteúdo centralizado */}
            <div className="container max-w-4xl mx-auto text-center">
                <div className="space-y-6">
                    {/* Título principal com animações de fade-in */}
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                        {/* Linha de boas-vindas */}
                        <div className="text-glow text-primary opacity-0 animate-fade-in">Welcome to my site</div>
                        {/* Linha "I'm" */}
                        <div className="text-2xl md:text-4xl mt-4 opacity-0 animate-fade-in-delay-4">I'm</div>
                        {/* Nome principal */}
                        <div className="text-glow text-primary opacity-0 animate-fade-in-delay-5">Gabriel Rosati</div>
                    </h1>
                    
                    {/* Subtítulo com descrição profissional */}
                    <p className="text-lg md:text-xl text-foreground/80 mt-8 opacity-0 animate-fade-in-delay-6">
                        Code-driven & User-focused <br />
                        IA-Powered
                    </p>
                    
                    {/* Botão de call-to-action */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-7">
                        <a href="#projects" className="cosmic-button">
                            Check my Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll na parte inferior */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-foreground/70 mb-1">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
};