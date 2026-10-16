import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-[#242321]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar: Title, Counter & Close Button */}
      <div
        className="flex items-center justify-between text-white max-w-7xl w-full mx-auto pb-4 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-[0.2em] uppercase text-[#B79A6A] font-medium">
            {item.category}
          </span>
          <span className="text-white/40 text-xs">/</span>
          <span className="text-xs text-white/70 font-mono">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Stage with Next & Prev Controls */}
      <div
        className="relative flex-1 flex items-center justify-center my-3 sm:my-5 max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous image"
          className="cursor-pointer absolute left-0 sm:-left-4 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-xs transition-colors rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="relative max-h-[75vh] w-full flex flex-col items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] w-auto max-w-full object-contain shadow-2xl transition-all duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="cursor-pointer absolute right-0 sm:-right-4 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-xs transition-colors rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Bar: Detailed Caption, Palette & Thumbnail Strip */}
      <div
        className="max-w-4xl w-full mx-auto text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-serif text-xl sm:text-2xl text-[#F7F4EF] mb-1">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-white/75 font-light max-w-2xl mx-auto mb-2">
          {item.description}
        </p>

        {item.paletteNotes && (
          <div className="text-[11px] uppercase tracking-wider text-[#B79A6A]">
            Design Palette: {item.paletteNotes}
          </div>
        )}

        {/* Small thumbnail dots / indicators */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {items.map((it, idx) => (
            <button
              key={it.id}
              onClick={() => onSelectIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-200 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-[#B79A6A]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
