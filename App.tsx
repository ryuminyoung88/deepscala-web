
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import PortfolioSection from './components/PortfolioSection';
import EcommerceSection from './components/EcommerceSection';
import ShopifyDesignSection from './components/ShopifyDesignSection';
import AIEcommerceSection from './components/AIEcommerceSection';
import FintechSection from './components/FintechSection';
import GrowthAutomationSection from './components/GrowthAutomationSection';
import AICopywriter from './components/AICopywriter';
import FinalManifesto from './components/FinalManifesto';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-1000">
            <Hero />
            <ProfileSection />
            <PortfolioSection />
            <EcommerceSection />
            <ShopifyDesignSection />
            <AIEcommerceSection />
            <FintechSection />
            <GrowthAutomationSection />
            <AICopywriter />
            <FinalManifesto />
          </div>
        );
      case 'services':
        return (
          <div className="animate-in slide-in-from-right-10 fade-in duration-700">
            <ServicesPage />
          </div>
        );
      case 'contact':
        return (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700">
            <ContactPage />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#010102] text-white selection:bg-cyan-500 selection:text-black relative">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="relative z-10">
        {renderContent()}
      </main>

      {/* 하단 시스템 상태바 */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none px-6 py-4 flex justify-between items-end">
        <div className="bg-[#050508]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-6 pointer-events-auto shadow-2xl">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">System_Sync</span>
            <div className="flex gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`w-1 h-3 ${i < 10 ? 'bg-cyan-500' : 'bg-gray-800'} animate-pulse`}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#050508]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-4 pointer-events-auto shadow-2xl">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
          <span className="font-mono text-[9px] text-white tracking-[0.2em] uppercase font-bold">
            DEEPSCALA_{currentPage.toUpperCase()}
          </span>
        </div>
      </div>

      <footer className="relative pt-32 pb-20 px-6 bg-[#010102] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
          <h3 className="text-5xl font-black italic text-white cursor-pointer hover:text-cyan-400 transition-colors" onClick={() => setCurrentPage('home')}>DEEPSCALA</h3>
          <div className="flex justify-center gap-12 font-mono text-[11px] text-gray-500 uppercase tracking-[0.3em]">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-cyan-400 transition-colors ${currentPage === 'home' ? 'text-cyan-400 font-bold' : ''}`}>Home</button>
            <button onClick={() => setCurrentPage('services')} className={`hover:text-cyan-400 transition-colors ${currentPage === 'services' ? 'text-cyan-400 font-bold' : ''}`}>Services</button>
            <button onClick={() => setCurrentPage('contact')} className={`hover:text-cyan-400 transition-colors ${currentPage === 'contact' ? 'text-cyan-400 font-bold' : ''}`}>Contact</button>
          </div>
          <p className="font-mono text-[8px] text-gray-800 uppercase tracking-[0.6em] pt-12">
            © 2025 DEEPSCALA. ALL_RIGHTS_RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
