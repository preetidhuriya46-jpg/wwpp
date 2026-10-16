import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Reviews } from './components/Reviews';
import { VisualFeature } from './components/VisualFeature';
import { EnquiryForm } from './components/EnquiryForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenEnquiry = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      // Update the textarea if present
      const textarea = document.getElementById('projectDescription') as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = `Interested in exploring ${serviceTitle}. `;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#242321] relative pb-16 md:pb-0">
      {/* Refined Navigation Bar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Introduction Section */}
        <Introduction onOpenEnquiry={handleOpenEnquiry} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Portfolio / Design Gallery Section */}
        <Gallery />

        {/* Design Process Section */}
        <Process />

        {/* Why Choose Classy Interior Section */}
        <WhyUs />

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Full-Width Visual Feature Section */}
        <VisualFeature onOpenEnquiry={handleOpenEnquiry} />

        {/* Contact and Enquiry Section */}
        <EnquiryForm initialService={selectedService} />

        {/* Studio Location & Map Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Sticky Bottom Action Bar on Mobile Viewports */}
      <MobileActionBar onOpenEnquiry={handleOpenEnquiry} />
    </div>
  );
}
