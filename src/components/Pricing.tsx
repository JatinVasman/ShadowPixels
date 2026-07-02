"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import {
  smmPackages,
  priceGroups,
  expressDelivery,
  paymentTerms,
} from "@/lib/data";

export default function Pricing() {
  const [tab, setTab] = useState(0);
  const current = priceGroups[tab];

  return (
    <section id="pricing" className="bg-black/20 border-t border-white/5 py-24 sm:py-32 relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-ember/4 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
          <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            Transparent Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black mt-4 text-gradient-silver uppercase leading-[1.05]">
            Launch Price List
          </h2>
          <div className="flex items-center gap-3 mt-5">
            <span className="inline-flex items-center gap-2 border border-ember/40 bg-ember/5 text-ember text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 font-heading font-semibold">
              <Icon name="Timer" size={13} /> Limited-Time Offer
            </span>
          </div>
          <p className="text-silver/60 font-body mt-4 text-sm sm:text-base leading-relaxed">
            Transparent, launch-window pricing across every service we offer.
          </p>
        </div>

        {/* SMM Packages */}
        <div className="mb-12 flex items-center gap-3">
          <div className="w-9 h-9 border border-ember/30 bg-ember/5 flex items-center justify-center text-ember">
            <Icon name="Smartphone" size={18} />
          </div>
          <h3 className="font-heading text-lg sm:text-xl tracking-[0.1em] uppercase text-white font-bold">
            Social Media Management
          </h3>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-24">
          {smmPackages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col p-8 border relative overflow-hidden transition-all duration-300 ${
                p.highlight
                  ? "border-ember bg-gunmetal/90 glow-border scale-[1.02]"
                  : "border-white/8 bg-gunmetal/30 hover:border-white/15"
              }`}
            >
              {/* Top accent line */}
              {p.highlight && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ember via-ember-soft to-transparent" />
              )}

              {p.highlight && (
                <span className="absolute top-0 right-6 bg-ember text-obsidian text-[9px] tracking-[0.2em] uppercase px-2.5 py-1.5 font-heading font-black rounded-b-sm">
                  Most Popular
                </span>
              )}

              <h4 className="font-heading text-lg text-white font-bold uppercase mb-1">
                {p.name}
              </h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-heading text-3xl text-ember font-black">
                  {p.price}
                </span>
                <span className="text-silver/50 text-sm font-body">
                  {p.period}
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-silver/70 font-body"
                  >
                    <Icon
                      name="Check"
                      size={14}
                      className="text-ember shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`text-center py-3 text-xs font-heading font-black tracking-[0.15em] transition-all duration-300 rounded-sm ${
                  p.highlight
                    ? "bg-ember text-white hover:bg-ember-soft shadow-lg shadow-ember/20"
                    : "border border-white/15 text-silver hover:border-ember hover:text-ember"
                }`}
              >
                GET STARTED
              </Link>
            </div>
          ))}
        </div>

        {/* À la carte Section */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-9 h-9 border border-ember/30 bg-ember/5 flex items-center justify-center text-ember">
            <Icon name="LayoutGrid" size={18} />
          </div>
          <h3 className="font-heading text-lg sm:text-xl tracking-[0.1em] uppercase text-white font-bold">
            Services
          </h3>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 mb-16">
          {/* Tab Sidebar */}
          <div className="flex flex-col gap-2">
            {priceGroups.map((g, i) => (
              <button
                key={g.key}
                onClick={() => setTab(i)}
                className={`text-left flex items-center gap-3 px-5 py-4 border font-body transition-all duration-300 relative overflow-hidden ${
                  tab === i
                    ? "border-ember/60 bg-gunmetal/80 text-silver glow-border"
                    : "border-white/5 text-silver/60 hover:border-white/15 hover:text-silver/80"
                }`}
              >
                {tab === i && (
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-ember" />
                )}
                <Icon
                  name={g.icon}
                  size={18}
                  className={`transition-colors duration-300 ${tab === i ? "text-ember" : "text-silver/40"}`}
                />
                <span className="font-semibold text-sm">{g.title}</span>
              </button>
            ))}
          </div>

          {/* Price Table Panel */}
          <div className="card-panel p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ember via-ember-soft to-transparent" />
            <h4 className="font-heading text-xl uppercase text-white font-bold mb-6">
              {current.title}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {current.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 group"
                >
                  <span className="text-sm text-silver/70 font-body group-hover:text-silver/90 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-sm text-ember font-heading font-semibold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Express delivery + payment terms */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card-panel p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-ember to-transparent" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-ember/30 bg-ember/5 flex items-center justify-center text-ember">
                <Icon name="Rocket" size={16} />
              </div>
              <h4 className="font-heading text-sm tracking-[0.1em] uppercase text-white font-bold">
                Express Delivery
              </h4>
            </div>
            <div className="space-y-3">
              {expressDelivery.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center justify-between text-sm font-body text-silver/70 border-b border-white/5 pb-3"
                >
                  {e.label}
                  <span className="text-ember font-heading font-semibold">{e.extra}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-panel p-7 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-ember to-transparent" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-ember/30 bg-ember/5 flex items-center justify-center text-ember">
                <Icon name="ShieldCheck" size={16} />
              </div>
              <h4 className="font-heading text-sm tracking-[0.1em] uppercase text-white font-bold">
                Payment Terms
              </h4>
            </div>
            <div className="space-y-3">
              {paymentTerms.map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 text-sm font-body text-silver/70 border-b border-white/5 pb-3"
                >
                  <Icon name="Check" size={14} className="text-ember" strokeWidth={3} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
