
import React from 'react';

const AIEcommerceSection: React.FC = () => {
  const aiColor = '#a855f7'; // Amethyst Purple

  return (
    <section id="ai-ecommerce" className="relative py-64 px-6 overflow-hidden bg-[#010102]">
      {/* 1. LAYER: NEURAL NETWORK BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        {/* Atmospheric Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#010102] to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#010102] to-transparent z-10"></div>

        {/* Neural Network SVG Pattern */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neuralPattern" width="150" height="150" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill={aiColor} />
                <path d="M 2 2 L 75 75 M 2 2 L 150 0 M 75 75 L 75 150" stroke={aiColor} strokeWidth="0.5" fill="none" />
                <circle cx="75" cy="75" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neuralPattern)" />
          </svg>
        </div>

        {/* Moving Data Stream Beams */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-[beamFlow_10s_linear_infinite]"></div>
           <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent animate-[beamFlow_15s_linear_infinite_reverse]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* HEADER AREA: HUD INTERFACE STYLE */}
        <div className="flex flex-col items-center mb-32 space-y-10 overflow-visible text-center">
          <div className="flex items-center gap-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-violet-500 shadow-[0_0_15px_#a855f7]"></div>
            <span className="font-mono text-[10px] text-violet-400 font-black tracking-[0.6em] uppercase italic">Sector_05 // Intelligence_Core_v.4</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-violet-500 shadow-[0_0_15px_#a855f7]"></div>
          </div>
          
          <div className="relative overflow-visible">
            {/* Background Ghost Text */}
            <h2 className="absolute -top-16 left-1/2 -translate-x-1/2 text-white/[0.02] text-7xl md:text-[14rem] font-black uppercase tracking-tighter select-none pointer-events-none italic whitespace-nowrap">
              NEURAL
            </h2>

            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] italic transition-all duration-700 select-none overflow-visible pr-8 drop-shadow-2xl">
              Intelligence <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-white to-violet-600 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)] block">
                Ecosystem
              </span>
            </h2>
            
            <div className="mt-8 flex items-center justify-center gap-4">
               <div className="w-2 h-2 border border-violet-500 rotate-45 animate-pulse"></div>
               <div className="h-px w-48 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent relative">
                  <div className="absolute top-0 left-0 h-full bg-violet-400 w-1/4 animate-[loading_3s_infinite]"></div>
               </div>
               <div className="w-2 h-2 border border-violet-500 rotate-45 animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed italic max-w-3xl drop-shadow-md">
            비즈니스의 모든 고객 접점을 <span className="text-white font-bold decoration-violet-500/40 underline underline-offset-8">인지 알고리즘</span>으로 재정의합니다. <br className="hidden md:block"/>
            스스로 판단하고 진화하는 딥러닝 커머스 생태계를 구축합니다.
          </p>
        </div>

        {/* CARDS AREA: NEURAL PROCESSING UNITS WITH WHITE EMISSION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              title: 'Predictive Analytics', 
              icon: 'fa-solid fa-brain', 
              metric: 'ACC: 98.2%', 
              desc: '실시간 구매 의도 데이터 분석 및 미래 수요 예측 알고리즘.',
              label: 'ANALYSIS_CORE'
            },
            { 
              title: 'GenAI Content', 
              icon: 'fa-solid fa-wand-magic-sparkles', 
              metric: 'TPS: 1.2k', 
              desc: '고객 맞춤형 초개인화 마케팅 에셋 자동 생성 시스템.',
              label: 'CREATIVE_MATRIX'
            },
            { 
              title: 'Autonomous Agents', 
              icon: 'fa-solid fa-user-gear', 
              metric: 'LAT: 0.04s', 
              desc: 'CS부터 업셀링까지 수행하는 자율 판단 AI 에이전트 군단.',
              label: 'AGENT_LOGIC'
            }
          ].map((item, i) => (
            <div key={i} className="group relative bg-[#050508]/80 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-12 overflow-hidden transition-all hover:bg-black hover:-translate-y-2 duration-500 shadow-2xl">
                
                {/* --- ENHANCED WHITE LIGHT EMISSION SYSTEM --- */}
                {/* 1. Base White Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-[80px] group-hover:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] transition-all duration-700 animate-pulse pointer-events-none"></div>
                
                {/* 2. Rotating Neural Flare (White Light) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[20px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md rotate-[45deg] animate-[whiteEnergyFlow_4s_linear_infinite] group-hover:via-white/40 group-hover:animate-[whiteEnergyFlow_2s_linear_infinite]"></div>
                </div>

                {/* 3. Deep Core Pulse */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/5 blur-[100px] group-hover:bg-white/10 transition-all pointer-events-none"></div>

                {/* HUD Corner Decals */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-500/20 group-hover:border-white transition-colors duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-500/20 group-hover:border-white transition-colors duration-500"></div>
                
                {/* Inner Purple Gradient (Kept for depth) */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet-600/5 blur-[60px] group-hover:bg-violet-600/15 transition-all"></div>

                <div className="flex flex-col h-full justify-between gap-12 relative z-10">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white transition-all shadow-xl overflow-hidden relative">
                          <i className={`${item.icon} text-3xl text-violet-400 group-hover:text-white group-hover:scale-125 transition-all duration-500`}></i>
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       </div>
                       <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest font-black group-hover:text-white/40 transition-colors">{item.label}</span>
                    </div>
                    
                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-400 transition-all leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-base leading-relaxed font-light italic group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-white/5 space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] text-white/80 font-black tracking-widest border border-white/20 px-4 py-1.5 rounded-full bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                          {item.metric}
                        </span>
                        <div className="flex gap-1">
                           {[...Array(5)].map((_, idx) => (
                             <div key={idx} className={`w-1 h-3 rounded-full ${idx < 4 ? 'bg-white animate-pulse' : 'bg-gray-800'}`} style={{ animationDelay: `${idx * 0.1}s`, opacity: idx < 4 ? 0.8 : 1 }}></div>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes beamFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes loading {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes whiteEnergyFlow {
          0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translate(-50%, -50%) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default AIEcommerceSection;
