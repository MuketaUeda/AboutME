import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

// Navigation items for the navbar
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

// Navbar Component - Fixed navigation with scroll effect
export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle scroll effect for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn("fixed top-0 w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Gabriel Rosati</span>
                        <span className="ml-2">Portfolio</span>
                    </span>
                </a>

                {/*Desktop Navigation*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                    ))}
                </div>

                {/*Mobile Menu Button*/}
                <button 
                    onClick={() => {
                        console.log('Menu clicked, current state:', isMenuOpen);
                        setIsMenuOpen((prev) => !prev);
                    }}
                    className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300 border border-primary/20 relative z-50"
                >
                    {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
                </button>

                {/*Mobile Menu Overlay*/}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};