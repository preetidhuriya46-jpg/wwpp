import React from 'react';
import { ArrowUpRight, Phone, MapPin, Compass } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242321] text-[#F7F4EF] pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Callout Strip: Have a Project in Mind? */}
        <div className="pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#B79A6A] font-semibold block mb-2">
              HAVE A PROJECT IN MIND?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F7F4EF]">
              Let’s create a space that inspires you.
            </h3>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 bg-[#B79A6A] text-[#242321] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white transition-colors self-start md:self-auto shrink-0 shadow-lg"
          >
            <span>Start Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Column Footer Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10 text-sm">
          {/* Brand & Narrative (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-white font-medium">
                {BUSINESS_DATA.name}
              </span>
              <span className="font-serif italic text-white/50 text-sm">
                {BUSINESS_DATA.hindiName}
              </span>
            </div>

            <p className="font-serif italic text-base text-[#B79A6A]">
              “Thoughtful spaces. Timeless style.”
            </p>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Contemporary residential and boutique commercial interior design concepts based in Kalyanpur, Kanpur, Uttar Pradesh.
            </p>

            <div className="pt-2 text-xs text-white/60 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#B79A6A]" />
              <span>Kanpur, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-medium block mb-2">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/75 hover:text-[#B79A6A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio Access (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-medium block mb-2">
              CONTACT &amp; VISIT
            </span>

            <div className="space-y-2 text-xs text-white/75">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B79A6A]" />
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_DATA.phoneDisplay}
                </a>
              </div>

              <p className="leading-relaxed text-white/65 pt-1">
                {BUSINESS_DATA.addressLine1},<br />
                {BUSINESS_DATA.addressLine2}
              </p>

              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#B79A6A] hover:underline"
                >
                  <span>Get Driving Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Classy Interior. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/40">Kalyanpur, Kanpur · UP 208017</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <Compass className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
