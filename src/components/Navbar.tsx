import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageSquare, Sun, Moon, Menu, X, Search, Cross, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenWhatsAppModal: (prefilledMedicine?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Emergency & Info Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Open 7 Days: {BUSINESS_INFO.hours.weekdays}</span>
            </span>
            <span className="hidden md:flex items-center space-x-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Shikshak Colony, Rajabazar, Jehanabad</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-1 text-slate-200 hover:text-emerald-400 transition font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call: {BUSINESS_INFO.displayPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 hidden sm:inline">24/7 Emergency Dispatch</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className="glass-nav border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#0A8F6A] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition">
                <Cross className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-blue-900 dark:text-white leading-tight uppercase tracking-tight block font-display">
                  SHYAM <span className="text-[#0A8F6A]">MEDICAL</span>
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase block -mt-0.5">
                  Trusted Healthcare Partner • Jehanabad
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition ${
                      isActive
                        ? 'text-[#0A8F6A] font-bold border-b-2 border-[#0A8F6A] pb-1'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-900 dark:hover:text-[#0A8F6A]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              {/* Call / WhatsApp Button Pill */}
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center space-x-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold transition ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Medicine Order</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white font-bold flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-700"
              >
                <Phone className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                <span>Call Store Now</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
