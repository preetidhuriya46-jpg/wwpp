import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';
import { Eye, Compass } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Living Rooms',
  'Bedrooms',
  'Kitchens',
  'Modern Interiors',
  'Commercial Spaces',
] as const;

type CategoryFilter = typeof CATEGORIES[number];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleSelectIndex = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 lg:py-36 bg-[#F7F4EF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs tracking-[0.22em] uppercase text-[#B79A6A] font-medium block mb-3">
            PORTFOLIO &amp; DESIGN GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-tight mb-4">
            Inspired Spaces
          </h2>
          <p className="text-base sm:text-lg text-[#6B6761] font-light">
            A curated look at contemporary interior design ideas.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Filter Controls per Anti-Slop Guidelines) */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-12 sm:mb-16">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#242321] text-[#F7F4EF] shadow-xs'
                    : 'bg-[#E6D8C8]/40 text-[#242321]/80 hover:bg-[#E6D8C8] hover:text-[#242321]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group cursor-pointer bg-white border border-[#E6D8C8] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#B79A6A]/80"
            >
              {/* Image Frame with Subtle Zoom */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#242321]/5">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-xs text-[#242321] text-xs uppercase tracking-widest font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Concept</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-[#242321]/75 backdrop-blur-xs text-white text-[10px] tracking-wider uppercase px-2.5 py-1">
                  {item.category}
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#242321] mb-2 group-hover:text-[#B79A6A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#726E67] font-light leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.paletteNotes && (
                  <div className="pt-3 border-t border-[#E6D8C8]/60 flex items-center justify-between text-[11px] text-[#726E67]">
                    <span>{item.paletteNotes}</span>
                    <Compass className="w-3.5 h-3.5 text-[#B79A6A]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Guidance Footer Note */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-[#F5EFE7] border border-[#E6D8C8] text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[#726E67] font-light leading-relaxed">
            <strong className="font-medium text-[#242321]">Curated Design Notice:</strong> These imagery examples are presented as contemporary aesthetic inspiration to showcase spatial design possibilities. Authentic photographs of completed Classy Interior client commissions in Kanpur can be easily integrated as our portfolio grows.
          </p>
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={handleSelectIndex}
      />
    </section>
  );
};
