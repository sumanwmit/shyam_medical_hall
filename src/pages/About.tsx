import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Eye, Target, CheckCircle2, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { BUSINESS_INFO, TIMELINE } from '../data/businessData';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      <SeoHead
        title="About Us | Shyam Medical Pharmacy Jehanabad"
        description="Learn about Shyam Medical's journey, mission, vision, licensed pharmacist team, and commitment to authentic healthcare in Rajabazar, Jehanabad, Bihar."
        keywords="About Shyam Medical, History Shyam Medical Jehanabad, Genuine Pharmacy Bihar, Pharmacist Rajabazar"
        canonicalPath="/about"
      />

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 md:py-24 rounded-b-3xl shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#0A8F6A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="bg-[#0A8F6A] text-white px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            Our Legacy of Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase">
            About <span className="text-blue-200">SHYAM MEDICAL</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing authentic medicines, compassionate patient counseling, and reliable medical supplies to the people of Jehanabad and surrounding regions.
          </p>
        </div>
      </section>

      {/* Business Story & Store Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Building Trust Through Genuine Medicines
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Founded in Rajabazar, Jehanabad, Shyam Medical was established with a singular vision: to eliminate counterfeit medicines and ensure every household in Shikshak Colony and Arwal Road has seamless access to genuine, government-certified pharmaceutical products.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Over the years, we have expanded our store facilities to include specialized medical refrigeration for cold-chain medications (such as insulin, vaccines, and hormone therapies), digital blood pressure and glucose monitor testing counters, and high-volume surgical supply distributions.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>100% Quality Sourcing Guarantee</span>
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                Every tablet, syrup, or medical device on our shelves is procured directly from authorized state distributors of leading pharmaceutical conglomerates including Cipla, Sun Pharma, Mankind, Alkem, Micro Labs, and GSK.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600"
                  alt="Shyam Medical Front Store"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600"
                  alt="Shyam Medical Shelves"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg aspect-2/1">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                  alt="Shyam Medical Health Monitors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To deliver 100% authentic medicines and essential medical equipment promptly at reasonable prices, backed by personal pharmacist guidance, WhatsApp order convenience, and express local home delivery across Jehanabad.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To be the most trusted, patient-centric retail and digital pharmacy in Bihar, setting a benchmark for medication safety, stock transparency, and compassionate community care.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Guiding Values
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Every interaction at Shyam Medical is governed by five core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-2">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Authenticity</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Zero tolerance for counterfeit or non-certified drug batches.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-2">
              <HeartHandshake className="w-8 h-8 text-sky-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Empathy & Care</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Patient needs and health outcomes are put above all else.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-2">
              <Clock className="w-8 h-8 text-amber-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Prompt Dispatch</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Fast delivery for emergency prescription refills.</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-md space-y-2">
              <Users className="w-8 h-8 text-teal-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Community Trust</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Long-standing relationship with local families and physicians.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner & Pharmacist Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
              Lead Pharmacist Statement
            </span>
            <blockquote className="text-lg md:text-2xl font-serif italic text-slate-200 leading-relaxed">
              "A pharmacy is not merely a retail store; it is a vital pillar of public health. At Shyam Medical, we ensure that every prescription is double-checked for correctness, every temperature-sensitive drug is preserved properly, and every patient receives honest counsel."
            </blockquote>
            <div>
              <h4 className="text-base font-bold text-white">Chief Pharmacist & Store Management</h4>
              <p className="text-xs text-emerald-400">SHYAM MEDICAL, Rajabazar, Jehanabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Business Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Journey & Growth
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            Milestones in serving the healthcare needs of Jehanabad.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-32 space-y-8">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900" />
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-2xl mx-auto px-4">
        <button
          onClick={onOpenWhatsAppModal}
          className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-600/30 text-base transition transform hover:-translate-y-1 inline-flex items-center space-x-2"
        >
          <span>Order Medicines via WhatsApp</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
};
