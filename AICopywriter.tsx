
import React, { useState } from 'react';
// geminiService.ts가 services/ 폴더에 있다면 아래처럼 유지, 아니라면 './geminiService'로 수정
import { generateMarketingStrategy } from './services/geminiService';
import { MarketingStrategy } from './types';

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.07)_0%,rgba(99,102,241,0.02)_40%,transparent_70%)] blur-[150px] pointer-events-none rounded-full"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24 space-y-10 text-center">
           <div className="flex items-center gap-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <span className="font-mono text-[9px] text-cyan-400 font-black tracking-[0.6em] uppercase italic">AI_STRATEGY_TERMINAL</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-cyan-500 to-transparent"></div>
           </div>
           <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-[0.9]">
             The <span className="text-cyan-400">Evolution</span> Engine
           </h2>
        </div>

        <div className="relative bg-[#050508]/60 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <div className="bg-white/[0.03] border-b border-white/10 px-10 py-5 flex justify-between items-center">
             <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
             </div>
             <span className="font-mono text-[8px] text-cyan-500/60 font-bold uppercase tracking-widest">GEMINI_FLASH_READY</span>
          </div>
          <div className="p-10 md:p-20 flex flex-col gap-10">
             <textarea
               className="w-full bg-transparent border-none text-xl md:text-3xl font-mono text-white placeholder:text-gray-900 focus:outline-none min-h-[140px] resize-none leading-snug"
               placeholder=">_ ENTER_BUSINESS_LOGIC..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
             />
             <div className="flex justify-end pt-10 border-t border-white/5">
                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="px-12 py-5 bg-cyan-600 rounded-xl font-black text-black uppercase italic hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50"
                >
                  {loading ? 'CALCULATING...' : 'EXECUTE_STRATEGY'}
                </button>
             </div>
          </div>
        </div>

        {strategy && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-10">
            <div className="md:col-span-12 bg-[#050508]/40 border border-white/5 p-12 rounded-[3rem]">
               <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase mb-6">{strategy.headline}</h3>
               <p className="text-xl text-gray-500 italic">"{strategy.slogan}"</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AICopywriter;
