"use client";

import SocialIcon from "./SocialIcon";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918423653305?text=Hi%20ShadowPixels%20Studio!%20I'd%20like%20to%20inquire%20about%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-ember text-white rounded-full shadow-xl shadow-ember/30 hover:bg-ember-soft transition-all duration-300 hover:scale-110 group cursor-pointer"
    >
      {/* Ripple pulse effects using the theme orange */}
      <span className="absolute inset-0 rounded-full bg-ember opacity-40 animate-ping group-hover:animate-none pointer-events-none" />
      
      {/* WhatsApp SVG Icon */}
      <SocialIcon platform="whatsapp" size={22} />
    </a>
  );
}
