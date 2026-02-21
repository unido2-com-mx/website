import Image from "next/image"
import { FileText, Calendar, Shield, Pill, Activity, Bell } from "lucide-react"

export function BentoGrid() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Plataforma integral</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Una experiencia de salud completa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large card - Historial */}
          <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-10">
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-xl bg-white/20 mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Historial médico completo
              </h3>
              <p className="text-white/80 max-w-md leading-relaxed">
                Toda tu información médica organizada y accesible. Diagnósticos, tratamientos, alergias y más en un solo lugar seguro.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>

          {/* Calendar card */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8">
            <div className="inline-flex p-3 rounded-xl bg-blue-500/10 mb-4">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Citas médicas
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agenda y gestiona tus citas fácilmente.
            </p>
            <div className="mt-6 bg-muted rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">15</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Dr. García</p>
                  <p className="text-xs text-muted-foreground">Cardiología - 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security card */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8">
            <div className="inline-flex p-3 rounded-xl bg-emerald-500/10 mb-4">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Datos seguros
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu información protegida con los más altos estándares de seguridad.
            </p>
          </div>

          {/* Prescriptions card */}
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8">
            <div className="inline-flex p-3 rounded-xl bg-violet-500/10 mb-4">
              <Pill className="h-6 w-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Recetas digitales
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Accede a tus recetas y recordatorios de medicamentos.
            </p>
          </div>

          {/* Monitoring card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/20 p-8">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Monitoreo continuo
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seguimiento de signos vitales y condiciones crónicas.
            </p>
            <div className="mt-4 flex items-end gap-1">
              {[40, 60, 45, 80, 55, 70, 65].map((height, i) => (
                <div
                  key={i}
                  className="w-6 bg-primary/30 rounded-t transition-all"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>

          {/* Notifications card - wide */}
          <div className="md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-3xl bg-card border border-border p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="inline-flex p-3 rounded-xl bg-amber-500/10 mb-4">
                  <Bell className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Notificaciones inteligentes
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  Recibe recordatorios personalizados de citas, medicamentos y exámenes de rutina para nunca olvidar lo importante.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="bg-muted rounded-xl p-4 flex-1 min-w-[180px]">
                  <p className="text-xs text-muted-foreground mb-1">Próxima cita</p>
                  <p className="text-sm font-medium text-foreground">Mañana, 9:00 AM</p>
                </div>
                <div className="bg-muted rounded-xl p-4 flex-1 min-w-[180px]">
                  <p className="text-xs text-muted-foreground mb-1">Medicamento</p>
                  <p className="text-sm font-medium text-foreground">Tomar en 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
