import { Code, User, Briefcase } from "lucide-react";

// About Section Component - Personal information and introduction
export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">ADICIONAR DEPOIS</h3>
                        <p className="text-muted-foreground">ADICIONAR DEPOIS</p>
                        <p className="text-muted-foreground">ADICIONAR DEPOIS</p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button text-sm px-4 py-2">
                                Get In Touch
                            </a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                CV - PTBR
                            </a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                CV - EN
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Web Development</h4>
                                    <p className="text-muted-foreground">Building modern web applications</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Mobile Development</h4>
                                    <p className="text-muted-foreground">Creating responsive mobile apps</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    
                                    <h4 className="font-semibold mb-2 text-foreground">UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing user-friendly interfaces</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};