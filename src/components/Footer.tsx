import Link from "next/link";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { label: "Social Media Management", key: "smm" },
  { label: "Graphic Design", key: "graphic-design" },
  { label: "Motion Graphics", key: "motion-graphics" },
  { label: "Video Editing", key: "video-editing" },
  { label: "VFX & CGI", key: "vfx-cgi" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="SP"
                className="h-8 w-auto object-contain brightness-110"
              />
              <span className="font-heading text-sm sm:text-base tracking-[0.22em] font-black uppercase select-none">
                <span className="text-gradient-silver inline-block">SHADOW</span>
                <span className="text-gradient-ember-vertical inline-block">PIXELS</span>
              </span>
            </div>
            <p className="text-silver/50 text-sm font-body mt-4 max-w-[220px]">
              Visuals that leave a mark. Stories that stay forever.
            </p>
            <div className="flex gap-3 mt-5">
              {(["instagram", "linkedin", "whatsapp"] as const).map((s) => (
                <a
                  key={s}
                  href={
                    s === "instagram"
                      ? "https://instagram.com/shadowpixels.studio"
                      : s === "linkedin"
                      ? "https://www.linkedin.com/company/shadow-pixels-studio/"
                      : "https://wa.me/918423653305"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s}
                  className="flex items-center justify-center w-8 h-8 border border-white/10 text-silver/50 hover:border-ember hover:text-ember transition-colors"
                >
                  <SocialIcon platform={s} size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.2em] text-silver uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-silver/50 text-sm font-body hover:text-ember transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.2em] text-silver uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.key}>
                  <Link
                    href={`/services?tab=${s.key}`}
                    className="text-silver/50 text-sm font-body hover:text-ember transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs tracking-[0.2em] text-silver uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-body text-silver/50">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-ember" />
                <a href="mailto:shadowpixels.studio@gmail.com" className="hover:text-ember transition-colors">
                  shadowpixels.studio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-ember" />
                <a href="tel:+918423653305" className="hover:text-ember transition-colors">
                  +91 8423653305
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Globe" size={14} className="text-ember" />
                <a href="https://shadowpixels.studio" className="hover:text-ember transition-colors">
                  shadowpixels.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-silver/40 font-body">
          <span>© 2026 ShadowPixels Studio. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ember transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ember transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver/40 font-body">
          <span>
            <a
              href="https://businessvolunteers.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ember hover:underline font-semibold transition-colors"
            >
              Business Volunteer
            </a>{" "}
            | All Rights Reserved 2025
          </span>
          <span className="text-center sm:text-right">
            Digital Marketing Agency / Company in Noida, Delhi NCR, India
          </span>
        </div>
      </div>
    </footer>
  );
}
