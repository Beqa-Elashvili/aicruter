import { FEEDBACK_PROMPT } from "@/app/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const { conversation } = await req.json();
  const FINAL_PROMPT = FEEDBACK_PROMPT.replace(
    "{{conversation}}",
    JSON.stringify(conversation)
  );

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPEN_ROUTER_API_KEY!,
    });

    const completion = await openai.chat.completions.create({
      model: "openrouter/cypher-alpha:free",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });
    return NextResponse.json(completion.choices[0].message);
  } catch (error: any) {
    console.error("AI error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
