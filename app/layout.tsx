import React from "react";
import type { Metadata, Viewport } from "next";
// import { Inter } from 'next/font/google'
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// const _inter = Inter({ subsets: ["latin"] });
const _geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mentor Salud | Tu salud, tu historial, en un solo lugar",
  description:
    "Plataforma digital que conecta pacientes y médicos con herramientas de comunicación y seguimiento efectivas. Historial médico, citas, recetas y más.",
  generator: "v0.app",
  keywords: [
    "salud",
    "médico",
    "historial médico",
    "citas médicas",
    "recetas",
    "pacientes",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0891b2" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${_geist.variable} ${_geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
