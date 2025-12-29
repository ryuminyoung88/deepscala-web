
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#010102]">
      {/* 1. LAYER: GRID & DARK AMBIENT */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-[0.08]"></div>
      
      {/* 2. LAYER: ROBOT BACKGROUND (밝기 0.3으로 대폭 하향) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 scale-[1.02] origin-center">
            <iframe 
              src='https://my.spline.design/nexbotrobotcharacterconcept-weaqA2T1bztql3jmcCjSNdRE/' 
              frameBorder="0" 
              width="100%" 
              height="100%" 
              style={{ 
                filter: 'brightness(0.3) contrast(1.3) saturate(0.8)', 
                pointerEvents: 'none' 
              }}
            ></iframe>
          </div>
          
          {/* 강렬한 암부 마스킹 (텍스트가 튀어나와 보이게 함) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#010102_90%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010102] via-transparent to-[#010102]"></div>
          <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#010102] via-[#010102]/80 to-transparent"></div>
        </div>
      </div>

      {/* 3. LAYER: MAIN TYPOGRAPHY */}
      <div className="absolute inset-0 z-30 flex items-center px-6 md:px-24 pointer-events-none">
        <div className="max-w-6xl space-y-12 md:space-y-16 pointer-events-auto">
          <div className="relative space-y-0">
            <h1 className="text-7xl md:text-[150px] font-black text-white uppercase tracking-tighter leading-[0.75] italic select-none drop-shadow-[0_20px_100px_rgba(0,0,0,1)]">
              SCALE
            </h1>
            <h1 className="text-6xl md:text-[110px] font-black uppercase tracking-tighter leading-[0.75] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-600 italic select-none drop-shadow-[0_0_50px_rgba(0,242,255,0.4)]">
              THINKING
            </h1>
          </div>

          <div className="relative pl-8 md:pl-10 max-w-xl">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-cyan-500 shadow-[0_0_20px_rgba(0,242,255,0.7)]"></div>
            <p className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light italic tracking-tight">
              <span className="text-white font-black uppercase tracking-widest">DEEPSCALA</span>는 인공지능을 통해 <br/>
              비즈니스의 한계를 해체하고 압도적 성장을 설계하는 <br/>
              <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">'브레인 아키텍트'</span>입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 4. LAYER: HUD 정보 */}
      <div className="absolute bottom-12 left-6 md:left-24 z-40 opacity-30">
        <div className="flex items-center gap-6 md:gap-8">
           <div className="flex flex-col gap-1">
             <span className="font-mono text-[7px] text-gray-500 tracking-[0.8em] uppercase font-bold">CORE_ARCH_SYSTEM</span>
             <span className="font-mono text-[10px] text-cyan-500 font-black tracking-[0.4em] uppercase">ACCESS_GRANTED_PRO</span>
           </div>
           <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
