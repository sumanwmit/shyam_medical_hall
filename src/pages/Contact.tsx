import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO } from '../data/businessData';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const formattedMessage = `Hello ${BUSINESS_INFO.name},

*CONTACT FORM INQUIRY*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim() || 'N/A'}
📝 *Message:* ${formData.message.trim()}
━━━━━━━━━━━━━━━━━━`;

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encoded}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="space-y-16 md:space-y-20 pb-12">
      <SeoHead
        title="Contact Us & Store Map | Shyam Medical Jehanabad"
        description="Visit Shyam Medical at Shikshak Colony, Arwal Road, Rajabazar, Jehanabad. Call hotline 8969881695 or send WhatsApp prescription for express home delivery."
        keywords="Shyam Medical Address, Contact Number Shyam Medical Jehanabad, Medical Store Location Rajabazar"
        canonicalPath="/contact"
      />

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 md:py-20 rounded-b-3xl shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#0A8F6A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="bg-[#0A8F6A] text-white px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase">
            Contact & <span className="text-blue-200">Store Location</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We are here to assist with your medicine requirements, emergency drug dispatch, and healthcare device inquiries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Store Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {BUSINESS_INFO.address.full}
            </p>
            <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              Landmark: {BUSINESS_INFO.address.landmark}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Call & Hotline</h3>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-base font-extrabold text-sky-600 dark:text-sky-400 block hover:underline">
              {BUSINESS_INFO.displayPhone}
            </a>
            <p className="text-xs text-slate-500">24/7 Emergency Medicine Dispatch on Call</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">WhatsApp Order</h3>
            <button
              onClick={onOpenWhatsAppModal}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline block text-left"
            >
              Click to Open Order Form ›
            </button>
            <p className="text-xs text-slate-500">Send prescription photos directly</p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Store Hours</h3>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Monday - Sunday: 8:00 AM - 10:00 PM
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
              Open all 365 days of the year
            </p>
          </div>

        </div>
      </section>

      {/* Main Grid: Contact Form & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill in the form below to connect directly with Shyam Medical on WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Thank You!</h3>
                <p className="text-xs text-slate-500">Your message has been sent to Shyam Medical team on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8969881695"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                    Your Message / Medicine Inquiry
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the medicines or equipment you are looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 flex items-center justify-center space-x-2 transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="py-3.5 px-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition border border-slate-200 dark:border-slate-700"
                  >
                    <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>Call Store</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Google Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 border border-slate-100 dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between px-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Google Map Location</h3>
                  <p className="text-xs text-slate-500">Rajabazar, Jehanabad, Bihar 804408</p>
                </div>
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition flex items-center space-x-1.5 shadow-md"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <iframe
                  title="Shyam Medical Interactive Map"
                  src={BUSINESS_INFO.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Nearby Landmarks & Directions Info */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Nearby Landmarks & Navigation:</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li>• Located right at Arwal Road Crossing, Rajabazar</li>
                <li>• Near Shikshak Colony Main Entrance Gate</li>
                <li>• Easy parking available for two-wheelers & four-wheelers</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
