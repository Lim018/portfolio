"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: "/logo/email.png?height=40&width=40&text=GitHub",
      label: "Email",
      value: "aa6611059@gmail.com",
      link: "mailto:aa6611059@gmail.com",
    },
    {
      icon: "/logo/wa.png?height=40&width=40&text=GitHub",
      label: "Phone",
      value: "085732007986",
      link: "tel:+62085732007986",
    },
    {
      icon: "/logo/loc.png?height=0&width=40&text=GitHub",
      label: "Location",
      value: "Surabaya, Jawa Timur",
      link: "#",
    },
    {
      icon: "/logo/github2.png?height=40&width=40&text=GitHub",
      label: "GitHub",
      value: "github.com/Lim018",
      link: "https://github.com/Lim018",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Lim018",
      icon: "/logo/github.svg?height=20&width=20&text=GitHub",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "/logo/linkedin.png?height=0&width=40&text=GitHub",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/62085732007986",
      icon: "/logo/wa2.png?height=20&width=20&text=GitHub",
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to transform your digital challenges into innovative solutions? Let's discuss your next project.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hello, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-item"
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                >
                  {/* <span className="contact-icon">{info.icon}</span> */}
                  <div className="contact-logo">
                    <img src={info.icon || "/placeholder.svg"} alt={`${info.label} logo`} className="contact-image" />
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-buttons">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="social-btn" target="_blank" rel="noopener noreferrer">
                    {/* <span className="social-icon">{social.icon}</span> */}
                    <img src={social.icon || "/placeholder.svg"} alt={`${social.name} logo`} className="social-image" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""} ${submitStatus === "success" ? "success" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">Thank you for your message! I'll get back to you soon.</div>
              )}
            </form>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Abdul Alim. All rights reserved.</p>
          <p>Built with React, Three.js, and passion for digital innovation.</p>
        </div>
      </footer>

      <style jsx>{`
        .contact-section {
          padding: 6rem 0 0;
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
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        .contact-info h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .contact-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .contact-item:hover {
          background: #2563eb;
          color: white;
          transform: translateX(5px);
        }
        
        .contact-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 8px;
          flex-shrink: 0;
        }
        
        .contact-item:hover .contact-icon {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .contact-text {
          display: flex;
          flex-direction: column;
        }
        
        .contact-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #64748b;
        }
        
        .contact-item:hover .contact-label {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .contact-value {
          font-weight: 600;
          color: #1e293b;
        }
        
        .contact-item:hover .contact-value {
          color: white;
        }
        
        .social-links h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        
        .social-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .social-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }
        
        .social-icon {
          font-size: 1rem;
        }
        
        .contact-form {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .submit-btn.success {
          background: #22c55e;
        }
        
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }
        
        .site-footer {
          background: #1e293b;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }
        
        .footer-content p {
          margin-bottom: 0.5rem;
          color: #94a3b8;
        }
        
        .footer-content p:first-child {
          font-weight: 600;
          color: white;
        }

        .contact-logo {
          flex-shrink: 0;
        }

        .contact-image {
          width: 40px;
          height: 40px;
          border-radius: 0px;
          object-fit: cover;
        }

        .social-image {
          width: 20px;
          height: 20px;
          border-radius: 12px;
          object-fit: cover;
          border: 2px solid #e2e8f0;
          background: #f8fafc;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .social-buttons {
            flex-direction: column;
          }
          
          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
