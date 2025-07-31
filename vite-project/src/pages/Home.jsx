import { Navbar } from "../components/NavBar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from "../components/AboutSection"

// Home Page Component - Main landing page with cosmic theme
export const Home = () => {
    return (
        // Main container with full viewport height and responsive design
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Navigation bar - should be on top */}
            <Navbar/>

            {/* Theme toggle button - switches between light/dark modes */}
            <ThemeToggle/>

            {/* Animated cosmic background with stars and meteors */}
            <StarBackground/>

            {/* Main content area */}
            <main>
                <HeroSection/>
                <AboutSection/>
            </main>

           

            {/* Footer section - to be implemented */}
            {/* Footer */}

        </div>
    )
}   