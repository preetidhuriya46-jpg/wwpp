import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/content';

interface VisualFeatureProps {
  onOpenEnquiry: () => void;
}

export const VisualFeature: React.FC<VisualFeatureProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#242321] text-white">
      {/* Background Cinematic Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.feature}
          alt="Cinematic luxury penthouse interior with marble fireplace wall and architectural lighting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Measured Contrast Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
      </div>

      {/* Narrative Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#B79A6A] font-semibold mb-4 sm:mb-6">
          THE POWER OF ENVIRONMENT
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#F7F4EF] mb-6 sm:mb-8 text-balance">
          GOOD DESIGN CHANGES HOW A SPACE FEELS.
        </h2>

        <div className="w-16 h-[1.5px] bg-[#B79A6A] mx-auto mb-6 sm:mb-8" />

        <p className="text-base sm:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 text-balance">
          Explore interiors where materials, lighting, textures, and thoughtful details come together.
        </p>

        <div>
          <button
            onClick={onOpenEnquiry}
            className="cursor-pointer inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 bg-[#B79A6A] text-[#242321] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white transition-all duration-200 shadow-2xl"
          >
            <span>Let's Discuss Your Space</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
