"use client";

import SocialIcon from "./SocialIcon";

export default function InstagramButton() {
  return (
    <a
      href="https://instagram.com/shadowpixels.studio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on Instagram"
      className="fixed bottom-[104px] right-6 z-50 flex items-center justify-center w-14 h-14 bg-ember text-white rounded-full shadow-xl shadow-ember/30 hover:bg-ember-soft transition-all duration-300 hover:scale-110 group cursor-pointer"
    >
      {/* Ripple pulse effects matching the theme orange */}
      <span className="absolute inset-0 rounded-full bg-ember opacity-40 animate-ping group-hover:animate-none pointer-events-none" />
      
      {/* Instagram SVG Icon */}
      <SocialIcon platform="instagram" size={22} />
    </a>
  );
}
