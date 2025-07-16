"use client"

import { useState, useEffect, useRef } from "react"

export default function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Laravel", "React.js", "MySQL", "Midtrans", "Tailwind CSS"],
      features: [
        "Payment Gateway Integration",
        "Real-time Inventory Management",
        "Admin Dashboard",
        "Responsive Design",
      ],
      impact: {
        description: "Improved user conversion rate by 45% and reduced cart abandonment by 30%",
        metrics: "Serving 5K+ active users monthly",
      },
      github: "https://github.com/Lim018",
      demo: "#",
      status: "Completed",
    },
    {
      id: 2,
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express"],
      features: ["Real-time Collaboration", "Project Tracking", "Team Management", "Progress Analytics"],
      impact: {
        description: "Increased team productivity by 60% and reduced project delivery time by 25%",
        metrics: "Used by 15+ development teams",
      },
      github: "https://github.com/Lim018",
      demo: "#",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Digital Portfolio Website",
      description:
        "Modern, responsive portfolio website with 3D animations, smooth transitions, and optimized performance for showcasing professional work.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React.js", "Three.js", "Framer Motion", "CSS Modules"],
      features: ["3D Animations", "Smooth Transitions", "Mobile Optimized", "SEO Friendly"],
      impact: {
        description: "Achieved 95+ Lighthouse performance score and 40% faster loading time",
        metrics: "Optimized for mobile-first experience",
      },
      github: "https://github.com/Lim018",
      demo: "#",
      status: "Completed",
    },
    {
      id: 4,
      title: "Mobile Learning App",
      description:
        "Cross-platform mobile learning application with interactive content, progress tracking, and offline capabilities for enhanced learning experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Flutter", "Firebase", "Dart", "SQLite"],
      features: ["Offline Learning", "Progress Tracking", "Interactive Content", "Cross-platform"],
      impact: {
        description: "Enhanced learning engagement by 80% with offline-first approach",
        metrics: "Supporting 1K+ students across multiple institutions",
      },
      github: "https://github.com/Lim018",
      demo: "#",
      status: "Completed",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = document.querySelectorAll(".project-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing digital solutions that solve real-world problems through innovative technology
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${visibleCards.includes(index) ? "visible" : ""}`}
              data-index={index}
            >
              <div className="card-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="image-overlay">
                  <div className="overlay-actions">
                    <a href={project.github} className="action-btn github-btn">
                      <span>GitHub</span>
                    </a>
                    <a href={project.demo} className="action-btn demo-btn">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
                <div className={`status-badge ${project.status.toLowerCase().replace(" ", "-")}`}>{project.status}</div>
              </div>

              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-impact">
                  <h4>Impact:</h4>
                  <div className="impact-content">
                    <p className="impact-description">{project.impact.description}</p>
                    <span className="impact-metrics">{project.impact.metrics}</span>
                  </div>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <a href="https://github.com/Lim018" className="view-more-btn">
            View More Projects on GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 6rem 0;
          background: #ffffff;
          position: relative;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          border-radius: 2px;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .project-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .card-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .project-card:hover .card-image img {
          transform: scale(1.05);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(37, 99, 235, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .image-overlay {
          opacity: 1;
        }
        
        .overlay-actions {
          display: flex;
          gap: 1rem;
        }
        
        .action-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .github-btn {
          background: #ffffff;
          color: #2563eb;
        }
        
        .github-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }
        
        .demo-btn {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }
        
        .demo-btn:hover {
          background: #ffffff;
          color: #2563eb;
        }
        
        .status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .completed {
          background: rgba(34, 197, 94, 0.9);
          color: #ffffff;
        }
        
        .in-progress {
          background: rgba(251, 191, 36, 0.9);
          color: #ffffff;
        }
        
        .card-content {
          padding: 2rem;
        }
        
        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .project-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .project-features {
          margin-bottom: 1.5rem;
        }
        
        .project-features h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }
        
        .project-features ul {
          list-style: none;
          margin-left: 0;
        }
        
        .project-features li {
          position: relative;
          padding-left: 1.2rem;
          margin-bottom: 0.5rem;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        .project-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: bold;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-badge {
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        
        .section-footer {
          text-align: center;
        }
        
        .view-more-btn {
          display: inline-block;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        }
        
        .view-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }

        .project-impact {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(34, 197, 94, 0.05);
          border-left: 4px solid #22c55e;
          border-radius: 0 8px 8px 0;
        }

        .project-impact h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.75rem;
        }

        .impact-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .impact-description {
          color: #059669;
          font-weight: 500;
          line-height: 1.5;
        }

        .impact-metrics {
          font-size: 0.9rem;
          color: #64748b;
          font-style: italic;
        }
      `}</style>
    </section>
  )
}
