"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])
  const [particles, setParticles] = useState<Star[]>([])

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        })
      }
      setStars(newStars)
    }

    // Generate floating particles
    const generateParticles = () => {
      const newParticles: Star[] = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          delay: Math.random() * 15,
        })
      }
      setParticles(newParticles)
    }

    generateStars()
    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-primary twinkle star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-primary/40 particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="absolute w-1 h-1 bg-primary rounded-full shooting-star" style={{ animationDelay: "2s" }} />
      <div className="absolute w-1 h-1 bg-primary rounded-full shooting-star" style={{ animationDelay: "8s" }} />
      <div className="absolute w-1 h-1 bg-primary rounded-full shooting-star" style={{ animationDelay: "15s" }} />
    </div>
  )
}
