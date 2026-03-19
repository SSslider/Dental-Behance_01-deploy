import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Trust } from "@/components/sections/Trust";
import { Treatments } from "@/components/sections/Treatments";
import { ExplodedView } from "@/components/sections/ExplodedView";
import { Team } from "@/components/sections/Team";
import { Cases } from "@/components/sections/Cases";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Header />
      <Hero />
      <About />
      <Trust />
      <Treatments />
      <ExplodedView />
      <Team />
      <Cases />
      <ContactCTA />
      <Footer />
    </main>
  );
}
