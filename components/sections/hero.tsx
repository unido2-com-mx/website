import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "Historial médico completo",
  "Seguimiento de citas",
  "Recetas digitales",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Plataforma médica digital
            </div> */}

            <h1 className="text-4xl sm:text-5xl tracking-tight text-foreground text-balance lg:text-7xl font-extrabold">
              Tu salud, tu historial,{" "}
              <span className="text-primary">en un solo lugar</span>
            </h1>

            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Mentor Salud conecta pacientes y médicos con herramientas de
              comunicación y seguimiento efectivas. Accede a tu historial
              médico, citas y recetas desde cualquier lugar.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/registro">
                  Comienza gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/funcionalidades">Conocer más</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-doctor.jpg"
                  alt="Doctor profesional de Mentor Salud"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>

              {/* Floating card */}
              {/* <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                      +
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      10,000+
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Pacientes activos
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
