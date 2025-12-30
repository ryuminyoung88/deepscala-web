
import { GoogleGenAI, Type } from "@google/genai";
import { MarketingStrategy } from "../types";

export const generateMarketingStrategy = async (businessDescription: string): Promise<MarketingStrategy> => {
  // process.env.API_KEY is injected by the platform.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    당신은 세계 최고의 마케팅 전략가이자 비즈니스 아키텍트입니다. 
    다음 비즈니스 설명을 분석하여 혁신적인 마케팅 확장 전략을 수립하십시오.
    
    BUSINESS_DESCRIPTION: "${businessDescription}"
    
    응답 요구사항 (반드시 JSON 형식을 지킬 것):
    1. headline: 한국어로 된 강력하고 매혹적인 헤드라인 (공격적이고 진취적인 톤).
    2. slogan: 한국어로 된 짧고 기억에 남는 브랜드 슬로건.
    3. keyPoints: 한국어로 된 3-4가지 핵심 전략 액션 아이템.
    4. targetAudience: 한국어로 기술된 가장 적합한 핵심 타겟층.
    5. channelSuggestions: 한국어로 된 3-4가지 최적의 마케팅 채널.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            slogan: { type: Type.STRING },
            keyPoints: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            targetAudience: { type: Type.STRING },
            channelSuggestions: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["headline", "slogan", "keyPoints", "targetAudience", "channelSuggestions"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("AI_NULL_RESPONSE: 응답이 비어있습니다.");

    // JSON 파싱 전 공백 제거 및 정규화
    const cleanedJson = text.trim();
    return JSON.parse(cleanedJson);
  } catch (error: any) {
    console.error("Gemini Service Error:", error);
    // 더 구체적인 에러 메시지 생성
    if (error.message?.includes("API_KEY")) {
      throw new Error("API_KEY_INVALID: API 키 설정을 확인하세요.");
    }
    throw new Error(error.message || "GENERIC_API_FAILURE");
  }
};
