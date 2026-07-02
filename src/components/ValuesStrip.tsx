import Icon from "./Icon";
import { values } from "@/lib/data";

export default function ValuesStrip() {
  return (
    <section className="bg-black/20 border-y border-white/5 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle ember glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-ember/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            What We Stand For
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center gap-4 group transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] cursor-default"
            >
              <div className="w-16 h-16 border border-ember/30 bg-ember/5 flex items-center justify-center text-ember group-hover:border-ember transition-colors duration-300 shadow-lg shadow-ember/0 group-hover:shadow-ember/10">
                <Icon name={v.icon} size={26} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-sm tracking-[0.15em] text-silver uppercase group-hover:text-white transition-colors duration-300">
                {v.title}
              </h3>
              <p className="text-silver/50 text-xs font-body max-w-[160px] leading-relaxed group-hover:text-silver/80 transition-colors duration-300">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
