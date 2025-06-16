import { NextResponse } from "next/server";
import OpenAI from "openai";
import { QUESTIONS_PROMPT } from "@/app/services/Constants";

export async function POST(req: Request) {
  try {
    const { jobPosition, jobDescription, duration, type } = await req.json();

    const FINAL_PROMPT = QUESTIONS_PROMPT.replace("{{jobTitle}}", jobPosition)
      .replace("{{jobDescription}}", jobDescription)
      .replace("{{duration}}", duration)
      .replace("{{type}}", type);

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPEN_ROUTER_API_KEY!,
    });

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });

    const aiResponse = completion.choices[0].message.content || "";

    const cleaned = aiResponse
      .replace(/^```json/, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error("AI error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
