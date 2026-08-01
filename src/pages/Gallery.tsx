import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Store Interior', 'Medicines & Products', 'Health Equipment', 'Surgical & Care'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-16 md:space-y-20 pb-12">
      <SeoHead
        title="Store Photo Gallery | Shyam Medical Rajabazar Jehanabad"
        description="View photos of Shyam Medical pharmacy store front, organized medicine racks, cold-chain refrigeration, surgical supplies, and health monitors in Jehanabad."
        keywords="Shyam Medical Photos, Pharmacy Gallery Jehanabad, Medical Store Interior Rajabazar"
        canonicalPath="/gallery"
      />

      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16 md:py-20 rounded-b-3xl shadow-xl relative overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-[#0A8F6A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="bg-[#0A8F6A] text-white px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            Store Environment & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white uppercase">
            Photo <span className="text-blue-200">Gallery</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of Shyam Medical's clean, organized, and temperature-controlled pharmacy facility in Rajabazar, Jehanabad.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg cursor-pointer hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white hover:text-emerald-400 transition bg-slate-800/80 rounded-full"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-white hover:text-emerald-400 transition bg-slate-800/80 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-white hover:text-emerald-400 transition bg-slate-800/80 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center text-center space-y-4">
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            <div className="text-white space-y-1">
              <h3 className="text-xl font-bold">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs text-slate-300">{filteredItems[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
