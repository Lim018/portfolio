"use client"

import { useState, useEffect } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="scroll-progress">
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <style jsx>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(0, 0, 0, 0.1);
          z-index: 1001;
        }
        
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          transition: width 0.1s ease;
          border-radius: 0 2px 2px 0;
        }
      `}</style>
    </div>
  )
}
