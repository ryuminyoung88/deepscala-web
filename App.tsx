
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProfileSection from './ProfileSection';
import PortfolioSection from './PortfolioSection';
import EcommerceSection from './EcommerceSection';
import ShopifyDesignSection from './ShopifyDesignSection';
import AIEcommerceSection from './AIEcommerceSection';
import FintechSection from './FintechSection';
import GrowthAutomationSection from './GrowthAutomationSection';
import AICopywriter from './AICopywriter';
import FinalManifesto from './FinalManifesto';

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

      <footer className="relative pt-64 pb-20 px-6 bg-[#010102] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-cyan-900/20 blur-[200px] rounded-full"></div>
          <div className="absolute top-0 left-10 h-full flex items-center pointer-events-none opacity-[0.03]">
             <span className="text-[25vh] font-black text-white uppercase [writing-mode:vertical-lr] tracking-tighter">DEEPSCALA</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-16 mb-40 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 group cursor-default">
              <div className="w-16 h-[2px] bg-cyan-500 shadow-[0_0_15px_#00f2ff]"></div>
              <h3 className="text-5xl md:text-9xl font-black italic tracking-tighter leading-none text-white uppercase">
                INITIATE <br className="md:hidden"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500">AUTONOMY.</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 group relative">
              <div className="relative z-10 bg-[#050508]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-[0.4em] block">Chief_Architect</span>
                      <h4 className="text-5xl font-black text-white italic uppercase leading-none">Keunyoung Ryu</h4>
                      <p className="font-mono text-xs text-gray-600 tracking-[1em] uppercase">류근용</p>
                    </div>
                    <div className="space-y-8 pt-10 border-t border-white/5 font-mono">
                      <div className="flex flex-col gap-2 text-white">010.8082.8802</div>
                      <div className="flex flex-col gap-2 text-white">youkeunyoung@naver.com</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center md:items-end">
                    <button className="px-10 py-5 bg-cyan-500 text-black font-black uppercase tracking-tighter italic rounded-xl shadow-[0_0_30px_#00f2ff]">
                      REQUEST_INTEGRATION
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
