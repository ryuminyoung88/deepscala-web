
import React from 'react';

const ServicesPage: React.FC = () => {
  const serviceList = [
    {
      id: '01',
      title: 'AI Conversion Architecture',
      desc: '뉴럴 마케팅 알고리즘을 통해 고객의 잠재 의식을 분석하고, 압도적인 구매 전환율을 설계합니다.',
      tags: ['NEURAL_DATA', 'UX_PSYCHOLOGY']
    },
    {
      id: '02',
      title: 'Global Scale-up Engine',
      desc: 'Shopify 기반의 고성능 스토어 구축부터 전 세계 마켓플레이스 자율 운영 시스템까지 제공합니다.',
      tags: ['SHOPIFY_EXPERT', 'GLOBAL_LOGIC']
    },
    {
      id: '03',
      title: 'Autonomous Business Logic',
      desc: '사람의 개입 없이 스스로 진화하는 비즈니스 구조를 아키텍처링하여 운영 효율을 400% 개선합니다.',
      tags: ['ZERO_LABOR', 'AUTO_SCALING']
    },
    {
      id: '04',
      title: 'Intelligence Data Core',
      desc: '빅데이터 기반의 예측 분석을 통해 비즈니스의 다음 성장 지점을 정확하게 타격합니다.',
      tags: ['PREDICTIVE', 'DATA_MINING']
    }
  ];

  return (
    <section className="relative min-h-screen pt-56 pb-40 px-10 bg-[#010102] overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(0,242,255,0.06),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-cyan-500 shadow-[0_0_15px_#00f2ff]"></div>
            <span className="font-mono text-xs text-cyan-400 font-black tracking-[0.6em] uppercase italic">Module_02 // Global Expertise</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">
            ENGINEERED <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_30px_rgba(0,242,255,0.4)]">GROWTH.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceList.map((s) => (
            <div key={s.id} className="group relative bg-[#050508]/80 backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-16 overflow-hidden transition-all hover:border-cyan-500/30 hover:-translate-y-2 duration-700">
              <div className="absolute top-0 right-0 p-16 font-mono text-7xl text-white/[0.03] font-black group-hover:text-cyan-500/10 transition-colors italic select-none">{s.id}</div>
              
              <div className="space-y-10 relative z-10">
                <div className="flex gap-3">
                  {s.tags.map(t => (
                    <span key={t} className="px-4 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded-full font-mono text-[9px] text-cyan-400/70 font-bold uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter group-hover:text-cyan-400 transition-colors duration-500 pr-12">{s.title}</h3>
                <p className="text-gray-400 text-xl leading-relaxed font-light italic border-l-2 border-white/5 pl-8">{s.desc}</p>
                <div className="pt-10 flex items-center justify-between group-hover:translate-x-2 transition-transform duration-500">
                  <span className="font-mono text-[10px] text-cyan-500 font-bold uppercase tracking-[0.3em]">Build_Future_Protocol</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
