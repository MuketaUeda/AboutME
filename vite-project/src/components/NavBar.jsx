import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// Itens de navegação para a navbar
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

// Componente de navegação - fixo no topo com efeito de scroll
export const Navbar = () => {
    // Estados para controlar scroll e menu mobile
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Efeito de scroll para estilização da navbar
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
            <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo/Nome */}
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative">
                        <span className="text-glow text-foreground">Gabriel Rosati</span>
                        <span className="ml-2">Portfolio</span>
                    </span>
                </a>

                {/* Área dos botões e navegação - tudo junto à direita */}
                <div className="flex items-center space-x-6">
                    {/* Navegação Desktop - agora próxima aos botões */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Botão de tema - visível em todas as telas */}
                    <ThemeToggle />
                    
                    {/* Botão do menu mobile */}
                    <button 
                        onClick={() => {
                            console.log('Menu clicked, current state:', isMenuOpen);
                            setIsMenuOpen((prev) => !prev);
                        }}
                        className="md:hidden p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300 border border-primary/20 relative z-50"
                    >
                        {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
                    </button>
                </div>

                {/* Overlay do menu mobile */}
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center",
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