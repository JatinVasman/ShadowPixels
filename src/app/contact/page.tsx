import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Get In Touch | ShadowPixels Studio",
  description:
    "Let's create visuals that leave a mark. Reach out to ShadowPixels Studio for inquiries regarding video editing, SMM, Graphic Design, CGI, and VFX.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-obsidian bg-cinematic pt-16 relative">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-ember/40 to-transparent pointer-events-none" />

      <Contact hideBorder />
    </main>
  );
}
