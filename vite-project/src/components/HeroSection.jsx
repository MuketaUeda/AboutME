import { ArrowDown } from "lucide-react";

// Hero Section Component - Main landing section with name and introduction
export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                        <div className="text-glow text-primary opacity-0 animate-fade-in">Welcome to my site</div>
                        <div className="text-2xl md:text-4xl mt-4 opacity-0 animate-fade-in-delay-4">I'm</div>
                        <div className="text-glow text-primary opacity-0 animate-fade-in-delay-5">Gabriel Rosati</div>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 mt-8 opacity-0 animate-fade-in-delay-6">
                        Software Engineer - Code-driven & User-focused
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-7">
                        <a href="#projects" className="cosmic-button">
                            Check my Work
                        </a>
                    </div>

                    
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-foreground/70 mb-1">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    );
};