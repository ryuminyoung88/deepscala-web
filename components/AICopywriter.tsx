
import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { MarketingStrategy } from '../types';

const AICopywriter: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await generateMarketingStrategy(input);
      setStrategy(res);
    } catch (err) {
      setError("COMMUNICATION_LINK_ERROR: RETRY REQUIRED");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="engine" className="py-48 px-6 bg-[#010102] relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Expanded Atmospheric Aura for better blending */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.07)_0%,rgba(99,102,241,0.02)_40%,transparent_70%)] blur-[150px] pointer-events-none rounded-full"></div>

      {/* Horizontal Visual Bridge Scan-line */}
      <div className="absolute top-[42%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-sm pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24 space-y-10 overflow-visible">
           <div className="flex items-center gap-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <span className="font-mono text-[9px] text-cyan-400 font-black tracking-[0.6em] uppercase italic">AI_STRATEGY_TERMINAL // v.2.0</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-cyan-500 to-transparent"></div>
           </div>
           
           <div className="relative overflow-visible text-center">
             {/* Background Ghost Text for Continuity */}
             <h2 className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/[0.01] text-7xl md:text-[12rem] font-black uppercase tracking-tighter select-none pointer-events-none italic whitespace-nowrap">
               EVOLVE
             </h2>

             <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white relative z-10 overflow-visible leading-[0.9]">
               <span className="relative inline-block pb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">The</span> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_30px_rgba(0,242,255,0.4)] block md:inline md:mx-4 px-2">Evolution</span> 
               <br className="hidden md:block"/> 
               <span className="inline-block pr-12 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400">Engine</span>
             </h2>
             
             {/* Technical HUD Underline */}
             <div className="mt-8 flex items-center justify-center gap-4 opacity-30">
                <div className="w-2 h-2 border border-cyan-500 rotate-45"></div>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                <div className="w-2 h-2 border border-cyan-500 rotate-45"></div>
             </div>
           </div>
        </div>

        {/* TERMINAL UI */}
        <div className="relative bg-[#050508]/60 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-white/[0.03] border-b border-white/10 px-10 py-5 flex justify-between items-center">
             <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
             </div>
             <div className="font-mono text-[8px] text-gray-700 tracking-[0.4em] uppercase flex items-center gap-4 font-bold">
                <span>GEMINI_FLASH_STABLE</span>
                <span className="text-cyan-500/60">[CORE_ACCESS_AUTHORIZED]</span>
             </div>
          </div>

          <div className="p-10 md:p-20 flex flex-col gap-10">
             <div className="relative">
                <textarea
                  className="w-full bg-transparent border-none text-xl md:text-3xl font-mono text-white placeholder:text-gray-900 focus:outline-none min-h-[140px] resize-none leading-snug"
                  placeholder=">_ ENTER_BUSINESS_LOGIC_PARAMETERS..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                {!input && <div className="absolute left-[2px] top-[4px] w-6 h-10 bg-cyan-500/20 animate-pulse"></div>}
             </div>

             <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-white/5">
                <div className="flex gap-12">
                   <div className="space-y-2">
                      <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest block">Complexity_Index</span>
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-3 ${i < (input.length / 25) ? 'bg-cyan-500' : 'bg-gray-800'}`}></div>
                        ))}
                      </div>
                   </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className={`group relative px-12 py-5 bg-cyan-600 rounded-xl overflow-hidden transition-all transform active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_40px_rgba(0,242,255,0.4)]'}`}
                >
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10 font-black text-black uppercase tracking-tighter italic flex items-center gap-4 text-base">
                    {loading ? (
                      <>CALCULATING <i className="fas fa-spinner animate-spin"></i></>
                    ) : (
                      <>EXECUTE_STRATEGY <i className="fas fa-bolt"></i></>
                    )}
                  </span>
                </button>
             </div>
          </div>
        </div>

        {/* RESULTS - Optimized Cards */}
        {strategy && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="md:col-span-12 bg-[#050508]/40 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] group border border-white/5 hover:border-cyan-500/20 transition-all">
               <span className="font-mono text-[9px] text-cyan-500 font-black tracking-[0.4em] mb-6 block uppercase">Vector_Headline // Scale_Main</span>
               <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-tight mb-6 group-hover:text-cyan-400 transition-colors pr-8">
                 {strategy.headline}
               </h3>
               <p className="text-xl text-gray-500 font-light italic border-l-2 border-indigo-500/30 pl-6">
                 "{strategy.slogan}"
               </p>
            </div>

            <div className="md:col-span-5 bg-[#050508]/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/5 space-y-8 group overflow-hidden relative">
               <span className="font-mono text-[9px] text-indigo-400 font-black tracking-[0.4em] block uppercase">Target_Architecture</span>
               <p className="text-lg text-gray-300 font-light leading-relaxed">
                 {strategy.targetAudience}
               </p>
               <div className="flex flex-wrap gap-2">
                  {strategy.channelSuggestions.map((c, i) => (
                    <span key={i} className="px-3 py-1.5 bg-indigo-500/5 border border-indigo-500/20 rounded-md font-mono text-[9px] text-indigo-400 font-bold uppercase">
                      {c}
                    </span>
                  ))}
               </div>
            </div>

            <div className="md:col-span-7 bg-[#050508]/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/5 space-y-8">
               <span className="font-mono text-[9px] text-cyan-500 font-black tracking-[0.4em] block uppercase">Execution_Directives</span>
               <div className="grid grid-cols-1 gap-6">
                  {strategy.keyPoints.map((p, i) => (
                    <div key={i} className="flex gap-6 group/item">
                       <span className="font-mono text-lg text-cyan-500/20 font-black group-hover/item:text-cyan-400 transition-colors">0{i+1}</span>
                       <p className="text-base text-gray-400 group-hover/item:text-white transition-colors leading-relaxed">
                         {p}
                       </p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AICopywriter;
