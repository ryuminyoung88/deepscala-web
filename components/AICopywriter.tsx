
import React, { useState, useEffect, useRef } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { MarketingStrategy } from '../types';

const AICopywriter: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 로그 추가 시 자동 스크롤
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] >_ ${msg}`]);
  };

  const handleGenerate = async () => {
    if (!input.trim() || loading) return;
    
    setLoading(true);
    setError(null);
    setStrategy(null);
    setLogs([]);
    
    // 즉각적인 피드백 시작
    addLog("SYSTEM_BOOT_SEQUENCE_INITIALIZED...");
    addLog("AUTHENTICATING_NEURAL_UPLINK...");
    
    try {
      // 가짜 지연을 주어 긴박한 분위기 조성 (실제 AI 호출과 병렬)
      const logSequence = [
        "PARSING_BUSINESS_CONTEXT...",
        "INJECTING_MARKETING_ALGORITHMS...",
        "CONSULTING_GEMINI_CORE_V3...",
        "DECODING_FUTURE_PATTERNS..."
      ];

      let logIdx = 0;
      const logInterval = setInterval(() => {
        if (logIdx < logSequence.length) {
          addLog(logSequence[logIdx]);
          logIdx++;
        } else {
          clearInterval(logInterval);
        }
      }, 400);

      // 실제 AI 호출
      const res = await generateMarketingStrategy(input);
      
      clearInterval(logInterval);
      addLog("DATA_RECEPTION_COMPLETE.");
      addLog("RENDERING_STRATEGY_INTERFACE...");
      
      setTimeout(() => {
        setStrategy(res);
        setLoading(false);
        addLog("UPLINK_STABLE. ANALYSIS_READY.");
      }, 800);

    } catch (err: any) {
      addLog("CRITICAL_CONNECTION_FAILURE.");
      addLog("ERROR_CODE: " + (err.message || "UNKNOWN_API_ERROR"));
      setError("AI 연결에 실패했습니다. API 키 설정 또는 네트워크를 확인하세요.");
      setLoading(false);
    }
  };

  return (
    <section id="engine" className="py-48 px-6 bg-[#010102] relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24 space-y-10 text-center">
           <div className="flex items-center gap-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <span className="font-mono text-[9px] text-cyan-400 font-black tracking-[0.6em] uppercase italic animate-pulse">Evolution_Engine_v4.0</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-cyan-500 to-transparent"></div>
           </div>
           <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase text-white leading-[0.9]">
             THE <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,242,255,0.5)]">EVOLUTION</span> ENGINE
           </h2>
           <p className="text-gray-500 font-mono text-xs tracking-widest uppercase max-w-xl">
             당신의 비즈니스 로직을 입력하십시오. <br/> 인공지능이 즉시 시장 지배를 위한 아키텍처를 설계합니다.
           </p>
        </div>

        {/* Terminal Input Box */}
        <div className="relative bg-[#050508]/90 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 focus-within:border-cyan-500/50">
          <div className="bg-white/[0.03] border-b border-white/10 px-10 py-5 flex justify-between items-center">
             <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40 animate-pulse"></div>
             </div>
             <div className="flex items-center gap-4">
               <span className="font-mono text-[8px] text-cyan-500/60 font-bold uppercase tracking-widest">
                 MODE: STRATEGIC_ANALYSIS
               </span>
               <div className="h-3 w-px bg-white/10"></div>
               <span className="font-mono text-[8px] text-gray-600 font-bold uppercase tracking-widest">
                 CORE: GEMINI_3_FLASH
               </span>
             </div>
          </div>
          
          <div className="p-10 md:p-16 flex flex-col gap-8">
             <textarea
               className="w-full bg-transparent border-none text-xl md:text-2xl font-mono text-white placeholder:text-gray-800 focus:outline-none min-h-[180px] resize-none leading-relaxed"
               placeholder=">_ 비즈니스 아이디어 또는 현재의 고민을 입력하세요..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
               disabled={loading}
             />
             
             {/* Dynamic Logs Terminal */}
             {(logs.length > 0 || loading) && (
               <div 
                 ref={scrollRef}
                 className="bg-black/60 p-6 rounded-2xl border border-white/5 font-mono text-[10px] text-cyan-500/80 h-32 overflow-y-auto space-y-1 scrollbar-hide"
               >
                 {logs.map((log, i) => (
                   <div key={i} className="animate-in fade-in slide-in-from-left-2">{log}</div>
                 ))}
                 {loading && <div className="animate-pulse">_</div>}
               </div>
             )}

             <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
                <div className="text-red-500 font-mono text-[10px] uppercase font-black tracking-widest">
                  {error && <span className="animate-bounce">!! {error}</span>}
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={loading || !input.trim()}
                  className={`w-full md:w-auto px-16 py-6 rounded-2xl font-black text-black uppercase italic tracking-tighter transition-all text-xl ${loading ? 'bg-gray-800 text-gray-600 cursor-wait' : 'bg-cyan-400 hover:bg-white hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] active:scale-95'}`}
                >
                  {loading ? 'PROCESSING...' : 'EXECUTE_UPLINK'}
                </button>
             </div>
          </div>
        </div>

        {/* Output Area */}
        {strategy && (
          <div className="mt-24 space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-indigo-900/40 via-[#050508] to-cyan-900/20 border border-white/10 p-12 md:p-20 rounded-[4rem] backdrop-blur-3xl relative group">
               <div className="absolute top-10 right-10 flex flex-col items-end gap-2 opacity-20">
                  <div className="w-24 h-[1px] bg-white"></div>
                  <span className="font-mono text-[8px] text-white uppercase tracking-[0.5em]">Result_ID: {Math.random().toString(16).slice(2,8).toUpperCase()}</span>
               </div>
               
               <div className="space-y-8 relative z-10">
                 <span className="font-mono text-[11px] text-cyan-400 font-black tracking-[0.6em] uppercase italic">Master_Headline</span>
                 <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">{strategy.headline}</h3>
                 <div className="inline-block px-8 py-3 bg-white/5 border border-white/10 rounded-xl">
                   <p className="text-2xl md:text-3xl text-cyan-400 font-light italic">"{strategy.slogan}"</p>
                 </div>
               </div>
            </div>

            {/* Sub Strategy Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="bg-[#050508]/60 border border-white/10 p-12 rounded-[3.5rem] space-y-10">
                  <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] font-black border-b border-white/5 pb-6">Strategic_Action_Items</h4>
                  <div className="space-y-8">
                    {strategy.keyPoints.map((point, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center font-mono text-cyan-500 text-sm font-black group-hover:bg-cyan-500 group-hover:text-black transition-all">0{i+1}</div>
                        <p className="flex-1 text-gray-300 text-lg italic leading-relaxed pt-1 group-hover:text-white transition-colors">{point}</p>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="flex flex-col gap-10">
                  <div className="bg-indigo-600/10 border border-indigo-500/20 p-10 rounded-[3rem] backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
                      <i className="fa-solid fa-users text-7xl text-white"></i>
                    </div>
                    <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-[0.4em] font-black block mb-4">Target_Demographic</span>
                    <p className="text-white text-xl italic font-medium leading-relaxed">{strategy.targetAudience}</p>
                  </div>

                  <div className="bg-emerald-600/10 border border-emerald-500/20 p-10 rounded-[3rem] backdrop-blur-md">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-[0.4em] font-black block mb-8">Optimal_Channels</span>
                    <div className="flex flex-wrap gap-3">
                      {strategy.channelSuggestions.map((channel, i) => (
                        <span key={i} className="px-6 py-2.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] font-mono text-emerald-300 uppercase font-black tracking-widest shadow-lg">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default AICopywriter;
