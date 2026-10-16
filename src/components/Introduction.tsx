import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/content';

interface IntroductionProps {
  onOpenEnquiry: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 bg-[#F7F4EF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Editorial Interior Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-[#E6D8C8]/30 shadow-md">
              <img
                src={IMAGES.intro}
                alt="Refined foyer lounge with fluted credenza, warm sconce lighting, and sculptural ceramic vase"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#242321]/80 backdrop-blur-xs text-[#F7F4EF] px-4 py-2 text-[11px] tracking-wider uppercase font-light">
                <span>Natural Textures · Ambient Lighting · Balanced Form</span>
              </div>
            </div>
            {/* Architectural accent frame */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 border border-[#B79A6A]/30 -z-0 pointer-events-none" />
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="text-xs tracking-[0.2em] uppercase text-[#B79A6A] font-medium mb-3 sm:mb-4">
              DESIGNED WITH PURPOSE. CREATED FOR LIVING.
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-[1.15] tracking-tight mb-6 text-balance">
              Your Space, Beautifully Reimagined.
            </h2>

            {/* Decorative Gold Accent Line */}
            <div className="w-16 h-[1.5px] bg-[#B79A6A] mb-6" />

            {/* Body Text */}
            <p className="text-base sm:text-lg text-[#3D3A36] font-light leading-relaxed mb-6">
              Every space has its own character. Classy Interior is presented as a destination for exploring thoughtful interior design ideas, refined aesthetics, and spaces that feel personal and welcoming.
            </p>

            <p className="text-sm sm:text-base text-[#726E67] font-light leading-relaxed mb-8">
              Whether you are planning a modern apartment refresh, exploring modular culinary concepts, or reimagining your family living room in Kanpur, our design philosophy begins with calm proportions, honest materials, and serene lighting.
            </p>

            {/* Interactive Points - Clean Unboxed Metadata */}
            <div className="grid grid-cols-2 gap-4 py-5 border-y border-[#E6D8C8] mb-8 text-xs sm:text-sm">
              <div>
                <span className="block font-serif text-lg text-[#242321]">Kanpur, UP</span>
                <span className="text-[#726E67] text-xs">Based in Kalyanpur</span>
              </div>
              <div>
                <span className="block font-serif text-lg text-[#242321]">4.9 / 5 Stars</span>
                <span className="text-[#726E67] text-xs">Rated by 36 Clients</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenEnquiry}
                className="cursor-pointer inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#242321] text-[#F7F4EF] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#B79A6A] transition-colors"
              >
                <span>Connect With Classy Interior</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
