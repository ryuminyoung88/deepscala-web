
import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010102] text-white selection:bg-cyan-500 selection:text-black relative">
      <Navbar />
      
      <main className="relative z-10">
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
      </main>

      {/* Network Status Floating Overlay */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none px-6 py-4 flex justify-between items-end">
        <div className="bg-[#050508]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[8px] text-gray-500 uppercase">Traffic_Load</span>
            <div className="flex gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`w-1 h-3 ${i < 8 ? 'bg-cyan-500' : 'bg-gray-800'} animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[8px] text-gray-500 uppercase">Server_Latency</span>
            <span className="font-mono text-[10px] text-cyan-400 font-bold">0.02ms</span>
          </div>
        </div>
        
        <div className="bg-[#050508]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span className="font-mono text-[9px] text-white tracking-[0.2em] uppercase font-bold">
            DEEPSCALA CLOUD INFRASTRUCTURE: OPTIMIZED
          </span>
        </div>
      </div>

      <footer className="py-32 px-6 border-t border-white/5 bg-[#010102] relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
        
        {/* Background Atmospheric Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-24">
            
            {/* Top Row: Design Concept Tagline */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-cyan-500"></div>
                  <span className="font-mono text-[10px] text-cyan-400 font-black tracking-[0.4em] uppercase">Global_Standard_Protocol</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black italic tracking-tighter leading-tight max-w-3xl">
                  "Creating Value, Delivering Trust. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500">
                    We are committed to your success.
                  </span>"
                </h3>
              </div>
              
              <div className="flex flex-col items-end">
                <span className="font-mono text-[8px] text-gray-700 tracking-[0.3em] uppercase mb-4">Core_Architect_ID</span>
                <span className="text-3xl font-black tracking-tighter italic uppercase text-white/90">
                  DEEPSCALA
                </span>
              </div>
            </div>

            {/* Middle Row: Business Information Grid with GLOBAL & MARKETING BACKGROUND */}
            <div className="relative group p-0.5 rounded-3xl overflow-hidden">
              {/* Background Layer: Global Business Connectivity Visual */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-[10s] ease-out"></div>
                {/* Marketing Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/80"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,242,255,0.05),transparent_50%)]"></div>
                {/* Animated Data Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-[dataSweep_4s_linear_infinite]"></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-10 border border-white/10 backdrop-blur-xl rounded-3xl bg-black/40">
                {/* CEO Info - SPELLING UPDATED TO Keunyoung Ryu */}
                <div className="group/item flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"></span>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em] group-hover/item:text-cyan-400 transition-colors">CEO / Representative</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-white group-hover/item:text-cyan-400 transition-colors tracking-tight">Keunyoung Ryu</span>
                    <span className="text-xs text-gray-600 font-mono tracking-[0.5em] mt-1">(류근용)</span>
                  </div>
                  <div className="w-12 h-0.5 bg-white/5 group-hover/item:w-full group-hover/item:bg-cyan-500/20 transition-all duration-500"></div>
                </div>

                {/* Mobile Info */}
                <div className="group/item flex flex-col gap-4 border-x border-white/5 px-8">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-phone-volume text-[8px] text-cyan-500"></i>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em] group-hover/item:text-cyan-400 transition-colors">Direct Line</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white group-hover/item:text-cyan-400 transition-all tracking-tighter">
                    +82 10-8082-8802
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white/10 rounded-full group-hover/item:bg-cyan-500/40 transition-colors" style={{ transitionDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                </div>

                {/* Email Info */}
                <div className="group/item flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope-open-text text-[8px] text-cyan-500"></i>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em] group-hover/item:text-cyan-400 transition-colors">Global E-mail</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-white group-hover/item:text-cyan-400 transition-all tracking-tight break-all">
                    youkeunyoung@naver.com
                  </span>
                  <span className="font-mono text-[8px] text-gray-700 tracking-widest uppercase">Response_Within_24H_Active</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Navigation and Copyright - SPELLING UPDATED TO Ryu Keunyoung */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pt-10">
              <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-600">
                <a href="#" className="hover:text-cyan-400 transition-all flex items-center gap-2 group/link">
                  <span className="w-1 h-1 bg-cyan-500/40 rounded-full group-hover/link:animate-ping"></span> Global_Network
                </a>
                <a href="#" className="hover:text-cyan-400 transition-all flex items-center gap-2 group/link">
                  <span className="w-1 h-1 bg-cyan-500/40 rounded-full group-hover/link:animate-ping"></span> Marketing_Ledger
                </a>
                <a href="#" className="hover:text-cyan-400 transition-all flex items-center gap-2 group/link">
                  <span className="w-1 h-1 bg-cyan-500/40 rounded-full group-hover/link:animate-ping"></span> Data_Privacy
                </a>
              </div>
              
              <div className="flex flex-col items-center lg:items-end gap-2">
                <span className="font-mono text-[10px] text-cyan-500/60 tracking-[0.1em] font-black italic">
                  © 2025 Ryu Keunyoung. All Rights Reserved.
                </span>
                <span className="text-[8px] font-mono text-gray-800 uppercase tracking-[0.4em]">
                  Seoul_Node // 37.5665° N, 126.9780° E
                </span>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes dataSweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default App;
