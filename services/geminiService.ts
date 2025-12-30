
import { GoogleGenAI, Type } from "@google/genai";
import { MarketingStrategy } from "../types";

export const generateMarketingStrategy = async (businessDescription: string): Promise<MarketingStrategy> => {
  // process.env.API_KEY는 플랫폼에 의해 주입됩니다.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Act as a world-class marketing architect and business strategist. 
    Analyze the following business description and provide a high-level marketing expansion strategy.
    
    BUSINESS_DESCRIPTION: "${businessDescription}"
    
    RESPONSE_REQUIREMENTS:
    1. headline: A futuristic, aggressive, and catchy hero headline (in Korean).
    2. slogan: A short, memorable brand slogan that captures the soul of the business (in Korean).
    3. keyPoints: 3-4 highly strategic and innovative action items to dominate the market (in Korean).
    4. targetAudience: A precise description of the primary target demographic (in Korean).
    5. channelSuggestions: 3-4 best digital platforms to execute this strategy.
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
    if (!text) throw new Error("AI_NULL_RESPONSE");

    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};
