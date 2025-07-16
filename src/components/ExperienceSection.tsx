"use client"

import { useEffect, useRef, useState } from "react"

export default function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      id: 1,
      period: "Nov 2024 - Present",
      role: "Fullstack Developer",
      company: "EVOP Software House",
      location: "Surabaya",
      type: "Current Position",
      logo: "/placeholder.svg?height=80&width=80",
      responsibilities: [
        "Develop web applications using Laravel (backend) dan React.js (frontend)",
        "Design dan optimize UI/UX untuk improve user experience",
        "Integrate third-party APIs seperti Midtrans untuk payments",
        "Perform debugging dan troubleshooting untuk improve performance",
      ],
      technologies: ["Laravel", "React.js", "Midtrans API", "MySQL"],
    },
    {
      id: 2,
      period: "Jan 2025 - Present",
      role: "Ketua Bidang Web Development",
      company: "Himpunan Mahasiswa Teknik Informatika",
      location: "Universitas Airlangga",
      type: "Leadership Role",
      logo: "/placeholder.svg?height=80&width=80",
      responsibilities: [
        "Lead team dalam development dan maintenance website organisasi",
        "Coordinate team members dalam managing website content",
        "Apply best practices dalam version control management (Git/GitHub)",
        "Implement modern web development workflows",
      ],
      technologies: ["Git/GitHub", "Team Leadership", "Project Management"],
    },
    {
      id: 3,
      period: "Jan 2022 - Jul 2022",
      role: "Intern Employee",
      company: "Enter Komputer",
      location: "Pasuruan",
      type: "Previous Experience",
      logo: "/placeholder.svg?height=80&width=80",
      responsibilities: [
        "Performed system upgrades dan device performance optimization",
        "Direct customer interaction untuk understand technology needs",
        "Working dengan various operating systems dan applications",
        "Technical support and troubleshooting",
      ],
      technologies: ["Windows", "Hardware", "Customer Support", "System Administration"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const items = document.querySelectorAll(".timeline-item")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item ${visibleItems.includes(index) ? "visible" : ""}`}
              data-index={index}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="experience-info">
                      <div className="experience-meta">
                        <span className={`experience-type ${exp.type.toLowerCase().replace(" ", "-")}`}>
                          {exp.type}
                        </span>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                      <div className="role-company-wrapper">
                        <div className="company-logo">
                          <img src={exp.logo || "/placeholder.svg"} alt={`${exp.company} logo`} className="logo-image" />
                        </div>
                        <div className="role-company-content">
                          <h3 className="experience-role">{exp.role}</h3>
                          <div className="experience-company-wrapper">
                            <div className="experience-company">
                              <span className="company-name">{exp.company}</span>
                              <span className="company-location">📍 {exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>

                    <div className="technologies">
                      <span className="tech-label">Technologies:</span>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
          margin-bottom: 4rem;
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
        
        .timeline {
          position: relative;
          padding: 2rem 0;
        }
        
        .timeline-line {
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #2563eb, #3b82f6);
          border-radius: 1px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s ease;
        }
        
        .timeline-item.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .timeline-marker {
          position: absolute;
          left: 1.25rem;
          top: 1.5rem;
          z-index: 2;
        }
        
        .marker-dot {
          width: 1.5rem;
          height: 1.5rem;
          background: #2563eb;
          border-radius: 50%;
          border: 4px solid #ffffff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
        }
        
        .timeline-content {
          margin-left: 5rem;
        }
        
        .experience-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .card-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }

        .experience-info {
          flex: 1;
        }
        
        .experience-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .experience-type {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .current-position {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .leadership-role {
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
        }
        
        .previous-experience {
          background: rgba(100, 116, 139, 0.1);
          color: #64748b;
        }
        
        .experience-period {
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .experience-role {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .role-company-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .company-logo {
          flex-shrink: 0;
        }

        .logo-image {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          object-fit: cover;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
        }

        .role-company-content {
          flex: 1;
        }
        
        .experience-company-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .experience-company {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .company-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2563eb;
        }
        
        .company-location {
          font-size: 0.9rem;
          color: #64748b;
        }

        .responsibilities {
          list-style: none;
          margin-bottom: 1.5rem;
        }
        
        .responsibilities li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: #475569;
          line-height: 1.6;
        }
        
        .responsibilities li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #2563eb;
          font-size: 0.8rem;
        }
        
        .technologies {
          border-top: 1px solid #e2e8f0;
          padding-top: 1.5rem;
        }
        
        .tech-label {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.75rem;
          display: block;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 1rem;
          }
          
          .timeline-marker {
            left: 0.25rem;
          }
          
          .timeline-content {
            margin-left: 3rem;
          }
          
          .experience-card {
            padding: 1.5rem;
          }
          
          .card-header {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            text-align: center;
          }
          
          .experience-info {
            width: 100%;
          }
          
          .role-company-wrapper {
            flex-direction: column;
            align-items: center;
          }
          
          .company-logo {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}