
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToEngine = () => {
    const engineSection = document.getElementById('engine');
    if (engineSection) {
      engineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-10 pointer-events-none">
      <div className="max-w-full mx-auto flex justify-between items-start pointer-events-auto">
        
        {/* LEFT: HYPER-CYBER LOGO SYSTEM */}
        <div className="flex items-center gap-8 group cursor-pointer relative py-8" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          
          {/* 3D APERTURE CORE - ENHANCED LAYER SYSTEM */}
          <div className="relative h-20 w-20 flex items-center justify-center">
            {/* Background Energy Aura */}
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[25px] group-hover:bg-cyan-400/25 transition-all duration-1000 animate-pulse"></div>
            
            {/* Triple Nested HUD Rings */}
            <div className="absolute inset-0 border-t-2 border-b-2 border-cyan-400/40 rounded-full animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute inset-2 border-l border-r border-indigo-500/30 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 border-t border-cyan-300/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            
            {/* Outer Frame Decals */}
            <div className="absolute -inset-2 border border-cyan-500/10 rounded-lg pointer-events-none transition-all group-hover:border-cyan-500/30">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/80"></div>
            </div>

            {/* Core Orb Container */}
            <div className="relative h-14 w-14 bg-[#010102] rounded-full overflow-hidden border border-white/20 shadow-[0_0_35px_rgba(0,242,255,0.4)] group-hover:scale-110 transition-transform duration-700">
              <iframe 
                src='https://my.spline.design/reactiveorb-uYr6LSbLOR3sHg8d6l5F1QG9/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                className="scale-[3.5] brightness-[1.8] saturate-[2]"
                style={{ pointerEvents: 'none' }}
              ></iframe>
              {/* Internal Laser Scan */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent h-[2px] w-full animate-[laserSweep_2.5s_ease-in-out_infinite] pointer-events-none z-10"></div>
            </div>

            {/* Digital Coordinate Badge */}
            <div className="absolute -right-4 -bottom-2 bg-black/90 backdrop-blur-xl border border-cyan-400/50 px-2 py-0.5 rounded-[2px] shadow-[0_0_10px_rgba(0,242,255,0.2)]">
              <span className="font-mono text-[7px] text-cyan-300 font-black tracking-tighter uppercase block">CORE_v4.2.1</span>
            </div>
          </div>

          {/* Typography: ADVANCED LOGIC-TYPE */}
          <div className="flex flex-col relative">
            <div className="relative flex items-center h-10 overflow-visible">
              <h1 className="relative font-black tracking-tighter text-3xl md:text-4xl uppercase italic text-white flex items-center gap-2 group-hover:tracking-normal transition-all duration-500">
                <span className="relative">
                  DEEP
                  <span className="absolute inset-0 text-red-500/60 translate-x-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-[glitch_0.15s_infinite] pointer-events-none mix-blend-screen">DEEP</span>
                  <span className="absolute inset-0 text-blue-500/60 -translate-x-[2px] opacity-0 group-hover:opacity-100 group-hover:animate-[glitch_0.15s_infinite_reverse] pointer-events-none mix-blend-screen">DEEP</span>
                </span>
                
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-500 relative drop-shadow-[0_0_15px_rgba(0,242,255,0.8)]">
                  SCALA
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full -translate-x-full group-hover:animate-[textSweep_2s_infinite]"></span>
                </span>

                <div className="w-[3px] h-8 bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent ml-2 shadow-[0_0_12px_#00f2ff] animate-pulse"></div>
              </h1>
            </div>

            <div className="flex items-center gap-3 mt-1 overflow-hidden">
              <div className="h-[1.5px] w-6 bg-cyan-500/80 shadow-[0_0_8px_#00f2ff]"></div>
              <span className="font-mono text-[8px] text-cyan-500/70 tracking-[0.6em] uppercase font-black whitespace-nowrap group-hover:text-cyan-300 transition-colors">
                SYSTEM_ARCHITECT // OPTIMIZED_SYNC
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* RIGHT: CONNECT BUTTON & STATUS */}
        <div className="flex flex-col items-end pt-24 transition-all duration-500">
           <div className="absolute top-0 right-32 w-[2px] h-24 bg-gradient-to-b from-transparent via-cyan-500/20 to-cyan-500 shadow-[0_0_15px_rgba(0,242,255,0.5)]"></div>
           
           <div className="flex items-center gap-12">
              <button 
                onClick={scrollToEngine}
                className="relative group overflow-hidden rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 pointer-events-auto"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <div className="absolute top-0 left-0 w-[200%] h-full flex animate-[scrollData_3s_linear_infinite] whitespace-nowrap py-2 px-4 pointer-events-none">
                    <span className="font-mono text-[10px] text-cyan-400/40 font-black tracking-widest leading-none">
                       01010111001 // SECURE_ACCESS // INITIALIZING_CORE_SYSTEM_v.4.2.1 // SYNCING_NEURAL_NODES // 01010111001 //
                    </span>
                  </div>
                </div>

                <div className="relative px-14 py-5 border-2 border-cyan-500/40 bg-black/40 backdrop-blur-md text-sm font-mono font-black uppercase tracking-[0.5em] text-cyan-400 group-hover:text-white group-hover:border-cyan-400 transition-all shadow-[inset_0_0_20px_rgba(0,242,255,0)] group-hover:shadow-[inset_0_0_40px_rgba(0,242,255,0.3),0_0_20px_rgba(0,242,255,0.2)]">
                  CONNECT
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-1 w-full animate-[laserSweep_1.5s_linear_infinite] opacity-0 group-hover:opacity-100"></div>
                </div>

                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 group-hover:scale-125 transition-transform"></div>
              </button>
           </div>
           
           <div className="mt-4 mr-2 flex items-center gap-4 opacity-40">
             <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gray-700"></div>
             <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest font-black">CORE_ADDR: 0xFD...2A9</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes laserSweep {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes textSweep {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 1px); opacity: 0.8; }
          40% { transform: translate(-1px, -2px); opacity: 0.9; }
          60% { transform: translate(2px, 1px); opacity: 0.7; }
          80% { transform: translate(1px, -1px); opacity: 1; }
          100% { transform: translate(0); }
        }
        @keyframes scrollData {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
