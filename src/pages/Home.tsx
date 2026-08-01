import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ArrowRight, ShieldCheck, Clock, Award, Truck, CheckCircle2, Star, ChevronRight, HelpCircle, Mail, Cross, Sparkles, Activity } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO, SERVICES_DATA, FEATURED_PRODUCTS, REVIEWS, FAQS, HEALTH_TIPS } from '../data/businessData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface HomeProps {
  onOpenWhatsAppModal: (prefilledMedicine?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      <SeoHead
        title="Shyam Medical | Trusted Pharmacy in Jehanabad, Bihar"
        description="Your trusted medical store for 100% genuine medicines, healthcare products, surgical supplies, and fast WhatsApp order home delivery in Rajabazar, Jehanabad."
        keywords="Shyam Medical, Medical Store Rajabazar, Pharmacy Jehanabad, Buy Genuine Medicines Bihar, Medicine Home Delivery 8969881695"
        canonicalPath="/"
        faqItems={FAQS.slice(0, 4)}
      />

      {/* Hero Banner Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-blue-900 text-white rounded-b-3xl md:rounded-b-[2.5rem] shadow-xl">
        {/* Decorative Blurs & Shapes */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0A8F6A]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 top-10 w-32 h-32 border-4 border-white/10 rounded-full pointer-events-none" />
        <div className="absolute -left-20 top-1/4 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-[#0A8F6A] text-white px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest shadow-sm">
                100% Genuine Medicines Only
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
                Healthcare You Can Rely On.
              </h1>

              <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Providing authentic medicines, baby care, health devices, and surgical supplies in Rajabazar, Jehanabad with trusted home delivery.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="w-full sm:w-auto bg-[#0A8F6A] hover:bg-[#087a5a] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center space-x-2.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </button>

                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur text-white hover:bg-white/20 border border-white/20 px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Locate Store</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur text-white hover:bg-white/20 border border-white/20 px-6 py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                  <span>Call: {BUSINESS_INFO.displayPhone}</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-6 border-t border-blue-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-blue-100 font-medium">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#0A8F6A] shrink-0" />
                  <span>100% Genuine Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-sky-300 shrink-0" />
                  <span>Fast Local Delivery</span>
                </div>
                <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                  <Clock className="w-5 h-5 text-teal-300 shrink-0" />
                  <span>Open 8 AM - 10 PM</span>
                </div>
              </div>
            </div>

            {/* Hero Right Quick Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 dark:text-white">Store Quick Info</h3>
                    <p className="text-xs text-slate-500">Rajabazar, Jehanabad Branch</p>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-[#0A8F6A] rounded-full text-xs font-bold uppercase tracking-wider">
                    Open Now
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
                    <span className="text-slate-500 font-medium">Store Address:</span>
                    <p className="text-slate-900 dark:text-slate-100 font-semibold">{BUSINESS_INFO.address.full}</p>
                    <p className="text-[#0A8F6A] text-[11px] mt-1 font-medium">Landmark: {BUSINESS_INFO.address.landmark}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
                    <span className="text-slate-500 font-medium">Contact Hotline & WhatsApp:</span>
                    <p className="text-[#0A8F6A] font-extrabold text-base">{BUSINESS_INFO.displayPhone}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 font-medium">Store Hours:</span>
                      <p className="text-slate-900 dark:text-slate-100 font-semibold">Mon - Sun: 8:00 AM - 10:00 PM</p>
                    </div>
                    <Clock className="w-6 h-6 text-blue-900 dark:text-sky-400" />
                  </div>
                </div>

                <button
                  onClick={() => onOpenWhatsAppModal()}
                  className="w-full py-3.5 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center space-x-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Upload Prescription on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Short About Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800"
                alt="Shyam Medical Store Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md text-white border border-white/10">
                <p className="text-xs font-bold text-emerald-400">SHYAM MEDICAL STORE</p>
                <p className="text-sm font-medium text-slate-200">Shikshak Colony, Arwal Road, Rajabazar, Jehanabad</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>About Shyam Medical</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Your Most Dependable Pharmacy Partner in Jehanabad
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              At Shyam Medical, we are committed to upholding the highest standards of pharmaceutical care. Located conveniently on Arwal Road in Rajabazar, Jehanabad, we offer a comprehensive inventory of authentic medicines, life-saving drugs, surgical equipment, and daily healthcare essentials.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200 font-medium">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>100% Certified authentic medicines directly sourced from manufacturers</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Dedicated cold-chain storage for insulin, vaccines, and eye drops</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Qualified & friendly pharmacist guidance on dosage & precautions</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-sm hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-slate-900 transition shadow-md"
              >
                <span>Read Full About Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Medicine Stock Checker Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker onOrderClick={(name) => onOpenWhatsAppModal(name)} compact={true} />
      </section>

      {/* Featured Services Preview (Max 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block">
            Comprehensive Pharmacy Care
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Our Key Healthcare Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            From daily prescription refills to surgical equipment, we provide complete medical care solutions under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onOpenWhatsAppModal(`Inquiry about ${service.title}`)}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Order This Service
                </button>
                <Link
                  to="/services"
                  className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-600/20 transition"
          >
            <span>View All Pharmacy Services & Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 my-12 shadow-xl">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="bg-[#0A8F6A] text-white px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            Our Standard of Care
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why Choose Shyam Medical?
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            We prioritize accuracy, patient safety, authentic sourcing, and prompt delivery above everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_INFO.usps.map((usp, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/10 space-y-3 hover:border-[#0A8F6A] transition">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-lg">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-white">{usp}</h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Guaranteed quality control with strict temperature regulation and authentic batch tracking for all orders in Jehanabad.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Popular Stock
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Featured Health Products & Monitors
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
          >
            <span>Browse Full Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 shadow-lg hover:shadow-2xl transition group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {prod.badge && (
                    <span className="absolute top-2 left-2 px-2.5 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded-md uppercase">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
                  {prod.category} • {prod.brand}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 transition line-clamp-2">
                  {prod.name}
                </h3>

                <div className="flex items-center space-x-1 mt-2 text-amber-500 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{prod.rating} / 5.0</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-base font-extrabold text-slate-900 dark:text-white">₹{prod.offerPrice}</span>
                  <span className="text-xs text-slate-400 line-through ml-1.5">₹{prod.mrp}</span>
                </div>

                <button
                  onClick={() => onOpenWhatsAppModal(prod.name)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Customer Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Trusted by Hundreds of Local Families
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Verified experiences from residents across Rajabazar, Shikshak Colony & Jehanabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-3">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{rev.author}</h4>
                    <span className="text-[11px] text-slate-400">{rev.location}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 font-semibold">
                    Verified Customer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 4).map((faq) => (
            <div key={faq.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-start space-x-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/contact"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Have more questions? Contact our store pharmacist directly ›
          </Link>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Health Awareness
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Pharmacy & Wellness Advice
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HEALTH_TIPS.map((tip) => (
            <div key={tip.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 shadow-lg space-y-3">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">{tip.category} • {tip.readTime}</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2">{tip.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{tip.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-blue-900 text-white p-8 md:p-12 shadow-xl overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#0A8F6A]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="bg-[#0A8F6A] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest inline-block">
              Fast Medicine Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Need Medicines Urgently in Jehanabad?
            </h2>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              Send your doctor prescription on WhatsApp or call our store hotline for express dispatch and local home delivery.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="px-6 py-3.5 bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold rounded-xl shadow-md transition flex items-center space-x-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order Now</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-3.5 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition flex items-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4 text-sky-300" />
                <span>Call Store Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl text-center space-y-4">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Subscribe for Monthly Refill Alerts & Health Offers
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Get timely reminders for your chronic medication refills, healthcare tips, and special discounts.
          </p>

          {newsletterSuccess ? (
            <p className="text-emerald-600 font-bold text-sm">
              Thank you! You are now subscribed for Shyam Medical refill updates.
            </p>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
