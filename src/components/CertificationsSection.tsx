"use client"

import { useState, useEffect, useRef } from "react"

export default function CertificationsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const certifications = [
    {
      id: 1,
      title: "Junior Mobile Programmer",
      provider: "Digital Talent Scholarship 2025",
      organization: "BPSDMP Surabaya / BADAN PENGEMBANGAN SDM KOMDIG",
      duration: "24.1 Jam Pelatihan",
      date: "12-13 Juni 2025",
      status: "Completed",
      description:
        "Comprehensive mobile programming certification covering modern mobile development practices and technologies.",
      curriculum: [
        "Platform Operating System dan Bahasa Pemrograman (3.8 JP)",
        "Merancang Mobile Interface (2.5 JP)",
        "Merancang Database dan Data Persistence (9 JP)",
        "Mobile Location Based Service, GPS, dan Navigation (2 JP)",
        "Dasar-Dasar Mobile Security (1 JP)",
        "Mobile Sensor dan Spesifikasi Teknis (2 JP)",
        "Mobile Seluler Network (2 JP)",
      ],
      skills: ["Mobile Development", "Database Design", "UI/UX Design", "Mobile Security", "GPS Integration"],
      badge: "https://play-lh.googleusercontent.com/InBDicXpdFPR5LoTB-u9h1iM2f1F-qKQPfPiwYGnPRwWQYKnnkoLqI1E7jTAras2BgWw=s94-rw?height=100&width=100",
    },
    {
      id: 2,
      title: "Sekolah Beta Intensif Flutter",
      provider: "Sekolah Beta",
      organization: "Flutter Development Program",
      duration: "Intensive Program",
      date: "2024",
      status: "Completed",
      description: "Intensive Flutter development program focusing on cross-platform mobile application development.",
      curriculum: [
        "Flutter Fundamentals",
        "Dart Programming Language",
        "State Management",
        "API Integration",
        "App Deployment",
      ],
      skills: ["Flutter", "Dart", "Cross-platform Development", "State Management", "API Integration"],
      badge: "https://drive.alkademi.id/v1/upload/class/1716749073615.png?height=100&width=100",
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

    const cards = document.querySelectorAll(".certification-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={sectionRef} className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">
            Continuous learning and professional development in mobile and web technologies
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`certification-card ${visibleCards.includes(index) ? "visible" : ""}`}
              data-index={index}
            >
              <div className="card-header">
                <div className="badge-container">
                  <img
                    src={cert.badge || "/placeholder.svg"}
                    alt={`${cert.title} Badge`}
                    className="certification-badge"
                  />
                  <div className={`status-indicator ${cert.status.toLowerCase()}`}>{cert.status}</div>
                </div>

                <div className="cert-info">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-provider">
                    <span className="provider-name">{cert.provider}</span>
                    <span className="organization">{cert.organization}</span>
                  </div>
                  <div className="cert-meta">
                    <span className="duration">📚 {cert.duration}</span>
                    <span className="date">📅 {cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <p className="cert-description">{cert.description}</p>

                <div className="curriculum-section">
                  <h4>Curriculum Highlights:</h4>
                  <ul className="curriculum-list">
                    {cert.curriculum.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="skills-section">
                  <h4>Skills Acquired:</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <div className="summary-stat">
              <span className="stat-number">24.1+</span>
              <span className="stat-label">Training Hours</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="summary-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Skills Mastered</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .certifications-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
        }
        
        .container {
          max-width: 1000px;
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
        
        .certifications-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .certification-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }
        
        .certification-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .certification-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .card-header {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }
        
        .badge-container {
          position: relative;
          flex-shrink: 0;
        }
        
        .certification-badge {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          object-fit: cover;
          border: 3px solid #e2e8f0;
        }
        
        .status-indicator {
          position: absolute;
          bottom: -8px;
          right: -8px;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .completed {
          background: #22c55e;
          color: white;
        }
        
        .cert-info {
          flex: 1;
        }
        
        .cert-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .cert-provider {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }
        
        .provider-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2563eb;
        }
        
        .organization {
          font-size: 0.9rem;
          color: #64748b;
        }
        
        .cert-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.9rem;
          color: #64748b;
        }
        
        .cert-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .curriculum-section,
        .skills-section {
          margin-bottom: 1.5rem;
        }
        
        .curriculum-section h4,
        .skills-section h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .curriculum-list {
          list-style: none;
          margin-left: 0;
        }
        
        .curriculum-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .curriculum-list li::before {
          content: '📖';
          position: absolute;
          left: 0;
          font-size: 0.8rem;
        }
        
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .skill-tag {
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        
        .achievements-summary {
          margin-top: 3rem;
        }
        
        .summary-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-around;
          text-align: center;
        }
        
        .summary-stat {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #2563eb;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .card-header {
            flex-direction: column;
            gap: 1rem;
          }
          
          .cert-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .summary-card {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
