
import React, { useEffect, useState } from 'react';

const FintechSection: React.FC = () => {
  const emeraldColor = '#10b981';
  const mintColor = '#00ffcc';
  const [txId, setTxId] = useState('TX_' + Math.random().toString(16).slice(2, 10).toUpperCase());

  useEffect(() => {
    const timer = setInterval(() => {
      setTxId('TX_' + Math.random().toString(16).slice(2, 10).toUpperCase());
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="fintech" className="py-48 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-y-0 right-10 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent pointer-events-none opacity-50 hidden xl:block">
         <div className="[writing-mode:vertical-lr] font-mono text-[7px] text-emerald-500/30 tracking-[1em] py-20 uppercase">
           LIVE_LEDGER // {txId}
         </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-12 overflow-visible">
          <div className="space-y-8 overflow-visible">
            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-sm font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-black inline-block">
              PROTOCOL_ID: AES_ACTIVE
            </div>
            <div className="overflow-visible">
              <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] italic pr-32">
                Capital <br/> 
                <span className="inline-block drop-shadow-[0_0_25px_rgba(0,255,204,0.3)]" style={{ color: mintColor }}>GOVERNANCE</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl italic border-l-2 pl-8" style={{ borderLeftColor: `${emeraldColor}66` }}>
              글로벌 결제 승인율 최적화와 리스크 최소화를 위한 <span className="text-emerald-400 font-bold italic">거버넌스 아키텍처</span>.
            </p>
          </div>
        </div>

        <div className="border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl bg-[#050505]/80 backdrop-blur-xl relative">
          {[
            { cat: 'Cross-border Settlement', detail: 'FX Fee 15% 이상 절감 시스템 구축', metric: 'FX_OPT' },
            { cat: 'Subscription Logic', detail: '정기 결제 실패 방지를 통한 리텐션 확보', metric: 'RET_MAX' },
            { cat: 'Fraud & Risk (FMS)', detail: '차지백 리스크 0.1% 미만 관리', metric: 'RISK_MIN' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-12 bg-transparent border-b border-white/5 last:border-0 hover:bg-emerald-500/[0.04] transition-all overflow-visible">
              <div className="space-y-3 overflow-visible">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-500 text-black font-black">{item.metric}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter pr-8">{item.cat}</h4>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-gray-400 font-light text-base leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FintechSection;
