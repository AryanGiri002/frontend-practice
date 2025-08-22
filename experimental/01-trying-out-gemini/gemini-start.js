import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is equ join in SQL?",
  });
  console.log(response.text);
}

main();