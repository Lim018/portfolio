"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedParticles() {
  const pointsRef = useRef<THREE.Points>(null)
  const [positions] = useState(() => {
    const positions = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  })

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3b82f6" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Transforming digital challenges into innovative solutions"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedParticles />
        </Canvas>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="location">📍 Surabaya, Jawa Timur</span>
          </div>

          <h1 className="hero-name">
            <span className="name-highlight">Abdul Alim</span>
          </h1>

          <h2 className="hero-title">Digital Solution Architect & Fullstack Developer</h2>

          <p className="hero-description">
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </p>

          <div className="hero-actions">
            <button onClick={scrollToAbout} className="cta-primary">
              Explore My Work
            </button>
            <a href="#contact" className="cta-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.3;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          padding: 0 2rem;
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-greeting {
          margin-bottom: 1rem;
        }
        
        .location {
          display: inline-block;
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(37, 99, 235, 0.2);
        }
        
        .hero-name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          margin: 1rem 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        
        .name-highlight {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-title {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 600;
          color: #475569;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 2.5rem;
          min-height: 1.5em;
        }
        
        .typed-text {
          font-weight: 500;
        }
        
        .cursor {
          animation: blink 1s infinite;
          color: #2563eb;
          font-weight: 300;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-primary {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        }
        
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }
        
        .cta-secondary {
          background: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .cta-secondary:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-2px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
        }
        
        .scroll-arrow {
          width: 24px;
          height: 24px;
          border-right: 2px solid #64748b;
          border-bottom: 2px solid #64748b;
          transform: rotate(45deg);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-primary,
          .cta-secondary {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  )
}
