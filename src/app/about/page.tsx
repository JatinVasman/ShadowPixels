import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { stats, whyChooseUs, testimonials, founder } from "@/lib/data";

export const metadata: Metadata = {
  title: "About ShadowPixels Studio | Cinematic Creative Media Agency",
  description:
    "Learn about Rishabh Srivastava and our journey. We combine strategy, CGI, VFX, and editing to craft visuals that leave a mark.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-obsidian bg-cinematic pt-24 pb-20 relative">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-ember/40 to-transparent pointer-events-none" />

      {/* Hero Banner Section */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-12 pb-16 sm:pb-24">
        <div className="max-w-3xl group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
          <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-bold tracking-[0.3em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            Who We Are
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            <span className="text-gradient-silver">CRAFTING VISUAL</span>
            <br />
            <span className="text-gradient-ember">EXPERIENCES</span>
          </h1>
          <p className="text-silver/80 font-body text-sm sm:text-base mt-6 max-w-2xl leading-relaxed">
            ShadowPixels Studio is a premium creative media agency specializing in Graphic Design, 
            Video Editing, Motion Graphics, Social Media Management, and Cinematic VFX. We help businesses, 
            brands, and creators transform bold ideas into unforgettable visual experiences.
          </p>
        </div>
      </section>

      {/* Our Story & Stats Section */}
      <section className="border-t border-white/5 py-16 sm:py-24 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            {/* Story */}
            <div className="group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
              <span className="text-ember font-body text-xs font-semibold tracking-[0.2em] uppercase">
                Our Story
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold mt-3 uppercase text-gradient-silver">
                Visuals That Leave A Mark
              </h2>
              <p className="text-silver/60 font-body text-sm sm:text-base mt-6 leading-relaxed">
                ShadowPixels Studio was founded with a passion for transforming ideas into visually compelling stories. 
                Our goal is to help businesses, creators, and modern brands stand out in a crowded digital landscape through 
                strategic design, engaging cinematic content, and world-class visual execution.
              </p>
              <p className="text-silver/60 font-body text-sm sm:text-base mt-4 leading-relaxed">
                Whether it is a short-form Reel, a corporate documentary, branding elements, or high-fidelity 
                CGI integration, we approach every pixel with technical precision and creative audacity.
              </p>
            </div>

            {/* Stats list */}
            <div className="lg:mt-8">
              <div className="grid grid-cols-2 gap-8 card-panel p-8 sm:p-10 relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-ember/5 rounded-full blur-2xl pointer-events-none" />
                
                {stats.map((s, index) => (
                  <div key={s.label} className="flex flex-col border-l border-ember/20 pl-4 relative group transition-all duration-300 hover:translate-x-1 cursor-default">
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-ember scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <span className="font-heading text-3xl sm:text-4xl font-black text-white leading-none group-hover:text-ember transition-colors duration-300">
                      {s.value}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-silver/40 font-body mt-2.5 group-hover:text-silver/70 transition-colors duration-300">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-panel p-8 sm:p-10 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-ember/20 hover:shadow-lg hover:shadow-ember/5 cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ember via-ember-soft to-transparent" />
              <div className="w-12 h-12 rounded-sm border border-ember/30 bg-ember/5 flex items-center justify-center text-ember mb-6">
                <Icon name="Target" size={24} />
              </div>
              <h3 className="font-heading text-lg tracking-[0.1em] text-white uppercase font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed">
                To empower businesses and digital creators with strategic creative solutions that enhance brand identity, 
                strengthen online digital presence, and deliver measurable engagement and real impact.
              </p>
            </div>

            {/* Vision */}
            <div className="card-panel p-8 sm:p-10 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-steel/20 hover:shadow-lg hover:shadow-steel/5 cursor-default">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-steel via-blue-400 to-transparent" />
              <div className="w-12 h-12 rounded-sm border border-steel/30 bg-steel/5 flex items-center justify-center text-steel mb-6">
                <Icon name="Eye" size={24} />
              </div>
              <h3 className="font-heading text-lg tracking-[0.1em] text-white uppercase font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed">
                To become a globally recognized creative media studio trusted for technical innovation, unmatched 
                visual quality, and cinematic storytelling that bridges the gap between imagination and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="border-t border-white/5 py-16 sm:py-24 bg-black/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
            <span className="text-ember font-body text-xs font-semibold tracking-[0.2em] uppercase">
              How We Work
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold mt-3 uppercase text-gradient-silver">
              Our Core Approach
            </h2>
            <p className="text-silver/60 font-body text-sm sm:text-base mt-4 leading-relaxed">
              We combine creativity, strategy, and technology to deliver visually engaging content that 
              not only looks exceptional but also supports business growth and audience engagement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-panel p-6 border-l-2 border-l-ember transition-all duration-300 hover:-translate-y-1 hover:border-l-ember-soft hover:shadow-lg hover:shadow-ember/5 cursor-default">
              <span className="text-xs font-heading font-black text-ember/60">01 / CONCEPTUALIZE</span>
              <h4 className="font-heading text-sm font-bold text-white uppercase mt-2 mb-3">Creativity First</h4>
              <p className="text-silver/50 text-xs font-body leading-relaxed">
                Brainstorming out-of-the-box ideas and conceptual sketches, tailored specifically to challenge industry standards.
              </p>
            </div>
            <div className="card-panel p-6 border-l-2 border-l-ember transition-all duration-300 hover:-translate-y-1 hover:border-l-ember-soft hover:shadow-lg hover:shadow-ember/5 cursor-default">
              <span className="text-xs font-heading font-black text-ember/60">02 / STRATEGIZE</span>
              <h4 className="font-heading text-sm font-bold text-white uppercase mt-2 mb-3">Audience Analysis</h4>
              <p className="text-silver/50 text-xs font-body leading-relaxed">
                Formulating calendars, analyzing competitors, and structuring narratives to drive maximum visual engagement.
              </p>
            </div>
            <div className="card-panel p-6 border-l-2 border-l-ember transition-all duration-300 hover:-translate-y-1 hover:border-l-ember-soft hover:shadow-lg hover:shadow-ember/5 cursor-default">
              <span className="text-xs font-heading font-black text-ember/60">03 / PRODUCE & REFINE</span>
              <h4 className="font-heading text-sm font-bold text-white uppercase mt-2 mb-3">Cinematic VFX & Edit</h4>
              <p className="text-silver/50 text-xs font-body leading-relaxed">
                Applying advanced compositing, grading, sound design, and CGI tracking to produce premium-grade assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ShadowPixels Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-14 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
            <span className="text-ember font-body text-xs font-semibold tracking-[0.2em] uppercase">
              Features
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold mt-3 uppercase text-gradient-silver">
              Why ShadowPixels
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={item.title} className="card-panel p-6 relative overflow-hidden group transition-all duration-300 hover:bg-gunmetal/30 hover:-translate-y-1 hover:border-ember/20 hover:shadow-lg hover:shadow-ember/5 cursor-default">
                {/* Corner highlight lines */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-ember/20 group-hover:border-ember/50 transition-colors" />
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-ember/30 bg-ember/5 text-ember">
                    <Icon name="Check" size={16} strokeWidth={3} />
                  </span>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-silver/50 text-xs font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="border-t border-white/5 py-16 sm:py-24 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-ember font-body text-xs font-semibold tracking-[0.2em] uppercase">
              The Mind Behind The Lens
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold mt-3 uppercase text-gradient-silver">
              Meet The Founder
            </h2>
          </div>

          <div className="card-panel p-6 sm:p-12 grid md:grid-cols-[1fr_2fr] gap-10 items-center relative overflow-hidden">
            {/* Visual Frame Border */}
            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
            <div className="absolute top-0 left-0 w-24 h-1 bg-ember" />
            
            {/* Founder Styled Graphic/Avatar */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] border border-ember/30 bg-gradient-to-br from-gunmetal via-obsidian to-black rounded-lg flex items-center justify-center shadow-2xl group overflow-hidden">
                {/* Founder Image */}
                <Image
                  src="/founder.jpg"
                  alt="Rishabh Srivastava"
                  fill
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Corner Frame Visuals */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-ember/40 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-ember/40 pointer-events-none" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-5">
              <div>
                <h3 className="font-heading text-2xl font-black uppercase text-white tracking-wide">
                  {founder.name}
                </h3>
                <p className="text-ember font-body text-sm font-semibold tracking-wider mt-1">
                  {founder.role}
                </p>
              </div>

              {/* Roles Badge List */}
              <div className="flex flex-wrap gap-2.5">
                {founder.titles.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-[0.1em] font-heading font-semibold text-silver/70 border border-white/10 bg-white/5 px-3 py-1 rounded-sm uppercase transition-all duration-300 hover:border-ember/30 hover:text-white cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-silver/60 font-body text-sm sm:text-base leading-relaxed">
                {founder.bio}
              </p>

              <div className="pt-4 flex gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-ember/40 hover:border-ember text-silver hover:text-white px-5 py-2.5 text-xs font-heading font-black tracking-widest transition-colors duration-300 rounded-sm"
                >
                  WORK WITH RISHABH <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
            <span className="text-ember font-body text-xs font-semibold tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold mt-3 uppercase text-gradient-silver">
              What Our Clients Say
            </h2>
            <p className="text-silver/60 font-body text-sm mt-4">
              Real feedback from creators, brands, and startups who trusted our creative eye.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="card-panel p-8 relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-ember/30 hover:shadow-lg hover:shadow-ember/5 cursor-default">
                {/* Quote Icon Background overlay */}
                <div className="absolute top-6 right-6 text-white/5 group-hover:text-ember/5 transition-colors duration-300 pointer-events-none">
                  <Icon name="Quote" size={60} />
                </div>

                <div>
                  {/* Star Ratings */}
                  <div className="flex gap-1 text-ember mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="fill-ember text-ember" />
                    ))}
                  </div>

                  <p className="text-silver/70 font-body text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
                      {t.author}
                    </h5>
                    <span className="text-[10px] tracking-widest uppercase text-silver/40 font-body mt-0.5 block">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive CTA */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="card-panel p-10 sm:p-14 text-center rounded-sm relative overflow-hidden bg-gradient-to-br from-gunmetal via-obsidian to-black border border-ember/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.08),transparent_60%)] pointer-events-none" />
          
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-gradient-silver tracking-tight">
            Ready To Leave A <span className="text-ember">Mark</span>?
          </h2>
          <p className="text-silver/60 font-body text-sm sm:text-base mt-4 max-w-md mx-auto leading-relaxed">
            Let us craft cinematic visuals that scale your audience, elevate your branding, and tell your unique story.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ember text-white hover:bg-ember-soft px-8 py-3.5 font-heading text-xs font-black tracking-[0.2em] transition-all duration-300 rounded-sm shadow-xl shadow-ember/20"
            >
              START A PROJECT <Icon name="Send" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
