"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch screens/mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen"
      aria-hidden="true"
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-100 pointer-events-none will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(255, 106, 0, 0.18) 0%, rgba(255, 106, 0, 0.05) 45%, rgba(255, 106, 0, 0) 70%)",
          transform: `translate3d(${position.x - 250}px, ${position.y - 250}px, 0)`,
          transition: "transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
