import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

// Componente de alternância de tema - alterna entre temas claro e escuro
export const ThemeToggle = () => {
    // Estado para rastrear o modo atual do tema - inicializa como dark por padrão
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Inicializa o tema do localStorage quando o componente monta
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "light"){
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark");
        } else {
            // Por padrão, usa modo escuro se não há tema salvo ou se é "dark"
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
            // Salva o tema escuro como padrão se não há tema salvo
            if (!storedTheme) {
                localStorage.setItem("theme", "dark")
            }
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
        // Botão de tema integrado na navbar - sem posicionamento fixo
        <button onClick={toogleTheme} className={cn("p-2 rounded-none transition-colors duration-150",
            "focus:outline-none border-2 border-border bg-secondary-background hover:bg-chart-1"
        )}>
            {/* Mostra ícone do sol no modo escuro, lua no modo claro */}
            {isDarkMode ? <Sun className="h-5 w-5 text-chart-1" /> : <Moon className="h-5 w-5 text-accent" /> }
        </button>
    );
};