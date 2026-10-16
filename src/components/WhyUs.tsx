import React from 'react';
import { DESIGN_PRINCIPLES, IMAGES } from '../data/content';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F4EF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.22em] uppercase text-[#B79A6A] font-medium block mb-3">
              OUR GUIDING VALUES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-[1.15] mb-6">
              The Beauty is in the Details
            </h2>
            <p className="text-sm sm:text-base text-[#6B6761] font-light leading-relaxed mb-10">
              True luxury does not come from excess ornamentation; it arises from intentional discipline, balanced natural textures, and spaces that adapt gracefully to everyday living.
            </p>

            {/* 4 Design Principles */}
            <div className="space-y-6 sm:space-y-7">
              {DESIGN_PRINCIPLES.map((principle, index) => (
                <div key={principle.title} className="pb-6 border-b border-[#E6D8C8] last:border-none">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-mono text-[#B79A6A]">0{index + 1}.</span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#242321]">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#3D3A36] mb-1.5 pl-6">
                    {principle.description}
                  </p>
                  <p className="text-xs text-[#726E67] font-light leading-relaxed pl-6">
                    {principle.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-[#242321]/5 shadow-xl">
              <img
                src={IMAGES.dining}
                alt="Contemporary luxury dining room with solid oak table, ambient brass lighting, and panoramic landscape view"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] sm:h-[560px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-semibold block mb-1">
                  ARCHITECTURAL HARMONY
                </span>
                <p className="font-serif text-lg sm:text-xl text-white/95">
                  Natural materials, quiet craftsmanship, and proportioned spaces.
                </p>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-40 h-40 border border-[#B79A6A]/30 -z-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
