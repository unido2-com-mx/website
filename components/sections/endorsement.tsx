import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function Endorsement() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border p-8 lg:p-12">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Logo/Badge */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center p-4">
                <Image
                  src="/images/logos/smnyct-logo.png"
                  alt="Sociedad Mexicana de Neumología y Cirugía de Tórax"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <CheckCircle className="h-4 w-4" />
                Avalado oficialmente
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
                Avalado por la Sociedad Mexicana de Neumología y Cirugía de
                Tórax
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                Mentor Salud cuenta con el respaldo de instituciones médicas
                reconocidas que garantizan la calidad y confiabilidad de nuestra
                plataforma. Trabajamos de la mano con especialistas para ofrecer
                la mejor atención a nuestros usuarios.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
