
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [missionId, setMissionId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // placeholder 기반으로 name 속성이 없으므로 input의 type이나 placeholder로 구분하거나 name을 추가해야 함.
    // 아래 input들에 name 속성을 명시적으로 추가하여 관리합니다.
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("PLEASE_COMPLETE_ALL_PROTOCOLS: 모든 필드를 입력해주세요.");
      return;
    }

    setStatus('sending');

    // 고유 미션 ID 생성 (시뮬레이션용)
    const newId = 'MSN_' + Math.random().toString(16).slice(2, 8).toUpperCase();
    setMissionId(newId);

    // 2.5초간 전송 시뮬레이션 후 이메일 클라이언트 호출
    setTimeout(() => {
      setStatus('success');
      
      // 실제 이메일 전송을 위한 mailto 링크 생성
      const subject = encodeURIComponent(`[DEEPSCALA_UPLINK] Mission from ${formData.name}`);
      const body = encodeURIComponent(`Source Name: ${formData.name}\nProtocol Address: ${formData.email}\n\nMission Details:\n${formData.message}`);
      
      // 약간의 지연 후 이메일 창 열기
      setTimeout(() => {
        window.location.href = `mailto:youkeunyoung@naver.com?subject=${subject}&body=${body}`;
      }, 500);
    }, 2500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section className="relative min-h-screen pt-56 pb-40 px-10 bg-[#010102] overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)] blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-indigo-500 shadow-[0_0_15px_#6366f1]"></div>
            <span className="font-mono text-xs text-indigo-400 font-black tracking-[0.6em] uppercase italic">Module_03 // Uplink</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black text-white italic uppercase tracking-tighter leading-none">
            ESTABLISH <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-cyan-500 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]">UPLINK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-[#050508]/80 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-16 space-y-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <i className="fa-solid fa-tower-broadcast text-8xl text-indigo-500"></i>
              </div>
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] block font-black">Direct_Secure_Line</span>
                <p className="text-4xl font-mono font-black text-white tracking-tighter hover:text-indigo-400 transition-colors cursor-pointer">010.8082.8802</p>
              </div>
              <div className="space-y-4 pt-10 border-t border-white/5">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] block font-black">Encryption_Gateway</span>
                <p className="text-2xl font-mono font-bold text-white tracking-tight hover:text-cyan-400 transition-colors cursor-pointer">youkeunyoung@naver.com</p>
              </div>
              <div className="pt-10 flex gap-6">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group">
                     <i className={`fa-brands ${i===1?'fa-linkedin-in':i===2?'fa-github':'fa-instagram'} text-gray-400 group-hover:text-cyan-400`}></i>
                   </div>
                 ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-[3rem] p-10 backdrop-blur-sm">
              <p className="text-gray-400 text-lg leading-relaxed italic font-light">
                "성장을 위한 모든 연결은 데이터로 증명됩니다. <br/>
                당신의 비즈니스 알고리즘을 DEEPSCALA와 동기화하십시오."
              </p>
            </div>
          </div>

          {/* Terminal Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#050508]/90 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 md:p-20 overflow-hidden relative shadow-2xl min-h-[600px] flex flex-col justify-center">
              
              {status === 'idle' || status === 'sending' ? (
                <>
                  <div className="absolute top-8 right-12 font-mono text-[9px] text-indigo-500/50 tracking-[0.4em] uppercase font-black animate-pulse flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${status === 'sending' ? 'bg-yellow-500' : 'bg-indigo-500'}`}></div>
                    Status: {status === 'sending' ? 'Transmitting_Data...' : 'Terminal_Standby'}
                  </div>
                  
                  <form className="space-y-12" onSubmit={handleSubmit}>
                    <div className="space-y-4 group">
                      <label className="font-mono text-[11px] text-indigo-400 uppercase tracking-[0.4em] font-black block group-hover:text-white transition-colors">Identify_Source (Name)</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text" 
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-all font-mono" 
                        placeholder=">_ INPUT_NAME" 
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="space-y-4 group">
                      <label className="font-mono text-[11px] text-indigo-400 uppercase tracking-[0.4em] font-black block group-hover:text-white transition-colors">Protocol_Address (Email)</label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" 
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-all font-mono" 
                        placeholder=">_ INPUT_EMAIL" 
                        disabled={status === 'sending'}
                      />
                    </div>
                    <div className="space-y-4 group">
                      <label className="font-mono text-[11px] text-indigo-400 uppercase tracking-[0.4em] font-black block group-hover:text-white transition-colors">Mission_Details (Message)</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:outline-none focus:border-indigo-500 transition-all font-mono min-h-[150px] resize-none leading-relaxed" 
                        placeholder=">_ DESCRIBE_YOUR_VISION"
                        disabled={status === 'sending'}
                      ></textarea>
                    </div>
                    
                    <div className="pt-10 flex justify-end">
                      <button 
                        type="submit"
                        disabled={status === 'sending'}
                        className={`relative overflow-hidden px-16 py-6 rounded-2xl font-black text-white uppercase italic tracking-tighter transition-all text-xl ${status === 'sending' ? 'bg-indigo-900 cursor-wait' : 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] active:scale-95'}`}
                      >
                        {status === 'sending' ? (
                          <div className="flex items-center gap-4">
                            <span>UPLOADING...</span>
                            <div className="w-24 h-1 bg-white/20 relative rounded-full overflow-hidden">
                              <div className="absolute top-0 left-0 h-full bg-cyan-400 animate-[uplink_2s_infinite]"></div>
                            </div>
                          </div>
                        ) : 'INITIATE_UPLINK'}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center space-y-10 animate-in fade-in zoom-in duration-700">
                  <div className="w-32 h-32 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                    <i className="fa-solid fa-check text-5xl text-emerald-500"></i>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">UPLINK_ESTABLISHED</h3>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">MISSION_ID: <span className="text-cyan-400">{missionId}</span></p>
                  </div>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl max-w-md font-mono text-xs text-gray-500 leading-relaxed uppercase tracking-widest text-left">
                    [SYSTEM]: YOUR DATA HAS BEEN ENCRYPTED AND SENT TO THE CORE. <br/>
                    [NOTICE]: OPENING SECURE MAIL GATEWAY... <br/>
                    [EXPECTED]: OPERATOR WILL DECODE YOUR MESSAGE WITHIN 24H.
                  </div>
                  <button 
                    onClick={resetForm}
                    className="font-mono text-[10px] text-cyan-500 border border-cyan-500/20 px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all uppercase tracking-[0.3em] font-black"
                  >
                    RETURN_TO_TERMINAL
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes uplink {
          0% { transform: translateX(-100%); width: 30%; }
          50% { transform: translateX(50%); width: 60%; }
          100% { transform: translateX(150%); width: 30%; }
        }
      `}</style>
    </section>
  );
};

export default ContactPage;
