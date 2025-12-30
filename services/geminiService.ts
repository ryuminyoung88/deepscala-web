
import { GoogleGenAI, Type } from "@google/genai";
import { MarketingStrategy } from "../types";

export const generateMarketingStrategy = async (businessDescription: string): Promise<MarketingStrategy> => {
  // AI 인스턴스 생성 (API_KEY는 환경 변수에서 직접 참조)
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    당신은 세계 최고의 마케팅 전략가이자 비즈니스 아키텍트입니다. 
    사용자의 비즈니스 아이디어를 분석하여 혁신적인 마케팅 확장 전략을 수립하십시오.
    
    사용자 아이디어: "${businessDescription}"
    
    반드시 다음 구조의 JSON 형식으로만 답변하세요:
    1. headline: 한국어로 된 강력하고 매혹적인 헤드라인.
    2. slogan: 한국어로 된 짧고 기억에 남는 브랜드 슬로건.
    3. keyPoints: 한국어로 된 3~4가지 핵심 전략 아이템 (배열).
    4. targetAudience: 한국어로 기술된 핵심 타겟층 설명.
    5. channelSuggestions: 한국어로 된 3~4가지 최적의 마케팅 채널 (배열).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            slogan: { type: Type.STRING },
            keyPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
            targetAudience: { type: Type.STRING },
            channelSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["headline", "slogan", "keyPoints", "targetAudience", "channelSuggestions"]
        }
      }
    });

    const responseText = response.text;
    if (!responseText) throw new Error("AI_EMPTY_RESPONSE");

    // 마크다운 코드 블록 제거 및 순수 JSON 추출
    const cleanedText = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanedText);
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    throw new Error(error.message || "UPLINK_STABILITY_FAILURE");
  }
};
