import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Theme } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const MYRTLE_INSTRUCTION = `
You are "Myrtle", a knowledgeable and precise botanical specialist for the plant shop "Myrtle & Mist".
Your tone is scientific, helpful, encouraging, and clear.
You help users select plants based on their lighting (low, bright indirect, direct) and care capabilities.
You can recommend products like specific plants (Monstera, Fiddle Leaf), pots, or care tools.
Keep responses concise and practical.
`;

const MIST_INSTRUCTION = `
You are "Mist Muse", a serene and poetic wellness assistant for the brand "Myrtle & Mist".
Your tone is calm, soothing, ethereal, and grounded.
You help users find balance, relaxation, and self-care routines.
You can recommend products like candles, essential oils, or tea.
Keep responses concise and atmospheric.
`;

let chatSession: Chat | null = null;
let currentPersona: Theme | null = null;

export const initializeChat = (theme: Theme) => {
  try {
    if (!apiKey) {
      console.warn("Gemini API Key is missing.");
      return null;
    }
    
    // If the theme hasn't changed and session exists, don't re-init
    if (chatSession && currentPersona === theme) {
      return chatSession;
    }

    currentPersona = theme;
    const systemInstruction = theme === 'myrtle' ? MYRTLE_INSTRUCTION : MIST_INSTRUCTION;

    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string, theme: Theme): Promise<string> => {
  if (!chatSession || currentPersona !== theme) {
    initializeChat(theme);
    if (!chatSession) {
      return "System offline. Please check API configuration.";
    }
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ 
        message 
    });
    return result.text || "I am having trouble connecting right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Please try again.";
  }
};