import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F5EFE7] border-t border-[#E6D8C8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Details Column */}
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.22em] uppercase text-[#B79A6A] font-medium block mb-3">
              KANPUR STUDIO LOCATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-[1.15] mb-6">
              Visit Classy Interior
            </h2>
            <p className="text-sm sm:text-base text-[#6B6761] font-light leading-relaxed mb-8">
              Conveniently located in Kalyanpur, Kanpur. Connect with us to discuss architectural layout possibilities, curated material samples, and interior finishes.
            </p>

            {/* Address & Hours List */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F7F4EF] border border-[#E6D8C8] text-[#B79A6A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#242321] font-medium mb-0.5">
                    Physical Address
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3A36] leading-relaxed">
                    {BUSINESS_DATA.addressLine1},<br />
                    {BUSINESS_DATA.addressLine2}, {BUSINESS_DATA.country}
                  </p>
                  <p className="text-xs text-[#726E67] font-mono mt-1">
                    Plus Code: {BUSINESS_DATA.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F7F4EF] border border-[#E6D8C8] text-[#B79A6A] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#242321] font-medium mb-0.5">
                    Phone Inquiries
                  </h3>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-xs sm:text-sm text-[#242321] hover:text-[#B79A6A] transition-colors"
                  >
                    {BUSINESS_DATA.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#726E67] mt-0.5">
                    Direct call or WhatsApp consultations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F7F4EF] border border-[#E6D8C8] text-[#B79A6A] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#242321] font-medium mb-0.5">
                    Studio Availability
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D3A36] leading-relaxed">
                    {BUSINESS_DATA.hoursNote}
                  </p>
                  <p className="text-[11px] text-[#726E67] mt-0.5">
                    Please call ahead to confirm on-site consultation timing.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_DATA.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 bg-[#242321] text-[#F7F4EF] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#B79A6A] transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#B79A6A]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_DATA.phoneRaw}`}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 bg-[#F7F4EF] border border-[#242321] text-[#242321] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#242321] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B79A6A]" />
                <span>Call Classy Interior</span>
              </a>
            </div>
          </div>

          {/* Interactive Styled Map Viewport */}
          <div className="lg:col-span-6">
            <div className="bg-[#F7F4EF] border border-[#E6D8C8] p-4 sm:p-6 shadow-md">
              <div className="relative h-80 sm:h-96 w-full bg-[#EAE4DC] overflow-hidden border border-[#E6D8C8]/80 flex flex-col items-center justify-center p-6 text-center">
                {/* Architectural Map Grid Graphic */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#242321 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Stylized Compass Lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                  <div className="w-72 h-72 rounded-full border border-[#242321]" />
                  <div className="w-96 h-96 rounded-full border border-[#242321]" />
                </div>

                {/* Pinned Marker Card */}
                <div className="relative z-10 bg-white border border-[#B79A6A] p-6 max-w-sm shadow-xl animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#242321] text-[#B79A6A] flex items-center justify-center mx-auto mb-3 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-[#242321] font-medium mb-1">
                    Classy Interior (क्लासी इंटीरियर)
                  </h4>
                  <p className="text-xs text-[#6B6761] leading-relaxed mb-4">
                    G-680, Awas Vikas, No. 1, Kalyanpur, Kanpur, Uttar Pradesh 208017
                  </p>
                  <a
                    href={BUSINESS_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#B79A6A] font-semibold hover:text-[#242321] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bottom Coordinates Indicator */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#726E67] font-mono">
                  <span>Plus Code: F7W3+2P</span>
                  <span>Kanpur · 208017</span>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#726E67] pt-2">
                <span>Verified Kalyanpur Business Address</span>
                <a
                  href={BUSINESS_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#242321] underline hover:text-[#B79A6A]"
                >
                  Direct Route Navigation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
