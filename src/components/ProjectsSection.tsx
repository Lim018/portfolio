"use client"

import { useState, useEffect, useRef } from "react"

export default function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      id: 1,
      title: "KAI Access Clone – Ticket Booking App",
      description:
        "A Flutter-based mobile app that replicates KAI Access ticket booking features, allowing users to search, book, and manage train tickets seamlessly.",
      image: "/projects/kai.png?height=300&width=400",
      technologies: ["Flutter", "Appwrite"],
      features: [
        "Train Schedule Search",
        "Seat & Date Selection",
        "E-Ticket Generation with QR Code",
        "User Booking History",
      ],
      impact: {
        description: "Simulated real-world ticket booking with responsive and native experience",
        // metrics: "Handled 500+ test bookings in demo environment",
      },
      github: "https://github.com/Lim018/Access-by-KAI-copy.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 2,
      title: "KAI Access Clone – Ticket Scanner App",
      description:
        "A companion admin/crew app for scanning and validating tickets using QR code camera scanner, with real-time status update to Firestore.",
      image: "/projects/scan.png?height=300&width=400",
      technologies: ["Flutter", "Appwrite", "QR Code Scanner Plugin"],
      features: [
        "Real-time QR Code Scanning",
        "Automatic Ticket Status Update",
        "Validation Feedback (Valid/Invalid)",
        "History Log for Scanned Tickets",
      ],
      impact: {
        description: "Simulated check-in system similar to real railway workflows",
        // metrics: "Scanned 300+ tickets with 100% accuracy in controlled tests",
      },
      github: "https://github.com/Lim018/Access-by-KAI-TicketScanner.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 3,
      title: "Bank Credit Analyzer – Risk Evaluation System",
      description:
        "A web-based credit risk analysis tool to assess customer financial profiles and calculate their eligibility for credit approval. Built with React.js and designed with a dynamic, branching questionnaire system.",
      image: "/projects/credit.png?height=300&width=400",
      technologies: ["React.js"],
      features: [
        "Dynamic Branching Questionnaire Flow",
        "5-Level Risk Interpretation Output",
        "Real-time Score Calculation & Visualization",
        "Restartable Risk Simulation with Answer History",
      ],
      impact: {
        description:
          "Improved understanding of creditworthiness for potential applicants using intelligent scoring and visual feedback.",
        // metrics:
        //   "Completed as UAS project for AI subject with full simulation flow and real-time feedback system. Supported multi-variable input (income, debt, business profile, etc).",
      },
      github: "https://github.com/Lim018/BCA-Credit-Analyzer.git",
      demo: "https://lim018.github.io/BCA-Credit-Analyzer/",
      status: "Completed"
    },
    {
      id: 4,
      title: "EcoCart – Sustainable E-Commerce Platform",
      description:
        "EcoCart is a React-based e-commerce platform that promotes sustainable living by offering a curated catalog of eco-friendly products, educational content, and full-featured transaction and admin management system.",
      image: "/projects/ecocart.png?height=300&width=400",
      technologies: ["React.js"],
      features: [
        "Product Catalog & Detail Page",
        "Eco-Friendly Article Archive & Detail",
        "User Profile & Live Chat",
        "Admin Dashboard (Product, Article, User, Transaction Management)",
      ],
      impact: {
        description: "Promoted sustainable shopping habits and provided eco-education through engaging content",
        // metrics: "Featured 100+ eco products and 50+ educational articles in pilot run",
      },
      github: "hhttps://github.com/Lim018/EcoCart-private.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 5,
      title: "TemuKembali – Lost & Found Campus App",
      description:
        "TemuKembali is a Flutter-based mobile application that enables students to report and browse lost items on campus. The system allows users to submit detailed reports and view a real-time list of reported lost items.",
      image: "/projects/temu.png?height=300&width=400",
      technologies: ["Flutter", "Appwrite"],
      features: [
        "Report Lost Items (name, location, description, date)",
        "View Lost Item List with Search",
        "Reporter Info (name, user ID)",
        "Real-time Updates",
        "Date Filtering",
      ],
      impact: {
        description: "Helped connect students with lost items and streamlined the reporting process",
        // metrics: "Over 200+ items reported and managed in the first 2 months",
      },
      github: "https://github.com/Lim018/TemuKembali.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 6,
      title: "Rewear.co - Circular Fashion Platform",
      description:
        "Eco-conscious platform designed to promote circular fashion through buying, and tailoring second-hand Fashion. It combines marketplace functionality with educational content and a clean, sustainable redesign.",
      image: "/projects/rewear.png?height=300&width=400",
      technologies: ["HTML", "Bootstrap", "AOS"],
      features: [
        "Home / Landing Page with Highlights",
        "Redesign Feature for Custom Requests",
        "Education Section (Eco Articles & Blog)",
        "Full UI/UX Redesign",
      ],
      impact: {
        description: "Empowered users to engage in sustainable shopping with education-first experience, reducing clothing waste and promoting reuse culture.",
        // metrics: "Featured 100+ products, 20+ educational articles, and used in sustainability campaign prototype",
      },
      github: "https://github.com/Lim018/ifest-wdc.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 7,
      title: "Approval System – Multi-level Proposal Workflow",
      description:
        "Project Approval System is a Laravel-based web application designed to streamline and digitize the process of submitting and approving project proposals within a company. It features multi-level approval, document attachments, and real-time notifications across user roles.",
      image: "/projects/age.png?height=300&width=400",
      technologies: ["Laravel", "MySQL"],
      features: [
        "Proposal Submission with File Attachments",
        "Multi-level Approval (Supervisor → Dept. Head → HRD)",
        "Revision and Commenting System",
        "Email or In-app Notifications for Review Stages",
        "Analytical Dashboard for Admin",
        "Transparent Status Tracking for Users"
      ],
      impact: {
        description: "Improved internal workflow efficiency and transparency for project proposals across departments.",
        // metrics: "Reduced manual approval processing time by 70% in internal use case testing",
      },
      github: "https://github.com/Lim018/project-approval-system",
      demo: "#",
      status: "Completed"
    },
    {
      id: 8,
      title: "Edurads – Web-based Quiz Game",
      description:
        "Edurads is a web-based educational quiz platform featuring 3-stage quizzes that can be played in real-time with others or individually. It includes a dynamic leaderboard and quiz creation tools, making it suitable for classrooms, competitions, and interactive learning.",
      image: "/projects/edurads.png?height=300&width=400",
      technologies: ["Laravel", "MysSQL", "AOS", "Bootstrap"],
      features: [
        "Dual Game Mode: Real-Time & Free Play",
        "Quiz Stages: Multiple Choice, Short Answer, True/False",
        "Real-time Leaderboard",
        "Room-based Multiplayer with Game PIN",
        "Custom Quiz Builder for Admins",
        "Login System for Quiz Creators",
        "Admin Dashboard for Managing Quizzes & Results"
      ],
      impact: {
        description: "Enabled gamified learning and real-time competitions for classrooms and organizations.",
        // metrics: "1000+ quizzes played, with multiple users engaging in real-time sessions.",
      },
      github: "https://github.com/Lim018/Web-based-quiz-game.git",
      demo: "https://edurads.my.id",
      status: "Completed"
    },
    {
      id: 9,
      title: "PS Rental Booking System",
      description:
        "Booking and payment system for a local PS rental business, featuring calendar UI and Midtrans integration.",
      image: "/projects/ps.png?height=300&width=400",
      technologies: ["Laravel", "Midtrans", "MySQL"],
      features: [
        "Interactive Booking Calendar",
        "Payment Integration",
        "Admin Booking Management",
        "Automatic Reminders",
      ],
      impact: {
        description: "Reduced manual booking errors by 90% and improved rental turnover rate",
        // metrics: "Over 300 bookings per month",
      },
      github: "https://github.com/Lim018/ps-rental-booking.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 10,
      title: "Taman Safari Website",
      description:
        "Informational and booking platform for a safari park, featuring ticket reservation, park information, and event listings.",
      image: "/projects/safari.png?height=300&width=400",
      technologies: ["Laravel","Midtrans" , "Bootstrap", "MySQL"],
      features: [
        "Online Ticket Booking",
        "Dynamic Event Schedule",
        "Interactive Map Integration",
        "Multilingual Support",
      ],
      impact: {
        description: "Increased online ticket sales and reduced on-site queues",
        metrics: "",
      },
      github: "https://github.com/Lim018/Taman-Safari-Prigen.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 11,
      title: "Inisialisasi 2024 Website",
      description:
        "Event platform for welcoming new Informatics students at Universitas Airlangga, with task submission and schedules.",
      image: "/projects/inis.png?height=300&width=400",
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      features: [
        "Task Upload System for Freshmen",
        "Event Timeline Display",
        "Admin Panel for Submission Checking",
        "Secure Role-based Access",
      ],
      impact: {
        description: "Facilitated smooth onboarding for new students",
        // metrics: "Used by 200+ freshmen in one academic batch",
      },
      github: "https://github.com/Lim018/inisialisasi-2024.git",
      demo: "#",
      status: "Completed",
    },
    {
      id: 12,
      title: "Toko Roti Ku – E-Commerce App for Bakery Products",
      description:
        "Toko Roti Ku is a mobile e-commerce application built using Flutter, designed to help users browse and order various bakery products online. The app supports both customer and admin roles, equipped with cart management, location-based checkout, and admin order handling.",
      image: "/projects/roti.png?height=300&width=400",
      technologies: ["Flutter", "Appwrite", "GPS Location API"],
      features: [
        "User Authentication (Customer & Admin)",
        "Product Catalog with Images & Prices",
        "Shopping Cart & Quantity Adjustment",
        "Checkout Form with Auto GPS Location",
        "Admin Order Management Panel",
        "User Profile & Logout Functionality"
      ],
      impact: {
        description: "Simplified the online bakery ordering process for small businesses and improved delivery efficiency with integrated GPS.",
        // metrics: "Used as a capstone project for Junior Mobile Programmer Certification",
      },
      github: "https://github.com/Lim018/toko_roti-sertikom.git",
      demo: "#",
      status: "Completed"
    }
//     {
//       id: 2,
//       title: "Danusin App",
//       description:
//         "Flutter-based mobile app that helps students organize and sell their fundraising products (danusan) around campus.",
//       image: "/placeholder.svg?height=300&width=400",
//       technologies: ["Flutter", "Firebase", "Google Maps API"],
//       features: [
//         "WhatsApp Purchase Redirect",
//         "Vendor Registration & Verification",
//         "User Reviews & Ratings",
//         "Location Mapping of Vendors",
//       ],
//       impact: {
//         description: "Empowered student vendors and improved access to campus products",
//         metrics: "500+ active student users within first 3 months",
//       },
//       github: "https://github.com/Lim018/danusin",
//       demo: "#",
//       status: "Completed",
//     },
//  {
//     id: 3,
//     title: "PS Rental Booking System",
//     description:
//       "Booking and payment system for a local PS rental business, featuring calendar UI and Midtrans integration.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Laravel", "Vue.js", "FullCalendar", "Midtrans", "MySQL"],
//     features: [
//       "Interactive Booking Calendar",
//       "Payment Integration",
//       "Admin Booking Management",
//       "Automatic Reminders",
//     ],
//     impact: {
//       description: "Reduced manual booking errors by 90% and improved rental turnover rate",
//       metrics: "Over 300 bookings per month",
//     },
//     github: "https://github.com/Lim018/ps-rental",
//     demo: "#",
//     status: "Completed",
//   },
//   {
//     id: 4,
//     title: "Sustainable Fashion Exchange",
//     description:
//       "Eco-conscious platform enabling users to trade or sell second-hand clothing to reduce waste in fashion.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["React.js", "Node.js", "MongoDB", "Express", "Socket.IO"],
//     features: [
//       "Real-time Chat for Trading",
//       "Item Condition Verification",
//       "User Ratings & Feedback",
//       "Educational Blog on Sustainable Fashion",
//     ],
//     impact: {
//       description: "Promoted sustainable habits among youth and reduced textile waste",
//       metrics: "Saved over 1 ton of clothing from landfills",
//     },
//     github: "https://github.com/Lim018/fashion-exchange",
//     demo: "#",
//     status: "In Progress",
//   },
//   {
//     id: 5,
//     title: "Campus Event Management System",
//     description:
//       "Web-based platform for organizing and managing university events with ticketing and volunteer coordination.",
//     image: "/placeholder.svg?height=300&width=400",
//     technologies: ["Laravel", "React.js", "MySQL", "Bootstrap"],
//     features: [
//       "Event Ticket Booking",
//       "Volunteer Registration",
//       "Admin CMS",
//       "QR Code Attendance Scanner",
//     ],
//     impact: {
//       description: "Streamlined event operations and improved attendance tracking",
//       metrics: "Handled 40+ events and 3K+ participants",
//     },
//     github: "https://github.com/Lim018/event-management",
//     demo: "#",
//     status: "Completed",
//   },
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
                    {/* <a href={project.demo} className="action-btn demo-btn">
                      <span>Live Demo</span>
                    </a> */}
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
