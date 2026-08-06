import { ArrowDown, Monitor, Brain, Bot, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Seção principal do site - apresentação inicial
export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Stickers decorativos - os mesmos ícones dos 3 cards da seção About (Web Dev, IA Agents, IA Chatbot/RAG) + Rocket para "idea to production" */}
            <div className="hidden md:flex absolute top-[14%] left-[8%] w-16 h-16 border-2 border-border shadow-shadow bg-chart-1 -rotate-8 items-center justify-center text-foreground">
                <Monitor className="h-7 w-7" />
            </div>
            <div className="hidden md:flex absolute top-[14%] right-[8%] w-16 h-16 border-2 border-border shadow-shadow bg-chart-2 rotate-6 items-center justify-center text-foreground">
                <Brain className="h-7 w-7" />
            </div>
            <div className="hidden md:flex absolute bottom-[16%] left-[10%] w-16 h-16 border-2 border-border shadow-shadow bg-main rotate-4 items-center justify-center text-main-foreground">
                <Bot className="h-7 w-7" />
            </div>
            <div className="hidden md:flex absolute bottom-[16%] right-[10%] w-16 h-16 border-2 border-border shadow-shadow bg-accent -rotate-5 items-center justify-center text-accent-foreground">
                <Rocket className="h-7 w-7" />
            </div>

            {/* Container principal com conteúdo centralizado */}
            <div className="container max-w-4xl mx-auto text-center relative">
                <div className="space-y-6">
                    {/* Título principal com animações de fade-in */}
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
                        {/* Linha "Hi, I'm" */}
                        <div className="text-2xl md:text-4xl opacity-0 animate-fade-in">Hi, I'm</div>
                        {/* Nome principal */}
                        <div className="text-stamp text-main opacity-0 animate-fade-in-delay-1">Gabriel Rosati</div>
                        {/* Linha de apresentação */}
                        <div className="text-main text-3xl md:text-5xl mt-4 opacity-0 animate-fade-in-delay-4">AI Engineer</div>
                    </h1>

                    {/* Subtítulo com descrição profissional */}
                    <p className="text-lg md:text-xl text-muted-foreground mt-8 opacity-0 animate-fade-in-delay-6">
                        I build <Badge className="bg-accent text-accent-foreground -rotate-1 align-middle">AI-powered</Badge> software, from idea to production.
                    </p>

                    {/* Botão de call-to-action */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-7">
                        <Button asChild>
                            <a href="#projects">Check my Work</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Indicador de scroll na parte inferior */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="h-5 w-5 text-foreground"/>
            </div>
        </section>
    );
};