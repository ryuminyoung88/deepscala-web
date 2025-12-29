
import React from 'react';

const FinalManifesto: React.FC = () => {
  return (
    <section className="relative py-48 px-6 overflow-hidden bg-[#010102]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none"></div>
      
      {/* Moving Cyber Beams Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-full"
            style={{
              top: `${20 * i + 10}%`,
              left: '-100%',
              animation: `dataSweep ${5 + i}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes dataSweep {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes glitchText {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .cyber-glitch:hover {
          animation: glitchText 0.3s infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-20">
          
          {/* Main Headline */}
          <div className="flex flex-col items-center gap-6 group">
            <div className="flex items-center gap-4 opacity-70">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"></span>
              <span className="font-mono text-[10px] text-cyan-400 tracking-[0.6em] uppercase font-bold">Phase_01: Neural_Conversion</span>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-cyan-500/10 blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
              <h2 className="relative font-mono text-lg md:text-2xl font-black tracking-[0.2em] text-white flex flex-col items-center uppercase text-center space-y-3">
                <span className="text-gray-700 font-light text-sm tracking-[0.4em]">--- SYSTEM_INITIALIZING ---</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 drop-shadow-[0_0_15px_rgba(0,242,255,0.5)] cyber-glitch cursor-default">
                  EVEN IF YOUR HANDS ARE TIED
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] cyber-glitch cursor-default">
                  REVENUE WILL EXPLODE
                </span>
              </h2>
            </div>
          </div>

          {/* Core Logic Manifesto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full max-w-4xl bg-white/5 p-1.5 rounded-md border border-white/10 backdrop-blur-sm">
            <div className="bg-[#050508]/80 p-8 flex flex-col gap-4 hover:bg-cyan-900/10 transition-colors group">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] group-hover:text-cyan-500">Input_Protocol</span>
              <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed uppercase tracking-widest">
                DEEPSCALA LOGIC <br className="hidden md:block"/> WILL SCALE YOUR CORE
              </p>
            </div>
            <div className="bg-[#050508]/90 p-8 flex flex-col gap-4 border-x border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-[0.2em] font-bold">Transformation_Cycle</span>
              <p className="font-mono text-lg md:text-xl text-white font-black leading-relaxed uppercase tracking-tighter">
                'LABOR' <span className="text-gray-700 font-light text-sm">→</span> <span className="text-cyan-400 drop-shadow-[0_0_8px_#00f2ff] animate-pulse">'AUTONOMY'</span>
              </p>
              <div className="h-1 w-full bg-cyan-500/20 absolute bottom-0 left-0">
                <div className="h-full bg-cyan-500 w-1/3 animate-[loading_2s_infinite]"></div>
              </div>
            </div>
            <div className="bg-[#050508]/80 p-8 flex flex-col gap-4 hover:bg-indigo-900/10 transition-colors group">
              <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-[0.2em] group-hover:text-indigo-300">Output_Result</span>
              <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed uppercase tracking-widest">
                DRIVING TOTAL <br className="hidden md:block"/> MARKET REVOLUTION
              </p>
            </div>
          </div>

          <style>{`
            @keyframes loading {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(300%); }
            }
          `}</style>

          {/* Final Punchline established previously */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_10px_#00f2ff]"></div>
            <div className="py-16 flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-mono text-lg md:text-2xl text-white font-black tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                  NOW, EMBRACE YOUR FREEDOM
                </span>
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <span className="font-mono text-sm md:text-lg text-cyan-400 tracking-[0.5em] uppercase font-bold animate-pulse drop-shadow-[0_0_12px_#00f2ff]">
                  DEEPSCALA DELIVERS
                </span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-1.5 h-1.5 bg-cyan-500 rotate-45 animate-spin"></div>
                <span className="font-mono text-[10px] text-gray-500 tracking-[0.6em] uppercase font-bold">System_Autonomous_Active</span>
                <div className="w-1.5 h-1.5 bg-cyan-500 rotate-45 animate-spin"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_10px_#6366f1]"></div>
          </div>
        </div>
      </div>

      {/* Extreme Detail HUD Decals - UPDATED NAME HERE */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10 opacity-20">
        <div className="h-48 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="[writing-mode:vertical-lr] font-mono text-[10px] text-cyan-500 tracking-[0.8em] uppercase">
          SECURE_CONNECTION_STABLE // ARCHITECT_DEEPSCALA
        </div>
      </div>
      
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-10 opacity-20 items-end">
        <div className="[writing-mode:vertical-lr] font-mono text-[10px] text-indigo-500 tracking-[0.8em] uppercase">
          METRIC_CONVERSION_RATE_MAX // 2025_BUILD
        </div>
        <div className="h-48 w-[1px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default FinalManifesto;
