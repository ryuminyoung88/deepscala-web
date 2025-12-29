
import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#010102] relative overflow-hidden min-h-screen flex items-center border-t border-white/5">
      {/* 1. LAYER: MINIMAL GRID */}
      <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none"></div>
      
      {/* 2. LAYER: PURE BLACK BASE */}
      <div className="absolute inset-0 bg-[#010102] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Side: Particle AI Brain Core */}
          <div className="relative flex justify-center items-center py-20 order-last lg:order-first group">
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
              
              <div className="absolute inset-0 flex items-center justify-center z-10 overflow-visible">
                <div className="relative w-full h-full pointer-events-none flex items-center justify-center">
                  <div 
                    className="absolute w-[180%] h-[180%] flex items-center justify-center scale-[1.0] transition-transform duration-1000 group-hover:scale-[1.05]"
                    style={{
                      maskImage: 'radial-gradient(circle at center, black 25%, rgba(0,0,0,0.8) 45%, transparent 68%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, black 25%, rgba(0,0,0,0.8) 45%, transparent 68%)'
                    }}
                  >
                    <iframe 
                      src='https://my.spline.design/particleaibrain-hHT9sX2f8cDS7ajYDrKfDSzq/' 
                      frameBorder='0' 
                      width='100%' 
                      height='100%'
                      className="opacity-100"
                      style={{ 
                        pointerEvents: 'none', 
                        filter: 'brightness(1.05) contrast(1.1) saturate(0.9)', 
                        mixBlendMode: 'screen',
                        transform: 'scale(1.4) translateY(0%)'
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* HUD Labels */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                <div className="bg-[#050508]/90 border border-white/10 px-4 py-1 rounded-sm backdrop-blur-md">
                  <span className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">NEURAL_CORE_v2</span>
                </div>
                <div className="w-px h-10 bg-gradient-to-t from-white/10 to-transparent"></div>
              </div>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                <div className="w-px h-10 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="bg-[#050508]/90 border border-white/10 px-4 py-1 rounded-sm backdrop-blur-md">
                  <span className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">SYNC_STABLE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Identity & Content */}
          <div className="space-y-12 relative flex flex-col items-center lg:items-start">
            
            {/* TOP HUD HEADER (Requested Change: Positioned at the very top) */}
            <div className="w-full flex justify-center lg:justify-start">
               <div className="flex items-center gap-6 group cursor-default">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#00f2ff]"></div>
                  <span className="font-mono text-cyan-500 text-[10px] font-black tracking-[0.5em] uppercase whitespace-nowrap drop-shadow-[0_0_8px_#00f2ff] animate-pulse">
                    NODE_IDENT // ARCHITECT_PROFILE
                  </span>
                  <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#00f2ff]"></div>
               </div>
            </div>

            {/* Header Identity */}
            <div className="space-y-6 relative w-full flex flex-col items-center lg:items-start">
              <div className="relative group/title overflow-visible pt-10 w-full flex flex-col items-center lg:items-start">
                
                {/* --- HOLOGRAM BOX CONTAINER --- */}
                <div className="absolute -inset-x-12 -inset-y-8 bg-cyan-500/[0.03] border border-cyan-500/20 rounded-lg backdrop-blur-[3px] -z-10 group-hover/title:border-cyan-500/40 transition-all duration-700 overflow-hidden">
                  
                  {/* Hologram Corner Markers */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
                  
                  {/* Vertical Scanline */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-[hologramScan_4s_linear_infinite] pointer-events-none"></div>
                  
                  {/* Light Leak Projection Effect (Bottom) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(circle_at_bottom,rgba(0,242,255,0.12),transparent_70%)] pointer-events-none"></div>

                  {/* Tech Labels inside Box */}
                  <div className="absolute top-2 left-10 font-mono text-[6px] text-cyan-500/40 tracking-[0.3em] uppercase select-none">SYSTEM_RENDER_ACTIVE</div>
                  <div className="absolute bottom-2 right-10 font-mono text-[6px] text-cyan-500/40 tracking-[0.3em] uppercase select-none">REF_0xDEEP</div>
                </div>

                {/* Ambient Motion Glow */}
                <div className="absolute -inset-x-32 -inset-y-16 bg-[radial-gradient(ellipse_at_center,rgba(0,242,255,0.08)_0%,transparent_75%)] animate-[pulse_6s_ease-in-out_infinite] -z-20 blur-[50px] pointer-events-none"></div>

                {/* Secondary Ghost Title */}
                <h2 className="absolute -top-10 -left-4 text-white/[0.02] text-[80px] md:text-[9.2rem] font-black uppercase tracking-tighter select-none pointer-events-none italic animate-[floatGhost_12s_ease-in-out_infinite] whitespace-nowrap">
                  ARCHITECT
                </h2>
                
                {/* Main Title */}
                <div className="relative z-10 py-6 px-4 overflow-visible perspective-1000">
                  <h2 className="font-display text-[45px] md:text-[70px] font-black tracking-tighter uppercase text-white leading-[0.8] italic inline-block pr-16 overflow-visible">
                    <span 
                      className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 block transition-all duration-500 group-hover/title:scale-[1.03] animate-[hologramFlicker_10s_infinite] pr-4 pb-2"
                      style={{
                        filter: `
                          drop-shadow(1px 1px 0px rgba(0, 242, 255, 0.4))
                          drop-shadow(2px 2px 0px rgba(0, 242, 255, 0.2))
                          drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.9))
                        `,
                        transform: 'rotateX(5deg) rotateY(-5deg)'
                      }}
                    >
                      ARCHITECT
                    </span>
                  </h2>
                </div>
                
                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <span className="text-3xl md:text-4xl font-black text-white italic tracking-tight uppercase">KEUNYOUNG RYU</span>
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-bold">VERIFIED_OPERATOR</span>
                  </div>
                </div>
              </div>

              {/* Manifesto Quote */}
              <div className="relative inline-block group cursor-default">
                <div className="absolute -inset-1 bg-indigo-500/10 blur-lg rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#010102] border-l-4 border-indigo-500 px-6 py-2">
                   <p className="font-mono text-[12px] text-indigo-400 font-black tracking-[0.2em] uppercase italic">
                     "TECHNOLOGY IS THE ULTIMATE FREEDOM."
                   </p>
                </div>
              </div>
            </div>

            {/* Description Area */}
            <div className="relative pl-10 max-w-xl">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent shadow-[0_0_15px_#00f2ff]"></div>
              <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed font-light italic tracking-tight text-center lg:text-left">
                "15년의 실전 이커머스 엔지니어링과 뉴럴 마케팅 노하우를 <br className="hidden md:block"/> 
                정교한 <span className="text-white font-bold border-b border-cyan-500/40">알고리즘</span>으로 체계화했습니다. 
                당신의 비즈니스가 스스로 성장하는 자율 주행 생태계를 구축합니다."
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 w-full">
              <div className="group/card relative bg-[#050508]/40 border border-white/5 p-10 rounded-3xl transition-all hover:border-cyan-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-800 uppercase tracking-widest">sys_ref_01</div>
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-[0.4em] font-black block">E-COM_ENG</span>
                  <div className="text-6xl font-black text-white italic tracking-tighter group-hover:text-cyan-400 transition-colors">15Y+</div>
                  <p className="text-[12px] text-gray-500 uppercase leading-tight tracking-widest font-bold">Global Shopify Master</p>
                </div>
              </div>

              <div className="group/card relative bg-[#050508]/40 border border-white/5 p-10 rounded-3xl transition-all hover:border-indigo-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gray-800 uppercase tracking-widest">sys_ref_02</div>
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-[0.4em] font-black block">MARKETING</span>
                  <div className="text-6xl font-black text-white italic tracking-tighter group-hover:text-indigo-400 transition-colors">13Y+</div>
                  <p className="text-[12px] text-gray-500 uppercase leading-tight tracking-widest font-bold">Neural Growth Algorithm</p>
                </div>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="flex items-center gap-6 pt-10 opacity-20 w-full">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <span className="font-mono text-[8px] text-gray-500 tracking-[1em] uppercase whitespace-nowrap">
                UPLINK_STABLE // 0xDEEP_ARCH
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-700 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatGhost {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-5px) translateX(3px); }
          66% { transform: translateY(3px) translateX(-3px); }
        }
        @keyframes hologramScan {
          0% { top: -5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 105%; opacity: 0; }
        }
        @keyframes hologramFlicker {
          0%, 100% { opacity: 1; filter: brightness(1); }
          33% { opacity: 0.95; filter: brightness(1.1); }
          34% { opacity: 0.8; filter: brightness(1.5); }
          35% { opacity: 1; filter: brightness(1); }
          66% { opacity: 0.98; }
          67% { opacity: 0.9; transform: rotateX(5deg) rotateY(-5deg) skewX(1deg); }
          68% { opacity: 1; transform: rotateX(5deg) rotateY(-5deg) skewX(0); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;
