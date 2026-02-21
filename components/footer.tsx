import Image from "next/image";
import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerNavigation = {
  company: [
    { name: "Sobre nosotros", href: "/nosotros" },
    // { name: "Especialistas", href: "/especialistas" },
    // { name: "Blog", href: "/blog" },
    // { name: "FAQ", href: "/faq" },
  ],
  services: [
    { name: "Historial médico", href: "/funcionalidades#historial" },
    { name: "Perfil de salud", href: "/funcionalidades#perfil" },
    { name: "Grupos de apoyo", href: "/funcionalidades#grupos" },
    // { name: "Planes de salud", href: "/planes" },
    // { name: "Tienda", href: "/tienda" },
  ],
  legal: [
    {
      name: "Privacidad",
      href: "https://mentor-salud.s3.us-east-2.amazonaws.com/AVISO_PACIENTES.pdf",
    },
    // { name: "Términos", href: "/terminos" },
    // { name: "Cookies", href: "/cookies" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1BPpyKUA3T/?mibextid=wwXIfr",
      icon: Facebook,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logos/mentorsalud-logo.png"
                alt="Mentor Salud"
                width={75}
                height={75}
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Conectamos pacientes y médicos con herramientas de comunicación y
              seguimiento efectivas para una mejor atención de tu salud.
            </p>
            <div className="flex gap-4">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Compañía
                </h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">
                  Servicios
                </h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">
                  Contacto
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="text-sm text-muted-foreground">
                    contacto@mentorsalud.com
                  </li>
                  <li className="text-sm text-muted-foreground">
                    +52 (55) 1234-5678
                  </li>
                  <li className="text-sm text-muted-foreground">
                    Ciudad de México, México
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Mentor Salud. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
