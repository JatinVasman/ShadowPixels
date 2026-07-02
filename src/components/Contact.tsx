"use client";

import { useState } from "react";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";

export default function Contact({ hideBorder = false }: { hideBorder?: boolean }) {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceRequired: "",
    projectDetails: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSent(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className={`bg-cinematic py-24 sm:py-32 ${hideBorder ? "" : "border-t border-white/5"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          
          {/* Contact Details */}
          <div>
            <div className="mb-8 group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-default">
              <span className="inline-flex items-center gap-2 text-ember font-body text-xs font-semibold tracking-[0.3em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
                Let&apos;s Work Together
              </span>
              {hideBorder ? (
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black mt-4 uppercase leading-[1.05] tracking-tight">
                  <span className="text-gradient-silver">START A</span>
                  <br />
                  <span className="text-gradient-ember">PROJECT</span>
                </h1>
              ) : (
                <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black mt-4 uppercase leading-[1.05] tracking-tight">
                  <span className="text-gradient-silver">START A</span>
                  <br />
                  <span className="text-gradient-ember">PROJECT</span>
                </h2>
              )}
            </div>
            <p className="text-silver/60 font-body mt-5 max-w-md leading-relaxed">
              Have an idea that needs cinematic visuals? Tell us about your project and let&apos;s craft something that leaves a mark.
            </p>

            <div className="mt-9 space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 border border-ember/30 bg-ember/5 text-ember group-hover:border-ember transition-colors duration-300">
                  <Icon name="Phone" size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-silver/40 font-body">
                    Phone
                  </div>
                  <a
                    href="tel:+918423653305"
                    className="text-silver font-body hover:text-ember transition-colors duration-300"
                  >
                    +91 8423653305
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 border border-ember/30 bg-ember/5 text-ember group-hover:border-ember transition-colors duration-300">
                  <Icon name="Mail" size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-silver/40 font-body">
                    Email Address
                  </div>
                  <a
                    href="mailto:shadowpixels.studio@gmail.com"
                    className="text-silver font-body hover:text-ember transition-colors duration-300 break-all"
                  >
                    shadowpixels.studio@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 border border-ember/30 bg-ember/5 text-ember group-hover:border-ember transition-colors duration-300">
                  <SocialIcon platform="instagram" size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-silver/40 font-body">
                    Instagram
                  </div>
                  <a
                    href="https://instagram.com/shadowpixels.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver font-body hover:text-ember transition-colors duration-300"
                  >
                    @shadowpixels.studio
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 border border-ember/30 bg-ember/5 text-ember group-hover:border-ember transition-colors duration-300">
                  <SocialIcon platform="linkedin" size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-silver/40 font-body">
                    LinkedIn
                  </div>
                  <a
                    href="https://www.linkedin.com/company/shadow-pixels-studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver font-body hover:text-ember transition-colors duration-300"
                  >
                    ShadowPixels Studio
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-4 group">
                <span className="flex items-center justify-center w-11 h-11 border border-ember/30 bg-ember/5 text-ember group-hover:border-ember transition-colors duration-300">
                  <Icon name="Globe" size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-silver/40 font-body">
                    Website
                  </div>
                  <a
                    href="https://shadowpixels.studio"
                    className="text-silver font-body hover:text-ember transition-colors duration-300"
                  >
                    shadowpixels.studio
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="mt-12">
              <div className="text-[11px] uppercase tracking-widest text-silver/40 font-body mb-3">
                Follow Rishabh & Studio
              </div>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/shadowpixels.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 border border-white/10 text-silver/60 hover:border-ember hover:text-ember transition-all duration-300 rounded-sm"
                >
                  <SocialIcon platform="instagram" size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/shadow-pixels-studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 border border-white/10 text-silver/60 hover:border-ember hover:text-ember transition-all duration-300 rounded-sm"
                >
                  <SocialIcon platform="linkedin" size={16} />
                </a>
                <a
                  href="https://wa.me/918423653305?text=Hi%20ShadowPixels%20Studio!%20I'd%20like%20to%20inquire%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-center w-9 h-9 border border-white/10 text-silver/60 hover:border-ember hover:text-ember transition-all duration-300 rounded-sm"
                >
                  <SocialIcon platform="whatsapp" size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-panel p-8 sm:p-10 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-ember/5 rounded-full blur-2xl pointer-events-none" />
            
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-ember bg-ember/5 text-ember animate-bounce mb-2">
                  <Icon name="Check" size={32} strokeWidth={2.5} />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                  Project Inquiry Received!
                </h3>
                <p className="text-silver/60 font-body text-sm max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out, {formData.fullName}. Rishabh and the ShadowPixels team will review your project details and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      companyName: "",
                      serviceRequired: "",
                      projectDetails: "",
                      budget: "",
                    });
                  }}
                  className="mt-6 text-xs font-heading font-black tracking-widest text-ember border-b border-ember/40 hover:border-ember pb-0.5 transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver placeholder:text-silver/20 focus:outline-none focus:border-ember transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver placeholder:text-silver/20 focus:outline-none focus:border-ember transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99999 99999"
                      className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver placeholder:text-silver/20 focus:outline-none focus:border-ember transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="companyName" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                      Company Name <span className="text-silver/30">(Optional)</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="My Business"
                      className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver placeholder:text-silver/20 focus:outline-none focus:border-ember transition-colors"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceRequired" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                    Service Required *
                  </label>
                  <div className="relative">
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      required
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver focus:outline-none focus:border-ember transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-obsidian text-silver/40">
                        Select a Service
                      </option>
                      <option value="Social Media Management" className="bg-obsidian text-silver">
                        Social Media Management
                      </option>
                      <option value="Graphic Design" className="bg-obsidian text-silver">
                        Graphic Design
                      </option>
                      <option value="Motion Graphics" className="bg-obsidian text-silver">
                        Motion Graphics
                      </option>
                      <option value="Video Editing" className="bg-obsidian text-silver">
                        Video Editing
                      </option>
                      <option value="VFX & CGI" className="bg-obsidian text-silver">
                        VFX & CGI
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-silver/50">
                      <Icon name="ChevronDown" size={16} />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDetails" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    required
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timelines, or aesthetic directions..."
                    className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver placeholder:text-silver/20 focus:outline-none focus:border-ember transition-colors resize-none"
                  />
                </div>

                {/* Budget */}
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="text-[10px] uppercase tracking-widest text-silver/50 font-body font-semibold">
                    Budget Range <span className="text-silver/30">(Optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-obsidian/60 border border-white/10 px-4 py-3 text-sm font-body text-silver focus:outline-none focus:border-ember transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-obsidian text-silver/40">
                        Select Budget Range
                      </option>
                      <option value="Under ₹5,000" className="bg-obsidian text-silver">
                        Under ₹5,000
                      </option>
                      <option value="₹5,000 - ₹15,000" className="bg-obsidian text-silver">
                        ₹5,000 - ₹15,000
                      </option>
                      <option value="₹15,000 - ₹30,000" className="bg-obsidian text-silver">
                        ₹15,000 - ₹30,000
                      </option>
                      <option value="₹30,000 - ₹50,000" className="bg-obsidian text-silver">
                        ₹30,000 - ₹50,000
                      </option>
                      <option value="₹50,000+" className="bg-obsidian text-silver">
                        ₹50,000+
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-silver/50">
                      <Icon name="ChevronDown" size={16} />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-ember text-white px-6 py-3.5 text-xs font-semibold font-heading tracking-[0.2em] uppercase hover:bg-ember-soft transition-all duration-300 rounded-sm font-bold shadow-lg shadow-ember/10 hover:shadow-ember/20 cursor-pointer"
                >
                  SUBMIT ENQUIRY <Icon name="Send" size={14} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
