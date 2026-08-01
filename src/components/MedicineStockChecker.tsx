import React, { useState, useMemo } from 'react';
import { Search, AlertCircle, CheckCircle, XCircle, RefreshCw, ShoppingCart, ShieldAlert, Filter, Sparkles } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick?: (medicineName: string) => void;
  compact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderClick,
  compact = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Load inventory from mock JSON data (structured for easy future API fetch replacement)
  const medicines: MedicineItem[] = medicineStockData as MedicineItem[];

  const categories = useMemo(() => {
    const cats = new Set(medicines.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter(med => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300">
            <CheckCircle className="w-3.5 h-3.5 mr-1" /> Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
            <AlertCircle className="w-3.5 h-3.5 mr-1" /> Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">
            <XCircle className="w-3.5 h-3.5 mr-1" /> Out of Stock
          </span>
        );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 md:p-8">
      {/* Title & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Live Inventory Tool</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Medicine Stock Checker
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Search live availability of genuine medicines, healthcare devices & surgical supplies at Shyam Medical.
          </p>
        </div>

        <button
          onClick={() => {
            setSearchTerm('');
            setSelectedCategory('All');
            setSelectedStatus('All');
          }}
          className="self-start md:self-auto inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-6 relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search medicine name, brand (e.g. Paracetamol, Omron, Pan-40, Dolo)..."
            className="w-full pl-12 pr-28 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />
          <button
            type="button"
            className="absolute right-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition shadow-sm"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      {!compact && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">Status:</span>
            {['All', 'Available', 'Limited Stock', 'Out of Stock'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                  selectedStatus === status
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-500/50 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Brand: <span className="font-semibold text-slate-700 dark:text-slate-300">{item.brand}</span> • {item.dosage}
                    </p>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                  {item.description}
                </p>

                {item.requiresPrescription && (
                  <div className="mt-2 inline-flex items-center text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded">
                    <ShieldAlert className="w-3 h-3 mr-1" /> Prescription Required
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">
                      ₹{item.discountPrice || item.mrp}
                    </span>
                    {item.discountPrice && (
                      <span className="text-xs text-slate-400 line-through">₹{item.mrp}</span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Expiry: {item.expiry}
                  </span>
                </div>

                <button
                  onClick={() => onOrderClick && onOrderClick(item.name)}
                  disabled={item.status === 'Out of Stock'}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-800/30 rounded-xl">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">No Medicines Found</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
              We couldn't find any medicine matching "{searchTerm}". Please check spelling or contact us directly on WhatsApp.
            </p>
            <button
              onClick={() => onOrderClick && onOrderClick(searchTerm || 'Custom Medicine Request')}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition"
            >
              Request This Medicine on WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
