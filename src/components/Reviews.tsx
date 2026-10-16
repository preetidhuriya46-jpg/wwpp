import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { REVIEWS, BUSINESS_DATA } from '../data/content';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 lg:py-36 bg-[#F5EFE7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B79A6A] font-medium block mb-3">
            VERIFIED REPUTATION IN KANPUR
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-tight mb-5">
            Kind Words From Customers
          </h2>

          {/* Prominent Google Rating Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 py-4 px-6 bg-[#F7F4EF] border border-[#E6D8C8] shadow-xs mt-2">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#242321] tabular-nums">
                {BUSINESS_DATA.rating}
              </span>
              <span className="text-xs text-[#726E67]">/ 5.0</span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1" aria-label="Rated 4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#B79A6A] text-[#B79A6A]"
                />
              ))}
            </div>

            <div className="text-xs text-[#242321] tracking-wider uppercase font-medium">
              Based on <span className="font-semibold tabular-nums">{BUSINESS_DATA.totalReviews} Google Reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Authentic Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#F7F4EF] border border-[#E6D8C8] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#B79A6A]/80"
            >
              <div>
                {/* Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-5">
                  <Quote className="w-6 h-6 text-[#B79A6A]/60" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#B79A6A] text-[#B79A6A]"
                      />
                    ))}
                  </div>
                </div>

                {/* Exact Verified Quote */}
                <p className="font-serif text-lg sm:text-xl text-[#242321] italic leading-snug mb-6">
                  “{review.quote}”
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E6D8C8]/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#3D3A36] font-medium tracking-wide">
                    {review.source}
                  </span>
                  <span className="text-[#B79A6A] text-[11px] font-medium">
                    Verified
                  </span>
                </div>
                <div className="text-[11px] text-[#726E67] font-light mt-1">
                  Theme: {review.theme}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Themes Summary (Clean Unboxed Text with Separators) & Google Reviews Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#E6D8C8]">
          <div className="flex items-center flex-wrap gap-2 text-xs text-[#726E67]">
            <span className="font-medium text-[#242321]">Common Customer Highlights:</span>
            <span>Luxury Interior Design</span>
            <span aria-hidden="true" className="text-[#B79A6A]">·</span>
            <span>Positive Experiences</span>
            <span aria-hidden="true" className="text-[#B79A6A]">·</span>
            <span>Warm Hospitality</span>
          </div>

          <a
            href={BUSINESS_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-[#242321] text-[#F7F4EF] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#B79A6A] transition-colors"
          >
            <span>View Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
