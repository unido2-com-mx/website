import {
  FileText,
  Calendar,
  BookOpen,
  MessageSquare,
  Users,
  GraduationCap,
  HeartPulse,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    name: "Historial de salud",
    description: "Accede a todo tu historial médico en un solo lugar, incluyendo diagnósticos, tratamientos y resultados.",
    icon: FileText,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    name: "Seguimiento de citas",
    description: "Agenda, reprograma y recibe recordatorios de tus citas médicas de forma sencilla.",
    icon: Calendar,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Material educativo",
    description: "Aprende sobre condiciones de salud con contenido verificado por especialistas.",
    icon: BookOpen,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Foros moderados",
    description: "Participa en discusiones supervisadas por profesionales de la salud.",
    icon: MessageSquare,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    name: "Grupos de apoyo",
    description: "Conecta con personas que comparten experiencias similares de salud.",
    icon: Users,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    name: "Educación continua",
    description: "Cursos y talleres para mejorar tu bienestar y prevención de enfermedades.",
    icon: GraduationCap,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    name: "Enfermedades crónicas",
    description: "Seguimiento especializado para condiciones como diabetes, hipertensión y más.",
    icon: HeartPulse,
    color: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
]

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-primary mb-3">Funcionalidades</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Todo lo que necesitas para cuidar tu salud
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Herramientas diseñadas para facilitar la comunicación entre pacientes y médicos.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild className="group bg-transparent">
            <Link href="/funcionalidades">
              Ver todas las funcionalidades
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
