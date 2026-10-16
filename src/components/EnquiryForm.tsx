import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';

interface EnquiryFormProps {
  initialService?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialService }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [propertyType, setPropertyType] = useState('Home');
  const [areaLocation, setAreaLocation] = useState('');
  const [projectDescription, setProjectDescription] = useState(
    initialService ? `Interested in discussing ${initialService}. ` : ''
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = phoneNumber.replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Please enter your phone number';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Build the pre-filled enquiry text safely
    const message = [
      `Hello Classy Interior!`,
      ``,
      `I would like to discuss an interior design project in Kanpur:`,
      `• Name: ${fullName.trim()}`,
      `• Phone: ${phoneNumber.trim()}`,
      `• Property Type: ${propertyType}`,
      areaLocation.trim() ? `• Location/Area: ${areaLocation.trim()}` : null,
      projectDescription.trim() ? `• Requirements: ${projectDescription.trim()}` : null,
      ``,
      `Looking forward to hearing about your design suggestions and current availability.`,
    ]
      .filter((line) => line !== null)
      .join('\n');

    setGeneratedMessage(message);
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowConfirmation(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-[#F7F4EF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Contact Card & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs tracking-[0.22em] uppercase text-[#B79A6A] font-medium block mb-3">
                LET'S TALK ABOUT YOUR SPACE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] tracking-tight leading-[1.15] mb-5">
                Start Your Design Dialogue
              </h2>
              <p className="text-sm sm:text-base text-[#6B6761] font-light leading-relaxed mb-8">
                Have a design idea in mind? Get in touch to discuss your requirements and explore the next steps with Classy Interior in Kanpur.
              </p>

              {/* Verified Business Details Box */}
              <div className="bg-[#F5EFE7] border border-[#E6D8C8] p-6 sm:p-7 space-y-5 mb-8">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-medium block mb-1">
                    STUDIO LOCATION
                  </span>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B79A6A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif text-base text-[#242321] font-medium">
                        {BUSINESS_DATA.name} <span className="text-xs font-sans text-[#726E67]">({BUSINESS_DATA.hindiName})</span>
                      </p>
                      <p className="text-xs text-[#6B6761] leading-relaxed mt-0.5">
                        {BUSINESS_DATA.addressLine1},<br />
                        {BUSINESS_DATA.addressLine2}, {BUSINESS_DATA.country}
                      </p>
                      <p className="text-[11px] text-[#726E67] font-mono mt-1">
                        Plus Code: {BUSINESS_DATA.plusCode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6D8C8]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-medium block mb-1">
                    DIRECT PHONE &amp; WHATSAPP
                  </span>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#B79A6A] shrink-0" />
                    <a
                      href={`tel:${BUSINESS_DATA.phoneRaw}`}
                      className="font-serif text-lg text-[#242321] hover:text-[#B79A6A] transition-colors"
                    >
                      {BUSINESS_DATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6D8C8]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#B79A6A] font-medium block mb-1">
                    VISIT AVAILABILITY
                  </span>
                  <p className="text-xs text-[#726E67] leading-relaxed">
                    {BUSINESS_DATA.hoursNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick note on WhatsApp privacy & no servers */}
            <div className="text-[11px] text-[#726E67]/90 font-light flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B79A6A] shrink-0" />
              <span>Direct handoff to WhatsApp. No confidential data stored on 3rd-party servers.</span>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E6D8C8] p-7 sm:p-10 shadow-xs">
              <h3 className="font-serif text-2xl text-[#242321] mb-2">
                Project Enquiry Details
              </h3>
              <p className="text-xs text-[#726E67] font-light mb-8">
                Fill in your project essentials below. We will format a clean WhatsApp greeting so you can review before sending.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#242321] font-medium mb-2">
                    Full Name <span className="text-[#B79A6A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 bg-[#F7F4EF] border text-sm text-[#242321] placeholder-[#726E67]/60 focus:outline-none focus:border-[#B79A6A] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[#E6D8C8]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs uppercase tracking-wider text-[#242321] font-medium mb-2">
                    Phone / Mobile Number <span className="text-[#B79A6A]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="e.g. 098765 43210"
                    className={`w-full px-4 py-3 bg-[#F7F4EF] border text-sm text-[#242321] placeholder-[#726E67]/60 focus:outline-none focus:border-[#B79A6A] transition-colors ${
                      errors.phoneNumber ? 'border-red-500' : 'border-[#E6D8C8]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Property Type & Location Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="propertyType" className="block text-xs uppercase tracking-wider text-[#242321] font-medium mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E6D8C8] text-sm text-[#242321] focus:outline-none focus:border-[#B79A6A] transition-colors"
                    >
                      <option value="Home">Home / Villa</option>
                      <option value="Apartment">Apartment / Flat</option>
                      <option value="Office">Office / Workplace</option>
                      <option value="Commercial Space">Commercial / Retail Space</option>
                      <option value="Other">Other Interior Project</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="areaLocation" className="block text-xs uppercase tracking-wider text-[#242321] font-medium mb-2">
                      Area / Location in Kanpur
                    </label>
                    <input
                      type="text"
                      id="areaLocation"
                      value={areaLocation}
                      onChange={(e) => setAreaLocation(e.target.value)}
                      placeholder="e.g. Kalyanpur, Civil Lines"
                      className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E6D8C8] text-sm text-[#242321] placeholder-[#726E67]/60 focus:outline-none focus:border-[#B79A6A] transition-colors"
                    />
                  </div>
                </div>

                {/* Brief Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-xs uppercase tracking-wider text-[#242321] font-medium mb-2">
                    Brief Project Description
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={4}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Tell us about your spaces, style preferences, or any specific rooms you want to design..."
                    className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E6D8C8] text-sm text-[#242321] placeholder-[#726E67]/60 focus:outline-none focus:border-[#B79A6A] transition-colors resize-y"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#242321] text-[#F7F4EF] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-3 hover:bg-[#B79A6A] transition-colors cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#B79A6A]" />
                  <span>Send Enquiry on WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-center text-[#726E67] font-light">
                  WhatsApp will open with your pre-formatted message addressed to 063931 26578. You will have full opportunity to review and edit before sending.
                </p>
              </form>

              {/* Confirmation / Fallback Modal / Card */}
              {showConfirmation && (
                <div className="mt-8 p-5 bg-[#F5EFE7] border border-[#B79A6A]/60">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B79A6A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base text-[#242321] font-medium mb-1">
                        WhatsApp Link Opened
                      </h4>
                      <p className="text-xs text-[#6B6761] leading-relaxed mb-3">
                        If WhatsApp did not automatically open on your device, you can reach Classy Interior directly by phone or copy your message:
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={`tel:${BUSINESS_DATA.phoneRaw}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#242321] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#B79A6A] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call 063931 26578</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(generatedMessage);
                            alert('Message copied to clipboard!');
                          }}
                          className="px-4 py-2 border border-[#242321] text-[#242321] text-xs uppercase tracking-wider font-medium hover:bg-white transition-colors"
                        >
                          Copy Message Text
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
