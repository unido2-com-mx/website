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
    displayName: "Aerosol Medical Systems",
  },
  {
    name: "Boehringer Ingelheim",
    image: "/images/logos/boehringer-logo.png",
    grayscale: true,
  },
  {
    name: "Hygeia",
    image: "/images/logos/hygeia-logo.png",
    grayscale: true,
  },
  {
    name: "SMNYCT",
    image: "/images/logos/smnyct-logo.png",
    grayscale: true,
    displayName: "Sociedad Mexicana de Neumología\ny Cirugíade Tórax",
  },
];

export function TrustedBy() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-10">
          Ellos confían en nosotros
        </p>

        <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-6 lg:gap-10">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center w-60 h-40 px-6 py-4 rounded-xl bg-card border border-border gap-2"
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={logo.name === "Hygeia" ? 140 : 120}
                height={logo.name === "Hygeia" ? 70 : 60}
                className={`${logo.name === "Hygeia" ? "h-14" : "h-12"} w-auto object-contain ${
                  logo.grayscale ? "grayscale" : ""
                }`}
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
    </section>
  );
}
