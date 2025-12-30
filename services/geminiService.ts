
import { GoogleGenAI, Type } from "@google/genai";
import { MarketingStrategy } from "../types";

export const generateMarketingStrategy = async (businessDescription: string): Promise<MarketingStrategy> => {
  // process.env.API_KEY는 실행 환경에서 자동으로 주입됩니다.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Act as a world-class marketing strategist. Create a concise marketing strategy for this business: "${businessDescription}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING, description: "A punchy hero headline" },
          slogan: { type: Type.STRING, description: "A memorable brand slogan" },
          keyPoints: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "3-4 unique selling propositions" 
          },
          targetAudience: { type: Type.STRING, description: "Description of the primary demographic" },
          channelSuggestions: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Best platforms to market on" 
          }
        },
        required: ["headline", "slogan", "keyPoints", "targetAudience", "channelSuggestions"]
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("AI failed to generate content.");
  }

  try {
    return JSON.parse(text.trim());
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Could not generate strategy. Please try again.");
  }
};
