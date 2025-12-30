
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'services' | 'contact') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const scrollToEngine = () => {
    // 1. 현재 페이지가 홈이 아니면 홈으로 먼저 이동
    if (currentPage !== 'home') {
      onNavigate('home');
    }

    // 2. 페이지 전환 후 컴포넌트가 렌더링될 시간을 충분히 줌 (500ms)
    setTimeout(() => {
      const engineSection = document.getElementById('engine');
      if (engineSection) {
        engineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // 실패 시 재시도 (렌더링 지연 대응)
        setTimeout(() => {
          document.getElementById('engine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }, 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-10 pointer-events-none">
      <div className="max-w-full mx-auto flex justify-between items-start pointer-events-auto">
        
        {/* 로고 영역 */}
        <div className="flex items-center gap-8 group cursor-pointer relative py-8" onClick={() => onNavigate('home')}>
          <div className="relative h-20 w-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[25px] group-hover:bg-cyan-400/25 transition-all duration-1000 animate-pulse"></div>
            <div className="relative h-14 w-14 bg-[#010102] rounded-full overflow-hidden border border-white/20 shadow-[0_0_35px_rgba(0,242,255,0.4)] transition-transform group-hover:scale-110">
              <iframe 
                src='https://my.spline.design/reactiveorb-uYr6LSbLOR3sHg8d6l5F1QG9/' 
                frameBorder='0' width='100%' height='100%'
                className="scale-[3.5] brightness-[1.8] saturate-[2] pointer-events-none"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col relative">
            <h1 className="font-black tracking-tighter text-3xl md:text-4xl uppercase italic text-white flex items-center gap-2">
              DEEP<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-500">SCALA</span>
            </h1>
            <span className="font-mono text-[8px] text-cyan-500/70 tracking-[0.6em] uppercase font-black">SYSTEM_ARCHITECT</span>
          </div>
        </div>
        
        {/* 네비게이션 영역 (스크린샷 디자인 적용 부분) */}
        <div className="flex flex-col items-end pt-24 gap-6">
           <div className="flex gap-8 items-center bg-black/40 backdrop-blur-2xl px-10 py-4 rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <button 
                onClick={() => onNavigate('home')}
                className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all hover:text-cyan-400 ${currentPage === 'home' ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all hover:text-cyan-400 ${currentPage === 'services' ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}
              >
                Services
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className={`font-mono text-[10px] uppercase tracking-[0.3em] transition-all hover:text-cyan-400 ${currentPage === 'contact' ? 'text-cyan-400 font-bold' : 'text-gray-500'}`}
              >
                Contact
              </button>
              
              {/* 구분선 */}
              <div className="w-[1px] h-4 bg-white/10 mx-2"></div>
              
              {/* AI_Connect 버튼 (하늘색 점 포함) */}
              <button 
                onClick={scrollToEngine}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-white hover:text-cyan-400 font-bold flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_#00f2ff]"></div>
                AI_Connect
              </button>
           </div>
           
           <div className="mr-4 opacity-40 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
             <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest font-black">SYNC_STABLE_V9.2.4</span>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
