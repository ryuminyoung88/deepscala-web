
import React from 'react';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-48 px-6 bg-[#010102] relative overflow-hidden border-t border-white/5">
      {/* 1. LAYER: ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 cyber-grid opacity-[0.08] pointer-events-none"></div>
        
        {/* Expanded Atmospheric Glow for better blending */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12)_0%,rgba(99,102,241,0.03)_40%,transparent_75%)] blur-[140px] pointer-events-none"></div>

        {/* Dynamic Beams with softer opacity */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-[-10%] w-[120%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[beamSlide_12s_linear_infinite]"></div>
          <div className="absolute top-3/4 left-[-10%] w-[120%] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent animate-[beamSlide_16s_linear_infinite_reverse]"></div>
        </div>

        {/* Subtle Horizontal Light Bridge */}
        <div className="absolute top-[35%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-32 gap-16 overflow-visible">
          
          {/* LEFT: REFINED TITLE BLOCK */}
          <div className="relative space-y-12 max-w-5xl overflow-visible">
            <div className="flex items-center gap-6">
              <div className="relative h-1 w-16 overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-[shimmer_2s_infinite]"></div>
              </div>
              <span className="font-mono text-[10px] text-blue-500 font-black tracking-[0.5em] uppercase italic flex items-center gap-3">
                STRATEGIC_ASSETS // OPTIMIZED_RENDER
              </span>
            </div>

            <div className="relative group/title overflow-visible">
              {/* Background Ghost Text */}
              <h2 className="absolute -top-16 -left-12 text-white/[0.01] text-6xl md:text-[12rem] font-black uppercase tracking-tighter select-none pointer-events-none italic group-hover/title:text-white/[0.02] transition-all duration-1000 leading-none whitespace-nowrap">
                REVOLUTION
              </h2>

              <div className="relative z-10 overflow-visible pr-4 md:pr-0">
                <h2 className="text-6xl md:text-[85px] font-black text-white uppercase tracking-tighter leading-[0.85] select-none italic overflow-visible">
                  <span className="relative inline-block pb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">BEYOND</span> <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.4)] inline-block pr-6 pb-4">
                    NUMBERS
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed tracking-tight border-l-4 border-blue-500/20 pl-10 italic max-w-xl">
              비즈니스 구조의 <span className="text-white font-bold decoration-blue-500/30 underline underline-offset-8 decoration-2">재설계(Architecting)</span>. <br/>
              데이터와 크리에이티브가 결합된 압도적 성장을 확인하십시오.
            </p>
          </div>

          {/* RIGHT: CONNECTED METRICS */}
          <div className="hidden lg:flex flex-col items-end gap-10 relative">
            <div className="text-right group cursor-default overflow-visible relative">
              <div className="absolute -inset-8 bg-blue-500/5 blur-[40px] group-hover:bg-blue-500/10 transition-all rounded-full"></div>
              
              <div className="relative z-10">
                <div className="font-mono text-[9px] text-gray-700 uppercase tracking-widest mb-2 flex items-center justify-end gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Live_Success_Rate
                </div>
                <span className="text-7xl font-black text-white italic tracking-tighter group-hover:text-blue-400 transition-colors duration-500 pr-4 block drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">98.4%</span>
              </div>
            </div>
            
            <div className="w-64 h-[1px] bg-gradient-to-l from-blue-500 via-white/10 to-transparent relative">
               <div className="absolute right-0 top-0 h-4 w-[1px] bg-blue-500"></div>
            </div>
          </div>
        </div>

        {/* 2. LAYER: PORTFOLIO CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Card 1: Revenue Scale-up (Blue Theme) - Border-2 Applied */}
          <div className="lg:col-span-7 group relative bg-[#050508]/40 backdrop-blur-3xl border-2 border-blue-500/20 rounded-[3rem] p-10 md:p-16 overflow-hidden transition-all duration-500 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-sm font-mono text-[9px] text-blue-400 font-black uppercase tracking-widest">NODE: SCALE_01</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-[0.9] tracking-tighter group-hover:translate-x-2 transition-transform duration-700 pr-12">
                  ROAS 중심의 매출 <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 block">스케일업 파이프라인</span>
                </h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl italic">
                  데이터 기반 타겟팅 고도화를 통해 마케팅 효율을 극대화하고 이탈 고객을 최소화하는 전환 시스템.
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-white/10 pt-12 overflow-visible">
                <div className="flex flex-col group/metric overflow-visible">
                  <span className="text-7xl md:text-[100px] font-black text-white italic tracking-tighter group-hover:text-blue-400 transition-all duration-700 pr-12 block">
                    +180%
                  </span>
                  <div className="font-mono text-[10px] text-gray-700 uppercase tracking-widest mt-2 font-black">Conversion_Lift</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Viral Ecosystem (Indigo Theme) - Border-2 Applied */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="group relative bg-[#050508]/40 backdrop-blur-3xl border-2 border-indigo-500/20 rounded-[3rem] p-10 md:p-12 overflow-hidden transition-all duration-500 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] flex-1">
              <div className="relative z-10 space-y-8">
                <span className="px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-sm font-mono text-[9px] text-indigo-400 font-black uppercase tracking-widest">Viral_Algo</span>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-[0.9] pr-8 group-hover:translate-x-1 transition-transform duration-700">
                  MZ 세대 타겟 <br/> 숏폼 바이럴 <br/> 에코시스템
                </h3>
                <div className="pt-8 border-t border-white/10 flex items-baseline gap-4 overflow-visible">
                  <span className="text-6xl font-black text-white italic tracking-tighter group-hover:text-indigo-400 transition-all duration-700 pr-8 block">2.5M</span>
                  <span className="font-mono text-[9px] text-gray-700 uppercase tracking-widest font-black">Total_Reach</span>
                </div>
              </div>
              {/* Subtle accent glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-all"></div>
            </div>
            
            <div className="bg-blue-600 p-10 rounded-[3rem] group cursor-pointer overflow-hidden relative active:scale-[0.98] transition-transform shadow-2xl shadow-blue-500/20">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10 flex justify-between items-center">
                  <span className="text-black font-black uppercase italic tracking-tighter text-2xl md:text-3xl">View All Projects</span>
                  <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-lg">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes beamSlide { 
          0% { transform: translateX(-100%); opacity: 0; } 
          20% { opacity: 1; } 
          80% { opacity: 1; } 
          100% { transform: translateX(100%); opacity: 0; } 
        }
        @keyframes shimmer { 
          0% { left: -100%; } 
          100% { left: 100%; } 
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
