import Link from "next/link";
import Icon from "./Icon";

const tags = ["VFX", "EDITING", "CGI", "FILM", "MOTION"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Base dark backdrop */}
        <div className="absolute inset-0 bg-obsidian" />

        {/* Hero Background Image — positioned to the right side */}
        <div
          className="absolute top-0 bottom-0 right-0 w-[75%] sm:w-[65%]"
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url("/hero-bg.jpg")',
              backgroundPosition: 'center center',
            }}
          />

          {/* Hard left-edge fade: solid dark fading into the image */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, var(--obsidian) 0%, var(--obsidian) 5%, rgba(11,11,15,0.85) 20%, rgba(11,11,15,0.4) 45%, transparent 70%)',
            }}
          />
        </div>

        {/* Top fade for navbar blending */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, var(--obsidian) 0%, rgba(11,11,15,0.7) 8%, transparent 25%)',
          }}
        />

        {/* Bottom fade for section blending */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, var(--obsidian) 0%, rgba(11,11,15,0.7) 8%, transparent 30%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
        {/* Tags with first tag underlined */}
        <div className="flex flex-wrap items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.25em] text-silver/60 font-body mb-8">
          {tags.map((t, i) => (
            <span key={t} className="flex items-center gap-2.5">
              <span className="text-white border-b-2 border-ember pb-1 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-ember-soft hover:border-white cursor-default inline-block">
                {t}
              </span>
              {i < tags.length - 1 && <span className="text-ember/80 select-none">•</span>}
            </span>
          ))}
        </div>

        {/* Cinematic Typography */}
        <h1 className="font-heading font-extrabold uppercase leading-[1.05] text-4xl sm:text-6xl lg:text-7xl max-w-3xl tracking-tight">
          <span className="text-white">VISUALS THAT</span>
          <br />
          <span className="text-white">LEAVE A </span>
          <span className="text-ember">MARK</span>
        </h1>

        <p className="mt-5 max-w-md text-silver/70 font-body text-sm sm:text-base leading-relaxed">
          We craft cinematic visuals with precision and passion, turning
          ideas into powerful experiences that leave a lasting impact.
        </p>

        {/* Customized Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ember text-white px-7 py-3 font-heading text-xs font-bold tracking-[0.2em] hover:bg-ember-soft transition-all duration-300 rounded-sm shadow-lg shadow-ember/25"
          >
            LET&apos;S CREATE
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 border border-white/20 text-white bg-black/40 hover:bg-white/10 px-7 py-3 font-heading text-xs font-bold tracking-[0.2em] hover:border-white/50 transition-all duration-300 rounded-sm"
          >
            VIEW WORK
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white/80">
              <Icon name="Play" size={8} className="fill-white text-white translate-x-[0.5px]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
