import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';

interface MobileActionBarProps {
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEnquiry }) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#242321]/95 backdrop-blur-md border-t border-[#B79A6A]/40 px-4 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Action */}
        <a
          href={`tel:${BUSINESS_DATA.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F7F4EF] text-[#242321] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs active:bg-[#E6D8C8]"
        >
          <Phone className="w-3.5 h-3.5 text-[#B79A6A]" />
          <span>Call Studio</span>
        </a>

        {/* WhatsApp Enquiry Action */}
        <button
          type="button"
          onClick={onOpenEnquiry}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#B79A6A] text-[#242321] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-xs active:bg-[#A08253] cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>
      </div>
    </aside>
  );
};
