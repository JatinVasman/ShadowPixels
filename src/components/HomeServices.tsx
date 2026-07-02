import Link from "next/link";
import Icon from "./Icon";
import { services } from "@/lib/data";

export default function HomeServices() {
  const featuredServices = services.filter((s) => s.featured);

  return (
    <section className="bg-cinematic py-24 sm:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow matching About page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-ember/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header — left-aligned like About page */}
        <div className="max-w-3xl mb-16 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
          <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black mt-4 uppercase tracking-tight leading-[1.05]">
            <span className="text-gradient-silver">FEATURED</span>{" "}
            <span className="text-gradient-ember">SERVICES</span>
          </h2>
          <p className="text-silver/60 font-body mt-5 text-sm sm:text-base leading-relaxed max-w-2xl">
            High-impact visual productions and digital marketing solutions crafted for absolute brand excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServices.map((s) => (
            <div
              key={s.key}
              className="card-panel p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-ember via-ember-soft to-transparent" />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-ember/20 group-hover:border-ember/50 transition-colors" />

              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 border border-ember/30 bg-ember/5 text-ember flex items-center justify-center mb-6 group-hover:border-ember transition-colors duration-300">
                  <Icon name={s.icon} size={22} />
                </div>

                {/* Service Content */}
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-3">
                  {s.title}
                </h3>
                <p className="text-silver/50 text-sm font-body leading-relaxed mb-6">
                  {s.tagline}
                </p>

                {/* Features Preview */}
                <ul className="space-y-2 mb-8">
                  {s.included.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-silver/60 font-body">
                      <Icon name="Check" size={12} className="text-ember shrink-0" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                  <li className="text-xs text-ember font-body font-semibold tracking-wider pt-1">
                    + {s.included.length - 4} more features
                  </li>
                </ul>
              </div>

              {/* Action Link */}
              <Link
                href={`/services?tab=${s.key}`}
                className="inline-flex items-center gap-2 text-xs font-heading font-bold tracking-widest text-silver/70 group-hover:text-ember transition-colors duration-300 uppercase"
              >
                Learn More <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border border-ember/40 hover:border-ember text-ember bg-ember/5 hover:bg-ember/10 px-8 py-3.5 font-heading text-xs font-black tracking-[0.2em] transition-all duration-300 rounded-sm"
          >
            VIEW ALL SERVICES
            <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
