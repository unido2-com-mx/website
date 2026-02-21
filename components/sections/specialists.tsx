"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const specialists = [
  {
    name: "Dra. María González",
    specialty: "Cardiología",
    experience: 15,
    image: "/images/specialist-1.jpg",
  },
  {
    name: "Dr. Carlos Ramírez",
    specialty: "Neurología",
    experience: 12,
    image: "/images/specialist-2.jpg",
  },
  {
    name: "Dra. Ana Martínez",
    specialty: "Dermatología",
    experience: 8,
    image: "/images/specialist-3.jpg",
  },
  {
    name: "Dr. Roberto Sánchez",
    specialty: "Neumología",
    experience: 20,
    image: "/images/specialist-4.jpg",
  },
  {
    name: "Dra. Laura Hernández",
    specialty: "Pediatría",
    experience: 10,
    image: "/images/specialist-5.jpg",
  },
]

export function Specialists() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialists.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Nuestro equipo</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Especialistas de confianza
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Médicos certificados comprometidos con tu bienestar.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 8}px))` 
            }}
          >
            {[...specialists, ...specialists].map((specialist, index) => (
              <div
                key={`${specialist.name}-${index}`}
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={specialist.image || "/placeholder.svg"}
                      alt={specialist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {specialist.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-1">
                      {specialist.specialty}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {specialist.experience} años de experiencia
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {specialists.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir al especialista ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
