// Import icons from lucide-react for visual elements
import { Code, User, Briefcase } from "lucide-react";

// AboutSection Component - Displays personal information and professional overview
// This component creates a two-column layout with personal description and skill cards
export const AboutSection = () => {
    return (
        // Main section container with responsive padding and positioning
        <section id="about" className="py-24 px-4 relative">
            {/* Container with max width for better content alignment */}
            <div className="container mx-auto max-w-5xl">
                {/* Section title with responsive text sizing and primary color accent */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                
                {/* Two-column grid layout: personal info on left, skill cards on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left column: Personal description and call-to-action buttons */}
                    <div className="space-y-6">
                        {/* Placeholder for personal title/headline */}
                        <h3 className="text-2xl font-semibold">ADICIONAR DEPOIS</h3>
                        
                        {/* Placeholder paragraphs for personal description */}
                        <p className="text-foreground/60">ADICIONAR DEPOIS</p>
                        <p className="text-foreground/60">ADICIONAR DEPOIS</p>

                        {/* Action buttons container with responsive flex layout */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                            {/* Primary call-to-action button with cosmic styling */}
                            <a href="#contact" className="cosmic-button text-sm px-4 py-2">
                                Get In Touch
                            </a>
                            
                            {/* Secondary buttons for CV downloads with hover effects */}
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                CV - PTBR
                            </a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300">
                                CV - EN
                            </a>
                        </div>
                    </div>
                    
                    {/* Right column: Professional skill cards */}
                    <div className="grid grid-cols-1 gap-6">
                        
                        {/* Web Development skill card */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Icon container with primary color background */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Skill description */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Web Development</h4>
                                    <p className="text-foreground/60">Building modern web applications</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mobile Development skill card */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Icon container with primary color background */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Skill description */}
                                <div>
                                    <h4 className="font-semibold mb-2 text-foreground">Mobile Development</h4>
                                    <p className="text-foreground/60">Creating responsive mobile apps</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* UI/UX Design skill card */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                {/* Icon container with primary color background */}
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                {/* Skill description */}
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