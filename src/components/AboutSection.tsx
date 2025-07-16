"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "JavaScript (React.js)", level: 90 },
    { name: "PHP (Laravel)", level: 85 },
    { name: "Python", level: 80 },
    { name: "RESTful API", level: 88 },
    { name: "Figma", level: 75 },
    { name: "GitHub", level: 85 },
    { name: "ClickUp", level: 70 },
    { name: "Postman", level: 80 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>

            <div className="vision-statement">
              <p>
                As a passionate D4 Teknik Informatika student at Universitas Airlangga, I specialize in transforming
                complex digital challenges into elegant, user-centered solutions. My journey from technical support to
                fullstack development has shaped my unique perspective on problem-solving in the digital landscape.
              </p>

              <p>
                With a strong foundation in both frontend and backend technologies, I focus on creating seamless digital
                experiences that bridge the gap between innovative technology and practical business solutions.
              </p>
            </div>

            <div className="education-highlight">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <h4>Universitas Airlangga</h4>
                  <span className="gpa">GPA: 3.59/4.0</span>
                </div>
                <p>D4 Teknik Informatika • Semester 4</p>
                <div className="coursework">
                  <span>Relevant Coursework:</span>
                  <ul>
                    <li>Workshop Pengembangan Perangkat Lunak Web</li>
                    <li>Workshop Desain UI</li>
                  </ul>
                </div>
              </div>

              <div className="education-item">
                <div className="education-header">
                  <h4>SMK Negeri Winongan Pasuruan</h4>
                  <span className="year">April 2023</span>
                </div>
                <p>Teknik Komputer dan Jaringan</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 6rem 0;
          background: #ffffff;
          position: relative;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          border-radius: 2px;
        }
        
        .vision-statement p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 1.5rem;
        }
        
        .education-highlight {
          margin-top: 3rem;
        }
        
        .education-highlight h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        
        .education-item {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1rem;
          border-left: 4px solid #2563eb;
        }
        
        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .education-header h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e293b;
        }
        
        .gpa {
          background: #2563eb;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .year {
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .coursework {
          margin-top: 1rem;
          font-size: 0.95rem;
          color: #64748b;
        }
        
        .coursework ul {
          margin-top: 0.5rem;
          margin-left: 1rem;
        }
        
        .coursework li {
          margin-bottom: 0.25rem;
        }
        
        .skills-section h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2rem;
        }
        
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .skill-item {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
        }
        
        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        
        .skill-name {
          font-weight: 600;
          color: #1e293b;
        }
        
        .skill-percentage {
          font-size: 0.9rem;
          color: #2563eb;
          font-weight: 600;
        }
        
        .skill-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          border-radius: 4px;
          transition: width 1s ease-out;
        }
        
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .education-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}
