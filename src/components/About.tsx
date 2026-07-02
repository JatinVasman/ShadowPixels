import Link from "next/link";
import Icon from "./Icon";
import { coreValues, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-cinematic py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default mb-10 max-w-2xl">
          <span className="text-ember font-body text-xs tracking-[0.3em] uppercase">
            About Us
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-3 uppercase">
            <span className="text-gradient-silver">WE ARE SHADOW</span>
            <span className="text-gradient-ember">PIXELS</span>
          </h2>
          <p className="text-silver/60 font-body mt-5">
            ShadowPixels Studio is a creative media agency that transforms ideas into cinematic, 
            impactful visual experiences. We combine strategy and creativity to help businesses 
            and creators stand out and leave a mark.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-ember/60 pl-4">
              <div className="font-heading text-2xl sm:text-3xl font-bold text-silver">
                {s.value}
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-silver/50 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default inline-block">
          <span className="text-ember font-body text-xs tracking-[0.3em] uppercase">
            Our Values
          </span>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v) => (
            <div key={v.title} className="card-panel p-6">
              <span className="flex items-center justify-center w-11 h-11 border border-ember/40 text-ember mb-4">
                <Icon name={v.icon} size={20} />
              </span>
              <h3 className="font-heading text-sm tracking-[0.15em] text-silver uppercase mb-2">
                {v.title}
              </h3>
              <p className="text-silver/50 text-sm font-body">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Read Our Story Link */}
        <div className="mt-14 flex justify-start">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-ember/60 hover:border-ember text-ember bg-black/20 hover:bg-ember/5 px-6 py-3 text-xs font-semibold tracking-wider font-heading uppercase transition-all duration-300 rounded-sm"
          >
            Read Our Story <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
