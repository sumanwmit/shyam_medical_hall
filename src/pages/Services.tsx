import React, { useState } from 'react';
import { Pill, Activity, Stethoscope, ShieldAlert, Baby, Zap, ShoppingCart, Check, ArrowRight, Search, Sparkles } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { SERVICES_DATA } from '../data/businessData';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (prefilledMedicine?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Prescription Medicines',
    'OTC Medicines',
    'Health Devices',
    'Medical Equipment',
    'Supplements',
    'Baby Care',
    'Surgical Supplies'
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      <SeoHead
        title="Pharmacy Services & Categories | Shyam Medical Jehanabad"
        description="Explore complete pharmacy services: Prescription refill, OTC medicines, digital blood pressure devices, surgical supplies, baby care, and live stock checker."
        keywords="Shyam Medical Services, Prescription Medicines Jehanabad, Buy BP Monitor Rajabazar, Surgical Bandages Bihar"
        canonicalPath="/services"
      />

      {/* Page Banner */}
      <section className="bg-blue-900 text-white py-16 md:py-20 rounded-b-3xl shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#0A8F6A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="bg-[#0A8F6A] text-white px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            Complete Healthcare Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase">
            Pharmacy <span className="text-blue-200">Services & Categories</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Order authentic prescription drugs, health devices, surgical supplies, and baby products with live stock search and express delivery.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Medicine Stock Checker Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker onOrderClick={(medName) => onOpenWhatsAppModal(medName)} compact={false} />
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Category-wise Healthcare Offerings
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            Filter by specialized medical category to view details and features.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  <Activity className="w-7 h-7" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {service.category}
                </span>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features:</h4>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onOpenWhatsAppModal(`Order for ${service.title}`)}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center space-x-2 transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer for Services */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
          <h3 className="text-2xl font-bold">Don't see the specific medicine you need?</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Contact Shyam Medical team on WhatsApp. We can procure special import or super-specialty medicines within 24 hours.
          </p>
          <button
            onClick={() => onOpenWhatsAppModal('Custom Special Medicine Request')}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold rounded-xl text-xs transition inline-flex items-center space-x-2"
          >
            <span>Send Custom Medicine Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
