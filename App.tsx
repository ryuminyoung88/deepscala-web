import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

// --- AI SERVICE ---
const generateStrategy = async (desc: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Marketing strategy for: ${desc}`,
    config: { responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { headline: {type:Type.STRING}, points: {type:Type.ARRAY, items:{type:Type.STRING}} } } }
  });
  return JSON.parse(response.text || "{}");
};

// --- ALL COMPONENTS IN ONE ---
export default function App() {
  return (
    <div className="bg-[#010102] min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      {/* 여기에 제가 만든 모든 코드를 하나로 합쳐두었습니다. 배포 시 모든 화면이 나옵니다. */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-black italic tracking-tighter">DEEP<span className="text-cyan-400">SCALA</span></div>
        <button className="px-6 py-2 border border-cyan-500/50 text-cyan-400 text-xs font-black tracking-widest uppercase">Connect</button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-weaqA2T1bztql3jmcCjSNdRE/' frameBorder='0' width='100%' height='100%' className="absolute inset-0 opacity-50 scale-125" style={{pointerEvents:'none'}}></iframe>
        <div className="relative z-10 text-center">
          <h1 className="text-8xl md:text-[12rem] font-black italic tracking-tighter leading-none">SCALE</h1>
          <p className="text-cyan-400 font-mono tracking-[0.5em] mt-4 uppercase">Neural Business Architect</p>
        </div>
      </section>

      {/* AI Card Section (With White Light) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black italic mb-20 text-center uppercase">Intelligence Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1,2,3].map(i => (
            <div key={i} className="group relative bg-white/5 border border-white/10 p-12 rounded-[3rem] overflow-hidden transition-all hover:bg-black duration-500">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] animate-pulse pointer-events-none"></div>
               <h3 className="text-2xl font-black mb-4 uppercase italic">Core Module 0{i}</h3>
               <p className="text-gray-400 italic">스스로 진화하는 자율 주행 비즈니스 생태계를 구축합니다.</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-50 text-[10px] font-mono tracking-widest">
        © 2025 RYU KEUNYOUNG. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
