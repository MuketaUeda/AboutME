import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

// Componente de alternância de tema - alterna entre temas claro e escuro
export const ThemeToggle = () => {
    // Estado para rastrear o modo atual do tema
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Inicializa o tema do localStorage quando o componente monta
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme == "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark");
        }
    }, [])

    // Alterna entre temas claro e escuro
    const toogleTheme = () => {
        if (isDarkMode) {
            // Muda para modo claro
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        } else{
            // Muda para modo escuro
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        // Botão fixo no canto superior direito com visibilidade responsiva
        <button onClick={toogleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-40 p-2 rounded-full transition-colors duration-300", 
            "focus:outline-none"
        )}>
            {/* Mostra ícone do sol no modo escuro, lua no modo claro */}
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" /> }
        </button>
    );
};