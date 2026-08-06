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

    // Trava o scroll da página enquanto o menu mobile está aberto - evita que o
    // fundo role por baixo do overlay full-screen
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className={cn("fixed top-0 w-full z-40 bg-background border-b-2 border-border transition-all duration-150",
                isScrolled ? "py-3 shadow-shadow" : "py-5"
            )}>
                <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo/Nome */}
                    <a className="font-display text-xl font-bold text-foreground flex items-center gap-3" href="#hero">
                        <span className="flex items-center justify-center w-9 h-9 border-2 border-border shadow-shadow bg-main text-foreground -rotate-3 text-sm">
                            GR
                        </span>
                        <span className="text-main text-main">Portifolio</span>
                    </a>

                    {/* Área dos botões e navegação - tudo junto à direita */}
                    <div className="flex items-center space-x-6">
                        {/* Navegação Desktop - agora próxima aos botões */}
                        <div className="hidden md:flex space-x-6">
                            {navItems.map((item, key) => (
                                <a key={key} href={item.href} className="text-foreground hover:text-main transition-colors duration-150">
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Botão de tema - visível em todas as telas */}
                        <ThemeToggle />

                        {/* Botão do menu mobile */}
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden p-2 rounded-none bg-secondary-background hover:bg-chart-1 transition-colors duration-150 border-2 border-border relative z-50"
                        >
                            {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay do menu mobile */}
            <div className={cn("fixed inset-0 bg-background z-30 flex flex-col items-center justify-center",
                "transition-all duration-150 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col items-center space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground hover:text-main transition-colors duration-150"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};