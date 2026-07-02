"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

type Item = {
  title: string;
  category: string;
  icon: string;
  gradient: string;
  image: string;
};

const items: Item[] = [
  {
    title: "Ember Horizon",
    category: "VFX",
    icon: "Flame",
    gradient: "from-[#ff6a00]/40 via-[#1a1d24] to-obsidian",
    image: "/work-1.png",
  },
  {
    title: "Lens & Light",
    category: "FILM",
    icon: "Camera",
    gradient: "from-[#4da3ff]/30 via-[#1a1d24] to-obsidian",
    image: "/work-2.png",
  },
  {
    title: "Ruins of Tomorrow",
    category: "CGI",
    icon: "Building2",
    gradient: "from-[#7d8494]/30 via-[#1a1d24] to-obsidian",
    image: "/work-3.png",
  },
  {
    title: "Portal Runner",
    category: "MOTION",
    icon: "Orbit",
    gradient: "from-[#4da3ff]/40 via-[#1a1d24] to-obsidian",
    image: "/work-4.png",
  },
  {
    title: "Iron Sentinel",
    category: "CGI",
    icon: "Bot",
    gradient: "from-[#ff6a00]/30 via-[#1a1d24] to-obsidian",
    image: "/work-5.png",
  },
  {
    title: "Mark of Steel",
    category: "VFX",
    icon: "Zap",
    gradient: "from-[#ffb066]/30 via-[#1a1d24] to-obsidian",
    image: "/work-6.png",
  },
];

const filters = ["ALL", "VFX", "FILM", "MOTION", "CGI"];

export default function Work() {
  const [filter, setFilter] = useState("ALL");
  const filtered =
    filter === "ALL" ? items : items.filter((i) => i.category === filter);

  return (
    <section id="work" className="bg-black/20 border-t border-white/5 py-24 sm:py-32 relative overflow-hidden">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-ember/4 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          {/* Header — styled like About page */}
          <div className="group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
            <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-black mt-4 text-gradient-silver uppercase leading-[1.05]">
              Selected Projects
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs tracking-[0.15em] font-heading font-semibold border transition-all duration-300 rounded-sm ${
                  filter === f
                    ? "border-ember text-ember bg-ember/5"
                    : "border-white/10 text-silver/50 hover:text-silver hover:border-white/25"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[4/3] overflow-hidden border border-white/5 bg-gunmetal/30 flex items-center justify-center"
            >
              {/* Project Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-95 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Hover ember top-edge accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ember via-ember-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category and Title */}
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <span className="text-[10px] tracking-[0.25em] text-ember font-heading font-semibold uppercase">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg text-white font-bold uppercase mt-1 group-hover:text-ember-soft transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
