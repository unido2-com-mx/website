import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FileText,
  User,
  Users,
  BookOpen,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Calendar,
  Pill,
  Heart,
  Activity,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Funcionalidades | Mentor Salud",
  description:
    "Descubre todas las funcionalidades de Mentor Salud: historial médico, perfil de salud, grupos de apoyo, material educativo y foros moderados.",
};

const mainFeatures = [
  {
    id: "historial",
    icon: FileText,
    title: "Historial Médico",
    description:
      "Accede a tu historial médico completo en cualquier momento y desde cualquier lugar.",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    benefits: [
      "Registro completo de consultas médicas",
      "Historial de diagnósticos y tratamientos",
      "Resultados de laboratorio y estudios",
      "Hospitalizaciones y procedimientos",
      "Vacunas y medicamentos actuales",
      "Exportación de datos en formato PDF",
    ],
    details:
      "Nuestro sistema de historial médico te permite tener un registro completo y organizado de toda tu información de salud. Desde tus primeras consultas hasta los tratamientos más recientes, todo está disponible de forma segura y accesible.",
  },
  {
    id: "perfil",
    icon: User,
    title: "Perfil de Salud",
    description:
      "Mantén actualizada tu información médica más importante para emergencias.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    benefits: [
      "Alergias y reacciones adversas",
      "Grupo sanguíneo y factor RH",
      "Contactos de emergencia",
      "Condiciones crónicas",
      "Medicamentos actuales",
      "Información de seguro médico",
    ],
    details:
      "Tu perfil de salud es tu carta de presentación médica. En caso de emergencia, los profesionales de salud pueden acceder rápidamente a la información crítica que necesitan para brindarte la mejor atención.",
  },
  {
    id: "grupos",
    icon: Users,
    title: "Grupos de Apoyo",
    description:
      "Conecta con personas que comparten experiencias similares de salud.",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    benefits: [
      "Comunidades por condición médica",
      "Moderación profesional",
      "Eventos y reuniones virtuales",
      "Recursos compartidos",
      "Anonimato garantizado",
      "Soporte emocional continuo",
    ],
    details:
      "Los grupos de apoyo ofrecen un espacio seguro donde puedes compartir experiencias, aprender de otros y recibir apoyo emocional de personas que entienden por lo que estás pasando.",
  },
  {
    id: "educativo",
    icon: BookOpen,
    title: "Material Educativo",
    description:
      "Aprende sobre condiciones de salud con contenido verificado por especialistas.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    benefits: [
      "Artículos médicos verificados",
      "Videos explicativos",
      "Guías de prevención",
      "Información sobre tratamientos",
      "Contenido en español",
      "Actualizaciones constantes",
    ],
    details:
      "El conocimiento es poder. Nuestro material educativo está diseñado para ayudarte a entender mejor tu salud y tomar decisiones informadas junto con tu médico.",
  },
  {
    id: "foros",
    icon: MessageSquare,
    title: "Foros Moderados",
    description:
      "Participa en discusiones supervisadas por profesionales de la salud.",
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    benefits: [
      "Preguntas y respuestas médicas",
      "Supervisión de especialistas",
      "Temas organizados por categoría",
      "Respuestas verificadas",
      "Comunidad activa",
      "Reglas claras de participación",
    ],
    details:
      "Nuestros foros son espacios de discusión donde puedes hacer preguntas, compartir conocimientos y recibir orientación de profesionales de la salud y otros usuarios.",
  },
];

const additionalFeatures = [
  {
    icon: Calendar,
    title: "Gestión de Citas",
    description:
      "Agenda, reprograma y recibe recordatorios de tus citas médicas.",
  },
  {
    icon: Pill,
    title: "Recetas Digitales",
    description:
      "Accede a tus recetas y recordatorios de medicamentos en cualquier momento.",
  },
  {
    icon: Heart,
    title: "Seguimiento de Salud",
    description:
      "Monitorea tus signos vitales y condiciones crónicas de forma continua.",
  },
  {
    icon: Activity,
    title: "Reportes de Salud",
    description: "Genera reportes detallados para compartir con tus médicos.",
  },
  {
    icon: Shield,
    title: "Privacidad y Seguridad",
    description:
      "Tu información protegida con los más altos estándares de seguridad.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-primary mb-4">
              Funcionalidades
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Herramientas diseñadas para tu bienestar
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Descubre todas las funcionalidades que Mentor Salud pone a tu
              disposición para mejorar la gestión de tu salud.
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mt-8">
              <Image
                src="/images/features.png"
                alt="Funcionalidades Mentor Salud"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      {mainFeatures.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? "bg-background" : "bg-muted/50"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-flex p-4 rounded-2xl ${feature.color} mb-6`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                  {feature.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {feature.description}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {feature.details}
                </p>
                <Button className="mt-8 group" asChild>
                  <Link href="/registro">
                    Comenzar ahora
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="absolute -top-4 -left-4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative bg-card rounded-3xl border border-border p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Características principales
                  </h3>
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3">Y mucho más</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Funcionalidades adicionales
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground text-balance">
              Comienza a cuidar tu salud hoy
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Únete a miles de usuarios que ya confían en Mentor Salud para
              gestionar su bienestar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/registro">
                  Crear cuenta gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/nosotros">Conocer más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
