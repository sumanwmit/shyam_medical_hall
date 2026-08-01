import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Mobile Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full shadow-xl hover:scale-110 transition duration-300 border border-slate-700/50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="pointer-events-auto p-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-xl shadow-sky-600/30 hover:scale-110 transition duration-300 flex items-center justify-center group"
          aria-label="Call Shyam Medical"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:px-2 text-xs font-bold">
            Call Store
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsAppModal}
          className="pointer-events-auto p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition duration-300 flex items-center justify-center group relative"
          aria-label="WhatsApp Order"
        >
          <MessageSquare className="w-7 h-7 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-ping" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:px-2 text-xs font-bold">
            Order Medicine
          </span>
        </button>
      </div>

      {/* Mobile Sticky CTA Bar at very bottom */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 flex items-center justify-between gap-3">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2.5 px-3 bg-slate-800 text-slate-100 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 border border-slate-700"
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenWhatsAppModal}
          className="flex-1 py-2.5 px-3 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-600/30"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
