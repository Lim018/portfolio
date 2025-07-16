"use client"

import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["hero", "about", "experience", "projects", "certifications", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span>Abdul Alim</span>
        </div>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={activeSection === item.id ? "active" : ""}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .navigation.scrolled {
          background: rgba(255, 255, 255, 0.98);
          border-bottom-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        
        .nav-brand span {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: -0.02em;
        }
        
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-menu a {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-menu a:hover,
        .nav-menu a.active {
          color: #2563eb;
        }
        
        .nav-menu a.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #2563eb;
          border-radius: 1px;
        }
        
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }
          
          .nav-menu {
            gap: 1rem;
          }
          
          .nav-menu a {
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 640px) {
          .nav-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
