import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Target, Eye, Heart, Users, Shield, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Mentor Salud",
  description:
    "Conoce más sobre Mentor Salud, nuestra misión de conectar pacientes y médicos, y nuestra visión para el futuro de la salud digital.",
};

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description:
      "Nos dedicamos a mejorar la calidad de vida de nuestros usuarios a través de la tecnología.",
  },
  {
    icon: Shield,
    title: "Confianza",
    description:
      "Garantizamos la seguridad y privacidad de toda la información médica de nuestros usuarios.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Fomentamos conexiones significativas entre pacientes, médicos y cuidadores.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Desarrollamos soluciones tecnológicas que transforman la atención médica.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-primary mb-4">
              Sobre nosotros
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Transformando la salud digital en México
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Somos una plataforma comprometida con acercar pacientes y médicos
              a través de herramientas digitales innovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* What is Mentor Salud */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-3">
                Nuestra plataforma
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                ¿Qué es Mentor Salud?
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mentor Salud es una plataforma digital diseñada para
                  revolucionar la forma en que pacientes y médicos se conectan y
                  colaboran en el cuidado de la salud.
                </p>
                <p>
                  Nuestra herramienta permite a los pacientes tener acceso a su
                  historial médico completo en un solo lugar, incluyendo
                  historial de citas, recetas, alergias, grupo sanguíneo y datos
                  de contacto de emergencia.
                </p>
                <p>
                  Facilitamos la comunicación efectiva entre pacientes y
                  profesionales de la salud, asegurando un seguimiento continuo
                  y personalizado que mejora los resultados de salud.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative rounded-3xl">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/zWHRGc730S4"
                    title="Mentor Salud"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Objetivo */}
            <div className="bg-card rounded-3xl border border-border p-8 lg:p-10">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Nuestro Objetivo
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Acercar pacientes y médicos brindando herramientas de
                comunicación y seguimiento efectivas que mejoren la calidad de
                atención médica. Buscamos que cada paciente tenga control total
                de su información de salud y pueda tomar decisiones informadas
                junto con sus profesionales de la salud.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-card rounded-3xl border border-border p-8 lg:p-10">
              <div className="inline-flex p-4 rounded-2xl bg-accent/30 mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Nuestra Visión
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser la plataforma líder en salud digital en Latinoamérica,
                transformando la manera en que las personas gestionan su
                bienestar. Visualizamos un futuro donde la tecnología elimine
                las barreras entre pacientes y médicos, permitiendo una atención
                de salud más accesible, eficiente y humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3">
              Lo que nos define
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
