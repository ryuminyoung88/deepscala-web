
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#010102]">
      {/* 1. LAYER: ARCHITECTURAL BASE & AMBIENT GLOW */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-20"></div>
      
      {/* 중앙 집중형 배경 글로우 (로봇을 떠받치는 빛) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-5 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.08)_0%,rgba(99,102,241,0.05)_30%,transparent_70%)] blur-[100px]"></div>
      
      {/* 2. LAYER: INTEGRATED ROBOT CORE (SPLINE) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Spline Model with Advanced Blending Filters */}
          <div className="absolute inset-0 scale-110 md:scale-100 origin-center transition-transform duration-1000">
            <iframe 
              src='https://my.spline.design/nexbotrobotcharacterconcept-weaqA2T1bztql3jmcCjSNdRE/' 
              frameBorder="0" 
              width="100%" 
              height="100%" 
              style={{ 
                filter: 'brightness(0.85) contrast(1.1) saturate(1.1) hue-rotate(-5deg)', 
                pointerEvents: 'none',
                mixBlendMode: 'screen' 
              }}
            ></iframe>
          </div>

          {/* Seamless Masking Layer: 3D 모델의 회색 배경을 지우고 본체만 강조 */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_100px_#010102]"></div>
          
          {/* 하이엔드 그라데이션 오버레이: 상하좌우 모든 방향에서 블랙으로 수렴 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#010102] via-transparent to-[#010102] opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#010102] via-transparent to-[#010102] opacity-90"></div>
          
          {/* 추가적인 중앙 비네팅 (로봇 집중도 극대화) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#010102_85%)]"></div>
        </div>
      </div>

      {/* 3. LAYER: CENTERED TOP HUD */}
      <div className="absolute top-0 left-0 w-full z-40 px-10 py-10 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
             <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-cyan-500 shadow-[0_0_20px_#00f2ff]"></div>
             <span className="font-mono text-[12px] text-cyan-400 font-black tracking-[0.8em] uppercase italic drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]">
               NEURAL_ARCHITECT // IDENT_01_PRO
             </span>
             <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-cyan-500 shadow-[0_0_20px_#00f2ff]"></div>
          </div>
          <div className="flex gap-4">
            <span className="font-mono text-[8px] text-gray-500 tracking-widest uppercase flex items-center gap-2">
              <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
              UPLINK: 4.8 GBPS // SIGNAL_STABLE
            </span>
          </div>
        </div>
      </div>

      {/* 3-B. LAYER: RIGHT TOP STATUS */}
      <div className="absolute top-10 right-10 z-40 pointer-events-none hidden md:flex flex-col items-end gap-1 font-mono text-[9px] text-cyan-500/80 uppercase tracking-widest">
        <div className="flex gap-3 bg-cyan-500/5 px-3 py-1 border border-cyan-500/20 rounded-sm backdrop-blur-sm">
          <span>SCANNING_NEURAL_NODES...</span>
          <span className="text-cyan-400">[OK]</span>
        </div>
        <div className="mt-2 flex flex-col items-end opacity-40">
          <span className="text-[10px] text-white">SYNC_STABLE_v9.2.4</span>
          <div className="w-24 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent mt-1"></div>
        </div>
      </div>

      {/* 4. LAYER: MAIN TYPOGRAPHY & CONTENT */}
      <div className="absolute inset-0 z-30 flex items-center px-10 md:px-24 pointer-events-none">
        <div className="max-w-5xl space-y-12 pointer-events-auto">
          <div className="relative group">
            <div className="space-y-0 relative">
              {/* Reverted font size for SCALE to restore balance */}
              <h1 className="text-7xl md:text-[120px] font-black text-white uppercase tracking-tighter leading-[0.8] italic select-none">
                SCALE
              </h1>
              <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_40px_rgba(0,242,255,0.4)] select-none">
                THINKING
              </h1>
            </div>
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
          </div>

          <div className="relative pl-12 max-w-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500 shadow-[0_0_20px_#00f2ff]"></div>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light tracking-tight">
                <span className="text-white font-black italic underline decoration-cyan-500/40 underline-offset-8 drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">DEEPSCALA</span>는 단순한 개발사가 아닙니다. <br/>
                인공지능을 통해 비즈니스의 물리적 한계를 해체하고, 가장 <span className="text-cyan-400 font-bold">진화된 경로</span>로 압도적 성장을 설계하는 <span className="text-white font-bold">'브레인 아키텍트'</span>입니다.
              </p>
              <p className="text-gray-600 font-mono text-[9px] italic tracking-[0.4em] uppercase">
                The future belongs to those who build with silicon logic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. LAYER: BOTTOM HUD */}
      <div className="absolute bottom-16 left-10 md:left-24 z-40 flex gap-28 pointer-events-none">
        <div className="flex flex-col gap-3 group">
          <span className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em] font-bold">CORE_ENGINE</span>
          <span className="font-mono text-xs text-cyan-400 font-black tracking-widest uppercase">GEMINI_LATEST</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[9px] text-gray-700 uppercase tracking-[0.3em] font-bold">NETWORK_REACH</span>
          <span className="font-mono text-xs text-indigo-400 font-black tracking-widest uppercase">GLOBAL_ANYCAST</span>
        </div>
      </div>

      <div className="absolute right-12 bottom-16 z-40 hidden md:flex flex-col items-end gap-2">
        <div className="w-48 h-[1px] bg-gradient-to-l from-cyan-500 via-cyan-500/50 to-transparent"></div>
        <span className="font-mono text-[10px] text-cyan-500 font-black tracking-[0.2em] uppercase">SYSTEM_READY</span>
      </div>
    </section>
  );
};

export default Hero;
