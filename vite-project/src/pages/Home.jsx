import { Navbar } from "../components/NavBar"
import { StarBackground } from '@/components/StarBackground'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

// Página principal - landing page com tema cósmico
export const Home = () => {
    return (
        // Container principal com altura total da viewport e design responsivo
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Barra de navegação - deve ficar no topo */}
            <Navbar/>

            {/* Fundo cósmico animado com estrelas e meteoros */}
            <StarBackground/>

            {/* Área de conteúdo principal */}
            <main className="relative z-10">
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>

            {/* Seção de rodapé - a ser implementada */}
            <Footer/>

        </div>
    )
}   