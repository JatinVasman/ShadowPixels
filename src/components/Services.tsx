"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Icon from "./Icon";
import { services } from "@/lib/data";

function ServicesContent({ hideBorder = false }: { hideBorder?: boolean }) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab) {
      const idx = services.findIndex((s) => s.key === tab);
      if (idx !== -1) {
        setActive(idx);
      }
    }
  }, [tab]);

  const current = services[active];

  return (
    <section id="services" className={`bg-cinematic py-24 sm:py-32 relative ${hideBorder ? "" : "border-t border-white/5"}`}>
      {/* Decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        {!hideBorder && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
        )}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-ember/4 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
          <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            What We Offer & Do
          </span>
          {hideBorder ? (
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black mt-4 uppercase leading-[1.05] tracking-tight">
              <span className="text-gradient-silver">SERVICES &</span>
              <br />
              <span className="text-gradient-ember">PRICING</span>
            </h1>
          ) : (
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black mt-4 uppercase leading-[1.05] tracking-tight">
              <span className="text-gradient-silver">SERVICES &</span>
              <br />
              <span className="text-gradient-ember">PRICING</span>
            </h2>
          )}
          <p className="text-silver/80 font-body mt-6 max-w-2xl leading-relaxed text-sm sm:text-base">
            End-to-end visual solutions tailored for brands, creators and businesses — delivered with cinematic precision and strategic clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          {/* Services Tab List */}
          <div className="flex flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                className={`text-left flex items-center gap-4 px-5 py-4 border transition-all duration-300 font-body relative overflow-hidden group ${
                  active === i
                    ? "border-ember/60 bg-gunmetal/80 glow-border"
                    : "border-white/5 hover:border-white/15 hover:bg-white/2"
                }`}
              >
                {/* Active left-edge accent */}
                {active === i && (
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-ember" />
                )}
                <span
                  className={`flex items-center justify-center w-11 h-11 shrink-0 border transition-colors duration-300 ${
                    active === i
                      ? "border-ember text-ember bg-ember/5"
                      : "border-silver/20 text-silver/50 group-hover:border-silver/40"
                  }`}
                >
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="flex-1">
                  <span
                    className={`block text-sm sm:text-base font-semibold tracking-wide transition-colors duration-300 ${
                      active === i ? "text-silver" : "text-silver/60 group-hover:text-silver/80"
                    }`}
                  >
                    {s.title}
                  </span>
                </span>
                <Icon
                  name="ChevronRight"
                  size={16}
                  className={`transition-colors duration-300 ${active === i ? "text-ember" : "text-silver/20"}`}
                />
              </button>
            ))}
          </div>

          {/* Service Detail Panel */}
          <div className="card-panel p-8 sm:p-10 relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-ember via-ember-soft to-transparent" />
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-ember/30" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-ember/30" />

            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-14 h-14 border border-ember bg-ember/5 text-ember">
                <Icon name={current.icon} size={28} />
              </span>
              <div>
                <span className="text-[11px] tracking-[0.25em] text-ember/80 uppercase font-heading font-semibold">
                  Service
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl text-white font-black uppercase">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="text-silver/60 font-body mb-8 max-w-xl text-sm sm:text-base leading-relaxed">
              {current.tagline}
            </p>

            <span className="text-xs tracking-[0.2em] text-ember/60 uppercase font-heading font-semibold">
              Services Included
            </span>
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {current.included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-silver/75 font-body"
                >
                  <Icon name="Check" size={14} className="text-ember shrink-0" strokeWidth={3} />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-6 border-t border-white/5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ember text-white hover:bg-ember-soft px-6 py-3 font-heading text-xs font-black tracking-[0.2em] transition-all duration-300 rounded-sm shadow-lg shadow-ember/15"
              >
                ENQUIRE ABOUT THIS <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services({ hideBorder = false }: { hideBorder?: boolean }) {
  return (
    <Suspense fallback={
      <section className={`bg-cinematic py-24 sm:py-32 relative ${hideBorder ? "" : "border-t border-white/5"}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center py-12">
          <p className="text-silver/40 font-body text-sm animate-pulse">Loading services...</p>
        </div>
      </section>
    }>
      <ServicesContent hideBorder={hideBorder} />
    </Suspense>
  );
}
