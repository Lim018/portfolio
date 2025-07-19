"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    {
      name: "JavaScript",
      category: "Programming",
      icon: "/logo/js.png?height=40&width=40&text=JS",
      color: "#F7DF1E",
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: "/logo/react.svg?height=40&width=40&text=React",
      color: "#61DAFB",
    },
    {
      name: "PHP",
      category: "Backend",
      icon: "/logo/php.png?height=40&width=40&text=PHP",
      color: "#777BB4",
    },
    {
      name: "Laravel",
      category: "Framework",
      icon: "/logo/laravel.svg?height=40&width=40&text=Laravel",
      color: "#FF2D20",
    },
    {
      name: "Python",
      category: "Programming",
      icon: "/logo/python.svg?height=40&width=40&text=Python",
      color: "#3776AB",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: "/logo/mysql.svg?height=40&width=40&text=MySQL",
      color: "#4479A1",
    },
    {
      name: "Figma",
      category: "Design",
      icon: "/logo/figma.svg?height=40&width=40&text=Figma",
      color: "#F24E1E",
    },
    {
      name: "GitHub",
      category: "Version Control",
      icon: "/logo/github.svg?height=40&width=40&text=GitHub",
      color: "#181717",
    },
    {
      name: "ClickUp",
      category: "Project Management",
      icon: "/logo/clickup.svg?height=40&width=40&text=ClickUp",
      color: "#7B68EE",
    },
    {
      name: "Postman",
      category: "API Testing",
      icon: "/logo/postman.svg?height=40&width=40&text=Postman",
      color: "#FF6C37",
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: "/logo/flutter.svg?height=40&width=40&text=Flutter",
      color: "#02569B",
    },
    {
      name: "Node.js",
      category: "Database",
      icon: "/logo/appwrite.svg?height=40&width=40&text=Node",
      color: "#339933",
    },
  ]

  const skillCategories = [
    { name: "Programming", color: "#3b82f6" },
    { name: "Frontend", color: "#10b981" },
    { name: "Backend", color: "#f59e0b" },
    { name: "Framework", color: "#ef4444" },
    { name: "Database", color: "#8b5cf6" },
    { name: "Design", color: "#ec4899" },
    { name: "Version Control", color: "#6b7280" },
    { name: "Project Management", color: "#06b6d4" },
    { name: "API Testing", color: "#f97316" },
    { name: "Mobile", color: "#84cc16" },
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
                {/* <div className="education-header">
                  <h4>Universitas Airlangga</h4>
                  <span className="gpa">GPA: 3.59/4.0</span>
                </div> */}
                <div className="education-header">
                  <h4>Universitas Airlangga</h4>
                  <span className="year">Semester 4</span>
                </div>
                <p>Teknik Informatika</p>
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
            <h3>Technical Skills & Tools</h3>

            {/* <div className="skills-categories">
              {skillCategories.map((category) => (
                <div key={category.name} className="category-badge" style={{ borderColor: category.color }}>
                  <span style={{ color: category.color }}>●</span>
                  {category.name}
                </div>
              ))}
            </div> */}

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const category = skillCategories.find((cat) => cat.name === skill.category)
                return (
                  <div
                    key={skill.name}
                    className={`skill-card ${isVisible ? "visible" : ""}`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="skill-icon-container">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={`${skill.name} icon`}
                        className="skill-icon"
                        style={{ backgroundColor: skill.color + "20" }}
                      />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-category" style={{ color: category?.color || "#64748b" }}>
                        {skill.category}
                      </span>
                    </div>
                  </div>
                )
              })}
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

        .skills-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .category-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f8fafc;
          border: 1px solid;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #64748b;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-card {
          background: #ffffff;
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
        }

        .skill-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .skill-icon-container {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }
        
        .skill-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          padding: 8px;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.1);
        }

        .skill-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .skill-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.95rem;
          margin: 0;
        }
        
        .skill-category {
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
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

          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
          }

          .skill-card {
            padding: 1rem;
          }

          .skills-categories {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
