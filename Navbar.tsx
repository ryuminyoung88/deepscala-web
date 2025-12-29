
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToEngine = () => {
    const engineSection = document.getElementById('engine');
    if (engineSection) {
      engineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-10 pointer-events-none">
      <div className="max-w-full mx-auto flex justify-between items-start pointer-events-auto py-8">
        
        {/* LEFT: LOGO - 직선적이고 단단한 디자인 (변형 방지) */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative h-12 w-12 md:h-14 md:w-14 bg-black border border-white/10 rounded-sm overflow-hidden shadow-[0_0_20px_rgba(0,242,255,0.2)]">
             <iframe 
                src='https://my.spline.design/reactiveorb-uYr6LSbLOR3sHg8d6l5F1QG9/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                className="scale-[2.2] brightness-[1.1] contrast-[1.2]"
                style={{ pointerEvents: 'none' }}
              ></iframe>
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-2xl md:text-3xl text-white tracking-tighter uppercase flex items-center gap-2 leading-none">
              <span className="text-white">DEEP</span>
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(0,242,255,0.5)]">SCALA</span>
              <div className="w-[2px] h-6 bg-cyan-500 animate-[pulse_1.5s_infinite]"></div>
            </h1>
            <span className="font-mono text-[7px] text-gray-600 tracking-[0.5em] uppercase font-bold mt-1">SYSTEM_ARCHITECT // OPTIMIZED</span>
          </div>
        </div>

        {/* RIGHT: CONNECT BUTTON */}
        <div className="flex flex-col items-end gap-3">
           <button 
             onClick={scrollToEngine}
             className="relative group overflow-hidden pointer-events-auto"
           >
             <div className="relative px-8 md:px-10 py-3 bg-black/40 border border-cyan-500/20 backdrop-blur-md transition-all group-hover:border-cyan-400 group-hover:bg-cyan-400/5 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                <span className="font-mono text-xs md:text-sm font-black text-cyan-400 tracking-[0.4em] group-hover:text-white transition-colors uppercase">
                  CONNECT
                </span>
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400 opacity-50"></div>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-cyan-400 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-cyan-400 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400 opacity-50"></div>
             </div>
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
