"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre nosotros", href: "/nosotros" },
  { name: "Funcionalidades", href: "/funcionalidades" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
            <Image
              src="/images/logos/mentorsalud-logo.png"
              alt="Mentor Salud"
              width={75}
              height={75}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/registro">Iniciar sesión</Link>
          </Button>
          <Button asChild>
            <Link href="/registro">Regístrate</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={[
          "lg:hidden absolute inset-x-0 top-full",
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-x-0 top-0 h-screen bg-background/70 backdrop-blur-sm transition-opacity duration-200",
            mobileMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Dropdown panel */}
        <div
          className={[
            "relative border-b border-border bg-background shadow-sm overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out",
            mobileMenuOpen
              ? "opacity-100 translate-y-0 max-h-[calc(100vh-5rem)]"
              : "opacity-0 -translate-y-2 max-h-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/registro" onClick={() => setMobileMenuOpen(false)}>
                  Iniciar sesión
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/registro" onClick={() => setMobileMenuOpen(false)}>
                  Regístrate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
