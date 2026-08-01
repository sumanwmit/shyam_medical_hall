import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';

// Lazy load page components as required by specification
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Helper Component to reset scroll position on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Loading fallback spinner
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Loading Shyam Medical...</span>
  </div>
);

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [prefilledMedicineName, setPrefilledMedicineName] = useState('');

  const handleOpenWhatsAppModal = (prefilledMedicine?: string) => {
    setPrefilledMedicineName(prefilledMedicine || '');
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setIsWhatsAppModalOpen(false);
    setPrefilledMedicineName('');
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans flex flex-col justify-between transition-colors">
          <div>
            <Navbar onOpenWhatsAppModal={handleOpenWhatsAppModal} />
            
            <main>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                  <Route path="/about" element={<About onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                  <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />} />
                  <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                </Routes>
              </Suspense>
            </main>
          </div>

          <Footer onOpenWhatsAppModal={handleOpenWhatsAppModal} />

          {/* Floating Actions (WhatsApp, Call, Back To Top) */}
          <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

          {/* WhatsApp Order Modal */}
          <WhatsAppOrderModal
            isOpen={isWhatsAppModalOpen}
            onClose={handleCloseWhatsAppModal}
            prefilledMedicine={prefilledMedicineName}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}
