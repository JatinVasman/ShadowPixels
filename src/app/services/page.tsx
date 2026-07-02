import type { Metadata } from "next";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Icon from "@/components/Icon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services & Pricing | ShadowPixels Studio",
  description:
    "Explore our complete range of visual and content services including Social Media Management, Graphic Design, Motion Graphics, Video Editing, and VFX & CGI with clear pricing packages.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-obsidian bg-cinematic pt-16 relative">
      {/* Decorative Top Glow — matching About page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-ember/40 to-transparent pointer-events-none" />

      {/* Services Browser */}
      <Services hideBorder />

      {/* Pricing Section */}
      <Pricing />
    </main>
  );
}
