"use client"

import { useEffect, useState, useRef } from "react"
import { Stethoscope, Users, UserCheck, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    name: "Especialidades",
    value: 25,
    suffix: "+",
    icon: Stethoscope,
    description: "Áreas médicas disponibles",
  },
  {
    id: 2,
    name: "Especialistas",
    value: 500,
    suffix: "+",
    icon: UserCheck,
    description: "Médicos certificados",
  },
  {
    id: 3,
    name: "Usuarios",
    value: 10000,
    suffix: "+",
    icon: Users,
    description: "Pacientes registrados",
  },
  {
    id: 4,
    name: "Años de experiencia",
    value: 8,
    suffix: "",
    icon: Award,
    description: "En el sector salud",
  },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "k"
    }
    return num.toString()
  }

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-foreground">
      {formatNumber(count)}{suffix}
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-foreground">{stat.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
