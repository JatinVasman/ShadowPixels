"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/blogs", label: "BLOGS" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="SP"
            className="h-8 w-auto object-contain brightness-110"
          />
          <span className="font-heading text-sm sm:text-base tracking-[0.22em] font-black uppercase select-none">
            <span className="text-gradient-silver inline-block">SHADOW</span>
            <span className="text-gradient-ember-vertical inline-block">PIXELS</span>
          </span>
        </Link>

        {/* Desktop Links with bottom active border line */}
        <ul className="hidden md:flex items-stretch gap-8 font-body text-xs font-semibold tracking-[0.18em] h-full">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href} className="relative flex items-center h-full">
                <Link
                  href={l.href}
                  className={`transition-colors duration-300 hover:text-ember py-2 ${
                    isActive ? "text-ember" : "text-silver/80"
                  }`}
                >
                  {l.label}
                </Link>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ember" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Get in Touch Button with exclamation mark */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center border border-ember px-5 py-2.5 text-[10px] tracking-[0.2em] font-heading font-semibold text-ember hover:bg-ember hover:text-obsidian transition-all duration-300 rounded-sm"
        >
          GET IN TOUCH!
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-silver"
        >
          <Icon name={open ? "X" : "Menu"} size={26} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-obsidian border-t border-white/10">
          <ul className="flex flex-col px-5 py-4 gap-4 font-body text-silver/90">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex border border-ember/70 px-4 py-2 text-xs tracking-[0.15em] text-ember"
              >
                GET IN TOUCH!
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
