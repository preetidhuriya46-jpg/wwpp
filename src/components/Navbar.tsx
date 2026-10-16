import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EF]/95 backdrop-blur-md shadow-xs border-b border-[#E6D8C8]/70 py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Element) */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className={`font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase font-medium whitespace-nowrap shrink-0 transition-colors ${
            isScrolled ? 'text-[#242321]' : 'text-white'
          }`}
        >
          CLASSY INTERIOR
        </a>

        {/* Zone 2: 4-5 Navigation Links (Single-Line, Whitespace-Nowrap) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-[0.16em] font-medium"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative group ${
                isScrolled
                  ? 'text-[#242321]/80 hover:text-[#B79A6A]'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B79A6A] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEnquiry}
            className={`cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 whitespace-nowrap shrink-0 ${
              isScrolled
                ? 'bg-[#242321] text-[#F7F4EF] hover:bg-[#B79A6A]'
                : 'bg-white/95 text-[#242321] hover:bg-[#B79A6A] hover:text-white'
            }`}
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className={`md:hidden p-2 rounded-sm transition-colors ${
            isScrolled ? 'text-[#242321]' : 'text-white'
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F4EF] border-b border-[#E6D8C8] px-6 py-6 shadow-xl text-[#242321] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-medium">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-serif tracking-wide py-1 text-[#242321] hover:text-[#B79A6A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E6D8C8]/60 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 bg-[#242321] text-[#F7F4EF] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 hover:bg-[#B79A6A] transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="tel:06393126578"
                className="w-full py-2.5 text-center text-xs tracking-wider text-[#726E67] hover:text-[#242321]"
              >
                Direct Call: 063931 26578
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
