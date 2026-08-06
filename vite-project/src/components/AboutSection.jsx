// Importa ícones do lucide-react para elementos visuais
import { Monitor, Brain, Activity } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

// Seção "Sobre Mim" - informações pessoais e profissionais
export const AboutSection = () => {
    return (
        // Container principal da seção
        <section id="about" className="py-24 px-4 relative">
            {/* Container com largura máxima para melhor alinhamento */}
            <div className="container mx-auto max-w-5xl">
                {/* Título da seção com cor primária */}
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="inline-block bg-main text-main-foreground px-2 -rotate-1">Me</span>
                </h2>

                {/* Layout em grid: informações pessoais + cards de habilidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Coluna esquerda: Descrição pessoal e botões de ação */}
                    <div className="space-y-6">
                        {/* Título profissional */}
                        <h3 className="text-2xl font-semibold">AI Engineer, GenAI Specialist & Full-Stack Developer</h3>

                        {/* Parágrafos de descrição pessoal */}
                        <p className="text-muted-foreground">
                        I'm an AI Engineer specialized in Generative AI — building autonomous agents, RAG pipelines, and LLM-powered systems that solve real business problems, from customer support automation to enterprise data querying.
                        </p>
                        <p className="text-muted-foreground">
                        I'm also a full-stack developer at heart, with a Computer Science degree from USP and international experience at UGR (Granada, Spain), bringing ideas to life end-to-end — from architecture and backend to polished, production-ready interfaces.
                        </p>

                        {/* Container de botões de ação */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center text-center">
                            {/* Botão principal de contato */}
                            <Button asChild size="sm">
                                <a href="#contact">Get In Touch</a>
                            </Button>

                            {/* Botões secundários para download de CV */}
                            <Button asChild variant="neutral" size="sm">
                                <a href="/cv/CV_Gabriel_Rosati_IA.pdf" download="CV_Gabriel_Rosati_IA.pdf">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    CV - PTBR
                                </a>
                            </Button>
                            <Button asChild variant="neutral" size="sm">
                                <a href="/cv/CV_Gabriel_Rosati_IA_EN.pdf" download="CV_Gabriel_Rosati_IA_EN.pdf">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    CV - EN
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Coluna direita: Cards de habilidades profissionais */}
                    <div className="grid grid-cols-1 gap-6">

                        {/* Card: GenAI & AI Agents */}
                        <Card className="p-6 gap-0 transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-none border-2 border-border bg-secondary-background">
                                    <Brain className="h-6 w-6 text-foreground"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">GenAI & AI Agents</h4>
                                    <p className="text-muted-foreground">Designing autonomous AI agents with LangChain, LangGraph, and RAG architectures for real-world automation</p>
                                </div>
                            </div>
                        </Card>

                        {/* Card: Full-Stack Development */}
                        <Card className="p-6 gap-0 transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-none border-2 border-border bg-secondary-background">
                                    <Monitor className="h-6 w-6 text-foreground"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">Building modern, scalable web applications with React, Next.js, Node.js, and TypeScript</p>
                                </div>
                            </div>
                        </Card>

                        {/* Card: MLOps & Observability */}
                        <Card className="p-6 gap-0 transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
                            <div className="flex items-start gap-4">
                                {/* Container do ícone */}
                                <div className="p-3 rounded-none border-2 border-border bg-secondary-background">
                                    <Activity className="h-6 w-6 text-foreground"/>
                                </div>
                                {/* Descrição da habilidade */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">MLOps & Observability</h4>
                                    <p className="text-muted-foreground">Ensuring AI systems are reliable in production with observability, evaluation, and testing pipelines using tools like LangFuse</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};