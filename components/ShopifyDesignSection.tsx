
import React from 'react';

const ShopifyDesignSection: React.FC = () => {
  // 선명한 쇼피파이 브랜드 그린 컬러 (이미지 기반)
  const shopifyGreen = '#008060'; 
  const lightGreen = '#95bf47';

  return (
    <section id="shopify-design" className="relative py-64 px-6 overflow-hidden bg-[#010102]">
      {/* 1. LAYER: GRADIENT BRIDGE (TRANSITION ZONE) */}
      <div className="absolute inset-0 z-0">
        {/* Top Transition: Black to Green */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#010102] to-transparent z-20"></div>
        
        {/* Main Shopify Green Core (Centralized Glow) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#008060] via-[#004d39] to-[#010102] opacity-100"></div>
        
        {/* Bottom Transition: Green to Black */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#010102] to-transparent z-20"></div>

        {/* Ambient Light Sources to soften the transition */}
        <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,128,96,0.3)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(149,191,71,0.15)_0%,transparent_50%)]"></div>
        
        {/* Dynamic Grid Overlay (Fading at edges) */}
        <div className="absolute inset-0 opacity-[0.15]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
          <svg width="100%" height="100%">
            <pattern id="shopifyGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#shopifyGrid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-16 overflow-visible">
          <div className="relative space-y-8 max-w-4xl overflow-visible">
            <div className="flex items-center gap-6">
              <div className="relative h-[2px] w-12 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
              <span className="font-mono text-[10px] text-white/80 font-black tracking-[0.5em] uppercase italic">Sector_03 // Premium Shopify Studio</span>
            </div>
            
            <div className="relative group/title overflow-visible">
               <h2 className="text-5xl md:text-[75px] font-black text-white uppercase tracking-tighter leading-[0.85] italic transition-all duration-700 select-none overflow-visible pr-24 drop-shadow-2xl">
                 High-End <br/> 
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#95bf47] to-white drop-shadow-[0_0_25px_rgba(149,191,71,0.5)] block">
                   Shopify
                 </span>
               </h2>
            </div>
            
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed italic pr-12 max-w-2xl drop-shadow-md">
              단순한 구축을 넘어 브랜드의 <span className="text-white font-bold decoration-white/40 underline underline-offset-8">프리미엄 가치</span>를 증명합니다. <br/>
              사진 속 블랙 쇼핑백이 상징하는 럭셔리한 구매 경험을 디지털로 완벽하게 구현합니다.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-4 opacity-30">
             <div className="w-20 h-20 rounded-3xl border-2 border-white/20 flex items-center justify-center bg-black/10 backdrop-blur-sm shadow-2xl">
                <i className="fa-brands fa-shopify text-4xl text-white"></i>
             </div>
             <span className="text-6xl font-black text-white italic tracking-tighter leading-none pr-4">03</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            { 
              title: 'Premium Brand Launch', 
              desc: '럭셔리 브랜드의 아이덴티티를 투영한 픽셀 완벽 디자인.', 
              metric: '3.5%', 
              label: 'Avg Conversion',
              accent: '#fff'
            },
            { 
              title: 'Global Multi-Store', 
              desc: '다국어 및 통화 대응 리뉴얼 프로젝트. 복잡한 로직을 심플하게.', 
              metric: '+52%', 
              label: 'Checkout Velocity',
              accent: lightGreen
            }
          ].map((item, i) => (
            <div key={i} className="group relative bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden transition-all hover:bg-black hover:scale-[1.02] duration-500 shadow-2xl">
                {/* Decoration: Subtle green glow inside card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#008060]/20 blur-[60px] group-hover:bg-[#008060]/40 transition-all"></div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 overflow-visible">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#008060]/50 transition-all">
                    <i className="fa-brands fa-shopify text-2xl text-[#008060]"></i>
                  </div>
                  <div className="text-right overflow-visible">
                    <span className="text-4xl md:text-5xl font-black italic block mb-2 text-white transition-all pr-4" style={{ color: item.accent }}>{item.metric}</span>
                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest font-black">{item.label}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter group-hover:text-[#95bf47] transition-colors">{item.title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed font-light italic group-hover:text-gray-200 transition-colors">{item.desc}</p>
                </div>
                
                {/* Visual Accent: Interactive line */}
                <div className="mt-8 w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-[#008060] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyDesignSection;
