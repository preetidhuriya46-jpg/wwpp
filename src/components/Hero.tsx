import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { IMAGES } from '../data/content';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-end justify-start overflow-hidden bg-[#242321]">
      {/* Background Hero Image with Slow Ken Burns Effect & Measured Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Contemporary luxury living room interior with double-height ceiling, warm cove lighting, and travertine table"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000 ease-out"
          style={{ animationDuration: '24s' }}
        />
        {/* Measured Contrast Scrims for WCAG AA text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-16 sm:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow & Location Label */}
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase text-[#E8DECD] mb-4 sm:mb-6 font-medium">
            <span>INTERIOR DESIGN</span>
            <span aria-hidden="true" className="text-[#B79A6A]">·</span>
            <span>KANPUR</span>
            <span aria-hidden="true" className="text-[#B79A6A]">·</span>
            <span className="inline-flex items-center gap-1 text-[#E6D8C8]">
              <MapPin className="w-3.5 h-3.5 text-[#B79A6A]" />
              Kanpur, Uttar Pradesh
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F4EF] leading-[1.08] tracking-tight mb-5 sm:mb-6 text-balance">
            Spaces That Feel Like You.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#F7F4EF]/85 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 text-balance">
            Thoughtfully designed interiors that bring elegance, comfort, and character into your everyday spaces.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <button
              onClick={onOpenEnquiry}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B79A6A] text-[#242321] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white transition-all duration-200 shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToPortfolio}
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black/40 backdrop-blur-xs text-[#F7F4EF] border border-[#E6D8C8]/40 text-xs uppercase tracking-[0.18em] font-medium hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              <span>Explore Our Designs</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Quiet Distinction & Scroll Hint */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider text-white/70">
          <div className="flex items-center gap-4">
            <span className="font-serif italic text-white/90">क्लासी इंटीरियर</span>
            <span aria-hidden="true" className="text-white/30">|</span>
            <span className="text-[11px] text-white/60">Curated Interior Architecture &amp; Design Concepts</span>
          </div>

          <a
            href="#about"
            onClick={scrollToAbout}
            aria-label="Scroll to introduction section"
            className="hidden sm:inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-[11px] tracking-[0.15em] uppercase">Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
