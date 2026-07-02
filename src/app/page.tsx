import Hero from "@/components/Hero";
import ValuesStrip from "@/components/ValuesStrip";
import HomeServices from "@/components/HomeServices";
import Work from "@/components/Work";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ValuesStrip />
      <HomeServices />
      <Work />
      <About />
    </main>
  );
}
