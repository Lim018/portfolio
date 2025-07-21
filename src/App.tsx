import { useEffect, useRef } from "react"
import Navigation from "./components/Navigation"
import ScrollProgress from "./components/ScrollProgress"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import ProjectsSection from "./components/ProjectsSection"
import CertificationsSection from "./components/CertificationsSection"
import ContactSection from "./components/ContactSection"
import "./App.css"

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scrolling behavior
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    document.addEventListener("click", handleScroll)
    return () => document.removeEventListener("click", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="portfolio-container">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App