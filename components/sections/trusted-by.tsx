"use client";

import Image from "next/image";

const logos = [
  {
    name: "AstraZeneca",
    image: "/images/logos/astrazeneca-logo.jpg",
    grayscale: true,
  },
  {
    name: "Aerosol Medical Systems",
    image: "/images/logos/ams-logo.jpeg",
    grayscale: true,
    displayName: "Aerosol Medical\nSystems",
  },
  {
    name: "Boehringer Ingelheim",
    image: "/images/logos/boehringer-logo.png",
    grayscale: true,
    displayName: "Boehringer\nIngelheim",
  },
  {
    name: "Hygeia",
    image: "/images/logos/hygeia-logo.png",
    grayscale: true,
    displayName: "Hygeia",
  },
  {
    name: "SMNYCT",
    image: "/images/logos/smnyct-logo.png",
    grayscale: true,
    displayName: "Sociedad Mexicana de\nNeumología y Cirugía\nde Tórax",
  },
];

export function TrustedBy() {
  return (
    <section className="py-16 lg:py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-2xl font-medium text-muted-foreground mb-10">
          Ellos confían en nosotros
        </p>

        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Infinite scroll container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-12">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex flex-col items-center justify-center px-6 py-4 rounded-xl bg-card border border-border min-w-fit gap-2"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={100}
                    height={60}
                    className={`h-12 object-contain ${logo.grayscale ? "grayscale" : ""}`}
                  />
                  {logo.displayName && (
                    <p className="text-xs text-center text-muted-foreground font-medium leading-tight whitespace-pre-line">
                      {logo.displayName}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div
              className="flex animate-marquee gap-12 ml-12"
              aria-hidden="true"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-duplicate-${index}`}
                  className="flex flex-col items-center justify-center px-6 py-4 rounded-xl bg-card border border-border min-w-fit gap-2"
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={100}
                    height={60}
                    className={`h-12 object-contain ${logo.grayscale ? "grayscale" : ""}`}
                  />
                  {logo.displayName && (
                    <p className="text-xs text-center text-muted-foreground font-medium leading-tight whitespace-pre-line">
                      {logo.displayName}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
