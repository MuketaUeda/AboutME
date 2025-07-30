import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

// Theme Toggle Component - Switches between light and dark themes with localStorage persistence
export const ThemeToggle = () => {
    // State to track current theme mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from localStorage on component mount
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

    // Toggle between light and dark themes
    const toogleTheme = () => {
        if (isDarkMode) {
            // Switch to light mode
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        } else{
            // Switch to dark mode
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        // Fixed positioned button in top-right corner with responsive visibility
        <button onClick={toogleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", 
            "focus:outline-hidden"
        )}>
            {/* Show sun icon in dark mode, moon icon in light mode */}
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" /> }
        </button>
    );
};