
import React from 'react';

const GrowthAutomationSection: React.FC = () => {
  return (
    <section id="automation" className="py-48 px-6 bg-[#010101] border-t border-white/5 relative overflow-hidden">
      {/* 1. LAYER: ARCHITECTURAL BACKGROUND & ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
        
        {/* Expanded Soft Aura for Text Continuity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[140%] bg-[radial-gradient(circle_at_40%_50%,rgba(0,242,255,0.06)_0%,rgba(99,102,241,0.02)_40%,transparent_75%)] blur-[120px] pointer-events-none"></div>

        {/* Dynamic Data Beams */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-[-10%] w-[120%] h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-[beamFlow_15s_linear_infinite]"></div>
          <div className="absolute top-2/3 left-[-10%] w-[120%] h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-[beamFlow_20s_linear_infinite_reverse]"></div>
        </div>

        {/* Subtle Horizontal Scan-line Bridge */}
        <div className="absolute top-[38%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-12 overflow-visible">
          
          {/* LEFT: REFINED TITLE BLOCK (Fixed 'C' Clipping) */}
          <div className="relative space-y-8 max-w-4xl overflow-visible">
            <div className="flex items-center gap-6">
              <div className="w-[1.5px] h-10 bg-gradient-to-t from-cyan-500 to-transparent shadow-[0_0_15px_#00f2ff]"></div>
              <span className="font-mono text-[10px] text-cyan-500 font-black tracking-[0.4em] uppercase">Sector_06 // Growth_Engineering</span>
            </div>

            <div className="relative group/title overflow-visible">
              <h2 className="text-5xl md:text-[85px] font-black text-white uppercase tracking-tighter leading-[0.85] italic transition-transform group-hover/title:-translate-y-1 duration-700 overflow-visible">
                <span className="relative inline-block pb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">Autonomous</span> <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_35px_rgba(0,242,255,0.4)] inline-block pr-10 pb-4">
                  Growth_Logic
                </span>
              </h2>
            </div>

            <div className="relative pl-10 overflow-visible">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/30 shadow-[0_0_10px_rgba(0,242,255,0.2)]"></div>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed tracking-tight italic max-w-xl">
                확장성은 노동이 아닌 <span className="text-white font-bold italic underline decoration-cyan-500/50 underline-offset-8 decoration-2">코드</span>에서 탄생합니다. <br/>
                인적 개입 없이 스스로 진화하는 자율 주행 비즈니스 아키텍처.
              </p>
            </div>
          </div>

          {/* RIGHT: STATUS HUD */}
          <div className="hidden lg:flex flex-col items-end gap-6 opacity-40 overflow-visible">
            <div className="font-mono text-[9px] text-cyan-400 font-black tracking-widest uppercase flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              Growth_Protocol_Stable
            </div>
            <div className="w-48 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent"></div>
          </div>
        </div>

        {/* GRID: AUTOMATION MODULES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-visible">
          <div className="space-y-12 overflow-visible">
            <div className="relative p-10 border border-white/5 bg-[#050508]/80 backdrop-blur-3xl rounded-[3rem] group hover:border-cyan-500/30 transition-all overflow-hidden shadow-2xl">
               {/* Internal Glow on Hover */}
               <div className="absolute -inset-2 bg-cyan-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
               
               <div className="flex items-center gap-4 mb-8">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]"></span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">AUTO_SCALING_PROTOCOL</span>
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic mb-8 tracking-tighter pr-6 transition-colors group-hover:text-cyan-400">Autonomous Scaling Engine</h3>
               <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 italic">
                 인간의 개입 없는 <span className="text-white font-bold underline decoration-cyan-500/30 underline-offset-4">'무한 확장 가능 비즈니스'</span>를 구현합니다.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {['Distributed_Nodes', 'Live_API_Sync', 'Auto_Logistics', 'Neural_Pricing'].map(tag => (
                    <div key={tag} className="px-3 py-2 border border-white/5 bg-white/[0.02] rounded-md font-mono text-[9px] text-gray-700 uppercase tracking-widest text-center group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all font-black">
                      {tag}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* LARGE METRIC DISPLAY */}
          <div className="relative group cursor-default h-full overflow-visible">
             <div className="relative bg-[#050508]/90 border border-white/5 p-12 md:p-16 rounded-[3rem] overflow-visible shadow-2xl flex flex-col items-center justify-center min-h-[500px] backdrop-blur-3xl group-hover:border-indigo-500/30 transition-all duration-700">
                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                   <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
                   <span className="font-mono text-[10px] text-cyan-400 font-black uppercase tracking-widest">Efficiency_MAX</span>
                </div>
                
                <div className="relative z-10 w-full flex flex-col items-center overflow-visible">
                   <h3 className="text-6xl sm:text-[7rem] md:text-[8rem] font-black italic tracking-tighter leading-none text-white transition-all duration-700 drop-shadow-[0_0_45px_rgba(0,242,255,0.4)] pr-8 overflow-visible block group-hover:scale-105">
                     3000%
                   </h3>
                   <div className="mt-12 text-center overflow-visible space-y-4">
                      <p className="font-black text-2xl md:text-3xl text-white uppercase tracking-tighter italic leading-none transition-transform duration-700 pr-2">
                        Revenue Explosion
                      </p>
                      <div className="flex items-center justify-center gap-4 text-gray-700">
                        <span className="text-sm tracking-[0.4em] uppercase">by</span> 
                        <span className="text-indigo-400 font-mono text-base font-black tracking-widest group-hover:text-white transition-colors">Autonomous_Code</span>
                      </div>
                   </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-8 right-12 opacity-10">
                   <i className="fa-solid fa-microchip text-6xl text-white"></i>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes beamFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default GrowthAutomationSection;
