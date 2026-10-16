import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Sparkles } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F5EFE7] border-y border-[#E6D8C8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B79A6A] font-medium block mb-3">
            A THOUGHTFUL COLLABORATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-tight mb-4">
            From Idea to Interior
          </h2>
          <p className="text-sm sm:text-base text-[#6B6761] font-light leading-relaxed">
            A structured four-step journey designed to transition seamlessly from your initial thoughts to an elevated, bespoke interior.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[#E6D8C8] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="bg-[#F7F4EF] border border-[#E6D8C8] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#B79A6A]"
              >
                <div>
                  {/* Step Number with Gold Accent */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl text-[#B79A6A] font-light">
                      {stepItem.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#726E67] font-medium">
                      Stage {idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#242321] tracking-wide mb-3">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#3D3A36] leading-relaxed mb-3">
                    {stepItem.description}
                  </p>

                  <p className="text-xs text-[#726E67] font-light leading-relaxed">
                    {stepItem.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6D8C8]/60 flex items-center justify-between text-[11px] text-[#B79A6A]">
                  <span>Step {stepItem.step} of 04</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-[#726E67]/80 font-light">
          * This four-stage workflow represents our suggested design approach. Every residential or commercial project in Kanpur is tailored to individual client timelines and preferences.
        </div>
      </div>
    </section>
  );
};
