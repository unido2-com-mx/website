import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Features } from "@/components/sections/features";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Endorsement } from "@/components/sections/endorsement";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <BentoGrid />
      <Endorsement />
      <Footer />
    </main>
  );
}
