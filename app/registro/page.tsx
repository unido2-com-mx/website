import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerForUpdates } from "./actions";

export const metadata: Metadata = {
  title: "Registro | Mentor Salud",
  description:
    "Registra tu nombre y correo para recibir actualizaciones cuando Mentor Salud este disponible.",
};

type RegistroPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function RegistroPage({ searchParams }: RegistroPageProps) {
  const params = (await searchParams) ?? {};
  const hasError = params.error === "1";

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-primary mb-4">Registro</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
              No te pierdas nuestro lanzamiento
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Registrate y enterate de nuestro lanzamiento 🚀 y las novedades.
            </p>
          </div>

          <Card className="mx-auto mt-10 w-full max-w-md border-border/70 shadow-sm">
            <CardContent>
              {hasError ? (
                <p className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  Ocurrio un error en el envio de tus datos. Intenta nuevamente
                  mas tarde.
                </p>
              ) : null}

              <form action={registerForUpdates} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Gregory House"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="gregoryh@princeton-plainsboro.com"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Registrarme
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
