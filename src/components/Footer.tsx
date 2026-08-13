import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck, Heart, Cross, Facebook, Instagram, Linkedin, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onOpenWhatsAppModal?: (prefilledMedicine?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsAppModal }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Global Tracking Hook required by specification
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#0A8F6A] text-white flex items-center justify-center font-bold shadow-md">
                <Cross className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight font-display uppercase block">
                  SHYAM <span className="text-[#0A8F6A]">MEDICAL</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-medium tracking-widest block -mt-1">
                  Trusted Healthcare Partner
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Serving Shikshak Colony, Rajabazar, and Jehanabad with 100% genuine certified medicines and healthcare devices.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={BUSINESS_INFO.directionsUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span>›</span> <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span>›</span> <span>About Us & Store History</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span>›</span> <span>Our Pharmacy Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span>›</span> <span>Store Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition flex items-center space-x-1.5">
                  <span>›</span> <span>Contact & Directions</span>
                </Link>
              </li>
            </ul>

            <button
              onClick={() => onOpenWhatsAppModal && onOpenWhatsAppModal()}
              className="mt-4 w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Medicine Order</span>
            </button>
          </div>

          {/* Column 3: Working Hours & Emergency */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3">
              Working Hours
            </h3>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mon - Sun:</span>
                </span>
                <span className="font-semibold text-white">8:00 AM - 10:00 PM</span>
              </div>
              <div className="pt-2 border-t border-slate-700/60 flex items-center space-x-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>24 Hours Emergency Dispatch Available</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Popular Categories:</p>
              <p className="text-[11px] text-slate-400">
                Prescription Refills • Diabetics Care • Blood Pressure Monitors • Baby Food & Diapers • Surgical Bandages
              </p>
            </div>
          </div>

          {/* Column 4: Google Map Embed */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-emerald-500 pl-3">
              Store Location
            </h3>
            <div className="relative w-full h-36 rounded-xl overflow-hidden border border-slate-700/80 group">
              <iframe
                title="Shyam Medical Google Map"
                src={BUSINESS_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter opacity-85 hover:opacity-100 transition duration-300"
              />
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-2.5 py-1 bg-slate-900/90 text-emerald-400 hover:text-white text-[11px] font-semibold rounded-lg shadow-md flex items-center space-x-1 border border-slate-700"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-emerald-400 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-emerald-400 transition">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => setActiveLegalModal('disclaimer')} className="hover:text-emerald-400 transition">
              Medical Disclaimer
            </button>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
            <p className="text-[11px] text-slate-500 flex items-center justify-center md:justify-end space-x-1">
              <span></span>
             <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Privacy, Terms, Disclaimer */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full text-slate-300 text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                {activeLegalModal === 'privacy' && 'Privacy Policy'}
                {activeLegalModal === 'terms' && 'Terms of Service'}
                {activeLegalModal === 'disclaimer' && 'Medical Disclaimer'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-lg"
              >
                Close
              </button>
            </div>
            <div className="space-y-3 leading-relaxed max-h-60 overflow-y-auto pr-2">
              {activeLegalModal === 'privacy' && (
                <p>
                  Shyam Medical respects your privacy. Customer information provided via prescription uploads, WhatsApp orders, or contact forms is strictly used for order fulfillment, local pharmacy dispatch, and customer service. We do not sell or share your personal data with third parties.
                </p>
              )}
              {activeLegalModal === 'terms' && (
                <p>
                  All prescription medicines require a valid doctor's prescription upon delivery or pickup. Prices listed on the stock checker are indicative and subject to batch changes. Orders sent via WhatsApp are verified by our licensed pharmacist prior to final dispatch.
                </p>
              )}
              {activeLegalModal === 'disclaimer' && (
                <p>
                  The information provided on this website, including health tips and medicine stock details, is for educational and informational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare professional.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
