
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

      {/* ----------------- COMPLETELY REDESIGNED FOOTER ----------------- */}
      <footer className="relative pt-64 pb-20 px-6 bg-[#010102] overflow-hidden">
        {/* 1. LAYER: ARCHITECTURAL BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          {/* Deep Blue/Cyan Radial Glow */}
          <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-cyan-900/20 blur-[200px] rounded-full"></div>
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-indigo-900/10 blur-[200px] rounded-full"></div>
          
          {/* Huge Vertical Brand ID */}
          <div className="absolute top-0 left-10 h-full flex items-center pointer-events-none opacity-[0.03]">
             <span className="text-[25vh] font-black text-white uppercase [writing-mode:vertical-lr] tracking-tighter">DEEPSCALA</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* 2. LAYER: COMMAND CENTER HEADER */}
          <div className="flex flex-col gap-16 mb-40">
            <div className="flex items-center gap-6 group cursor-default">
              <div className="w-16 h-[2px] bg-cyan-500 shadow-[0_0_15px_#00f2ff]"></div>
              <h3 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-none text-white uppercase">
                INITIATE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 group-hover:drop-shadow-[0_0_20px_rgba(0,242,255,0.6)] transition-all">AUTONOMY.</span>
              </h3>
            </div>
          </div>

          {/* 3. LAYER: INTERACTIVE AGENCY CARD GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Terminal (Info & Contact) */}
            <div className="lg:col-span-8 group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 bg-[#050508]/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl">
                {/* HUD Internal Elements */}
                <div className="absolute top-8 left-12 flex gap-1.5">
                   <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                   <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute top-8 right-12 font-mono text-[8px] text-gray-700 uppercase tracking-widest">Protocol: AGENCY_V12_SECURE</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-[0.4em] block">Chief_Architect</span>
                      <h4 className="text-5xl font-black text-white italic uppercase leading-none">Keunyoung <span className="text-cyan-500 underline decoration-cyan-500/30">Ryu</span></h4>
                      <p className="font-mono text-xs text-gray-600 tracking-[1em] uppercase">류근용</p>
                    </div>
                    
                    <div className="space-y-8 pt-10 border-t border-white/5">
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[9px] text-gray-600 uppercase">Secure_Line</span>
                        <a href="tel:01080828802" className="text-3xl font-mono font-black text-white hover:text-cyan-400 transition-colors tracking-tighter">010.8082.8802</a>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[9px] text-gray-600 uppercase">Data_Gateway</span>
                        <a href="mailto:youkeunyoung@naver.com" className="text-2xl font-mono font-bold text-white hover:text-cyan-400 transition-colors tracking-tight">youkeunyoung@naver.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    <div className="w-full bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col gap-6 group/sub">
                       <div className="flex justify-between items-center">
                          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Available_Capacity</span>
                          <span className="font-mono text-[10px] text-emerald-400 font-black">ACTIVE</span>
                       </div>
                       <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                          <div className="w-[85%] h-full bg-cyan-500 shadow-[0_0_15px_#00f2ff]"></div>
                       </div>
                       <p className="font-mono text-[10px] text-gray-700 leading-relaxed uppercase">
                         System is currently operating at high efficiency. <br/>
                         New connections accepted for Q3-2025.
                       </p>
                    </div>
                    
                    <button className="mt-12 px-10 py-5 bg-cyan-500 text-black font-black uppercase tracking-tighter italic rounded-xl hover:shadow-[0_0_30px_#00f2ff] transition-all transform active:scale-95">
                      REQUEST_INTEGRATION
                    </button>
                  </div>
                </div>

                {/* --- SIGNATURE SILK WAVE SECTION --- */}
                <div className="absolute -bottom-10 left-0 w-full h-40 pointer-events-none select-none overflow-hidden opacity-60">
                   <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="silkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="transparent" />
                          <stop offset="50%" stopColor="rgba(0, 242, 255, 0.6)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path fill="none" stroke="url(#silkGrad)" strokeWidth="0.5" className="animate-[silkFlow_15s_linear_infinite]" d="M0,160 C320,300 420,10 640,160 C880,310 1080,20 1440,160" />
                      <path fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" className="animate-[silkFlow_25s_linear_infinite_reverse]" d="M0,180 C360,60 720,280 1080,180 C1240,120 1440,180" />
                      <path fill="none" stroke="rgba(0, 242, 255, 0.2)" strokeWidth="1" className="animate-[silkFlow_35s_linear_infinite]" d="M0,200 Q360,100 720,200 T1440,200" />
                   </svg>
                </div>
              </div>
            </div>

            {/* Side Terminal (Links & Social) */}
            <div className="lg:col-span-4 flex flex-col gap-10">
               <div className="bg-[#050508]/60 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 flex-1 group">
                  <h5 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                    System_Resources
                  </h5>
                  <div className="flex flex-col gap-8">
                     {['Global_Intelligence', 'Creative_Matrix', 'System_Sync', 'Privacy_Vault'].map((item) => (
                       <a key={item} href="#" className="flex justify-between items-center group/link">
                          <span className="font-mono text-sm text-white/50 group-hover/link:text-cyan-400 transition-colors uppercase tracking-widest">{item}</span>
                          <i className="fa-solid fa-arrow-right-long text-[10px] text-gray-800 group-hover/link:translate-x-2 transition-all group-hover/link:text-cyan-400"></i>
                       </a>
                     ))}
                  </div>
               </div>
               
               <div className="bg-[#050508]/60 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                     <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest">Core_Node_Origin</span>
                     <span className="font-mono text-[10px] text-white/40 font-bold uppercase tracking-widest italic">SEOUL_KOREA</span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-cyan-500/5 group">
                     <i className="fa-solid fa-microchip text-xl text-cyan-500 animate-[spin_5s_linear_infinite] group-hover:scale-125 transition-transform"></i>
                  </div>
               </div>
            </div>

          </div>

          {/* 4. LAYER: LEGAL & STATUS BAR */}
          <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
             <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-cyan-500/50 font-black tracking-[0.3em] uppercase italic">
                  © 2025 DEEPSCALA AGENCY. ALL_RIGHTS_RESERVED.
                </span>
                <span className="font-mono text-[8px] text-gray-800 uppercase tracking-[0.6em]">
                  ENCRYPTED_WITH_SEC_PROTOCOL_V4
                </span>
             </div>
             
             <div className="flex items-center gap-12 font-mono text-[10px] text-gray-700 uppercase tracking-[0.4em]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></span>
                  Server: Stable
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></span>
                  Latency: 0.02ms
                </div>
             </div>
          </div>
        </div>

        <style>{`
          @keyframes silkFlow {
            0% { transform: translateX(-15%); }
            50% { transform: translateX(5%); }
            100% { transform: translateX(-15%); }
          }
          .cyber-grid {
            background-image: 
              linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default App;
