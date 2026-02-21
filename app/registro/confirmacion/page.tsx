import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Registro exitoso | Mentor Salud",
  description:
    "Tu registro fue exitoso. Te avisaremos cuando Mentor Salud sea lanzado.",
};

export default function RegistroConfirmacionPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="mx-auto w-full max-w-xl border-border/70 shadow-sm">
            <CardHeader className="items-center text-center">
              <CardTitle className="text-2xl">Registro exitoso</CardTitle>
            </CardHeader>
            <CardContent className="text-center">

              <p className="text-muted-foreground leading-relaxed">
                Gracias por registrarte. Te avisaremos por correo cuando Mentor
                Salud este disponible para el publico en general. Mantente
                atento.
              </p>

              <div className="mt-6 flex justify-center">
                <Button asChild>
                  <Link href="/">Volver al inicio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
