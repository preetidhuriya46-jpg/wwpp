import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-[#F5EFE7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.2em] uppercase text-[#B79A6A] font-medium block mb-3">
              EXPLORE OUR EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-tight">
              Our Design Possibilities
            </h2>
          </div>
          <p className="text-sm text-[#726E67] max-w-md font-light leading-relaxed">
            Proposed service concepts tailored to elevate residential and business interiors in Kanpur. We partner with clients to develop custom spaces suited to their everyday rhythm.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.title)}
              className="group cursor-pointer bg-[#F7F4EF] border border-[#E6D8C8] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#B79A6A]/60"
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative h-64 overflow-hidden bg-[#242321]/5">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                <div className="absolute top-4 left-4 font-serif text-xs text-white/90 bg-[#242321]/60 backdrop-blur-xs px-2.5 py-1 tracking-widest">
                  {service.number}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#242321] mb-2.5 group-hover:text-[#B79A6A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6761] leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Sub-features list */}
                <div>
                  <ul className="space-y-1 mb-5 border-t border-[#E6D8C8]/60 pt-3 text-[11px] text-[#726E67]">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#B79A6A] rounded-full shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-[#242321] group-hover:text-[#B79A6A] transition-colors">
                    <span>Enquire About This Concept</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding service categories */}
        <div className="mt-12 text-center text-xs text-[#726E67]/80 font-light">
          * Service categories are proposed design disciplines for exploration. Confirm specific project scope and technical parameters directly with Classy Interior.
        </div>
      </div>
    </section>
  );
};
