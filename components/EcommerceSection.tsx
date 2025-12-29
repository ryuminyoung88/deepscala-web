
import React from 'react';

const EcommerceSection: React.FC = () => {
  const marketplaces = [
    { name: 'Amazon', color: '#FF9900', icon: 'fa-brands fa-amazon', status: 'Global Leader' },
    { name: 'eBay', color: '#E53238', icon: 'fa-brands fa-ebay', status: 'Arbitrage Expert' },
    { name: 'Walmart', color: '#0071CE', icon: 'fa-solid fa-store', status: 'US Major Retail' },
    { name: 'Shopee', color: '#EE4D2D', icon: 'fa-solid fa-cart-shopping', status: 'SEA Powerhouse' }
  ];

  return (
    <section id="ecommerce" className="py-48 px-6 bg-[#010102] border-t border-white/5 relative overflow-hidden">
      {/* 1. LAYER: ARCHITECTURAL BACKGROUND & GLOW */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
        
        {/* Softened Background Aura to bridge the text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[140%] bg-[radial-gradient(circle_at_35%_50%,rgba(99,102,241,0.08)_0%,rgba(99,102,241,0.02)_40%,transparent_75%)] blur-[140px] pointer-events-none"></div>

        {/* Floating Connection Nodes */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg width="100%" height="100%" className="animate-[pulse_10s_infinite]">
            <circle cx="20%" cy="30%" r="2" fill="#6366f1" />
            <circle cx="80%" cy="40%" r="2" fill="#6366f1" />
            <circle cx="50%" cy="80%" r="3" fill="#6366f1" />
            <path d="M 20 30 L 80 40 L 50 80 Z" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Subtle Horizontal Scan-line behind title */}
        <div className="absolute top-[38%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-16 overflow-visible">
          
          {/* LEFT: REFINED TITLE BLOCK (Fixed 'N' Clipping) */}
          <div className="relative space-y-8 max-w-4xl overflow-visible">
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-12 bg-indigo-500 shadow-[0_0_15px_#6366f1]"></div>
              <span className="font-mono text-[10px] text-indigo-500 font-black tracking-[0.5em] uppercase italic">Sector_02 // Global Operation</span>
            </div>

            <div className="relative group/title overflow-visible">
              <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] italic transition-transform group-hover/title:-translate-y-1 duration-700 overflow-visible">
                <span className="relative inline-block pb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">Global</span> <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-600 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)] inline-block pr-6 pb-4">
                  Operation
                </span>
              </h2>
            </div>

            <div className="relative pl-10 overflow-visible">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]"></div>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed tracking-tight italic max-w-xl">
                국경을 초월한 <span className="text-white font-bold decoration-indigo-500/40 underline underline-offset-8">무역 자동화 프로토콜</span>. <br/>
                운영 효율을 400% 이상 극대화하는 글로벌 마켓 엔진.
              </p>
            </div>
          </div>

          {/* RIGHT: DECORATIVE STATUS */}
          <div className="hidden lg:flex flex-col items-end gap-6 opacity-30 relative overflow-visible">
            <div className="absolute -top-10 -right-4 text-[120px] font-black text-white/[0.03] italic tracking-tighter select-none pointer-events-none">02</div>
            <div className="flex flex-col items-end gap-2 pr-4">
              <span className="font-mono text-[9px] text-indigo-400 font-black tracking-widest uppercase">SYSCAP_V.4</span>
              <div className="w-32 h-[1px] bg-gradient-to-l from-indigo-500 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* GRID: MARKETPLACE NODES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaces.map((m, i) => (
            <div key={i} className="group relative bg-[#050508]/60 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] transition-all hover:border-indigo-500/40 hover:-translate-y-2 duration-500 shadow-2xl">
               {/* Internal Glow on Hover */}
               <div className="absolute -inset-2 bg-indigo-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
               
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <i className={`${m.icon} text-3xl`} style={{ color: m.color }}></i>
               </div>
               
               <div className="relative z-10 space-y-4">
                  <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest block font-black">{m.status}</span>
                  <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase group-hover:text-indigo-400 transition-colors pr-2">{m.name}</h4>
                  <div className="w-8 h-px bg-white/10 group-hover:w-full group-hover:bg-indigo-500/30 transition-all duration-700"></div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
