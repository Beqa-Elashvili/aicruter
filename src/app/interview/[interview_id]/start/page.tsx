"use client";

import { useInterviewData } from "@/app/providers/InterviewProvider";
import { Timer, Bot, Mic, Phone } from "lucide-react";
import React, { useEffect } from "react";
import Vapi from "@vapi-ai/web";
import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import AlertComfirmation from "./_components/AlertComfirmation";

function StratInterview() {
  const { interviewInfo, setInterviewInfo } = useInterviewData();

  const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);

  const startCall = () => {
    let questionList: any;
    interviewInfo?.interviewData.questionList.forEach(
      (item, index) => (questionList = item?.question + "," + questionList)
    );

    const assistantOptions: CreateAssistantDTO = {
      name: "AI Recruiter",
      firstMessage:
        "Hi " +
        interviewInfo?.username +
        ", how are you? Ready for your interview on " +
        interviewInfo?.interviewData.jobPostition,
      transcriber: {
        provider: "deepgram", // Only include model/language if Deepgram's type allows it
        model: "nova-2", // ❗ Remove if the Deepgram type rejects it
        language: "en-US", // ❗ Remove if incompatible
      },
      voice: {
        provider: "playht",
        voiceId: "jennifer",
      },
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `
You are an AI voice assistant conducting interviews.
Your job is to ask candidates provided interview questions and assess their responses.
Begin the conversation with a friendly introduction, setting a relaxed yet professional tone. Example:
"Hey there! Welcome to your ${interviewInfo?.interviewData.jobPostition} interview. Let's get started with a few questions!"

Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise.

Below are the questions to ask one by one:
Questions: ${questionList}

If the candidate struggles, offer hints or rephrase the question without giving away the answer. Example:
"Need a hint? Think about how React tracks component updates!"

Provide brief, encouraging feedback after each answer. Example:
"Nice! That's a solid answer."
"Hmm, not quite! Want to try again?"

Keep the conversation natural and engaging—use casual phrases like "Alright, next up..." or "Let's tackle a tricky one!"

After 5-7 questions, wrap up the interview smoothly by summarizing their performance. Example:
"That was great! You handled some tough questions well. Keep sharpening your skills!"

End on a positive note:
"Thanks for chatting! Hope to see you crushing projects soon!"

Key Guidelines:
- Be friendly, engaging, and witty
- Keep responses short and natural, like a real conversation
- Adapt based on the candidate's confidence level
- Ensure the interview remains focused on React
`.trim(),
          },
        ],
      },
    };

    vapi.start(assistantOptions);
  };

  useEffect(() => {
    interviewInfo && startCall();
  }, [interviewInfo]);

  const stopInterview = () => {
    vapi.stop();
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center">
          <Timer />
          00:00:00
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="bg-white p-40 rounded-lg border flex-col gap-3  border-cyan-200 flex items-center justify-center mt-5">
          <div className="bg-slate-500 p-1 rounded-full flex items-center justify-center">
            <Bot className="w-[50px] h-[50px] text-cyan-400" />
          </div>
          <h2>AI RecruIter</h2>
        </div>
        <div className="bg-white p-40 rounded-lg   flex-col gap-3 border border-cyan-200 flex items-center justify-center mt-5">
          <h2 className="text-xl bg-blue-600 text-white rounded-full p-3 px-5">
            {interviewInfo?.username[0]}
          </h2>
          <h2>{interviewInfo?.username}</h2>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-center mt-7">
        <Mic className="h-10 w-10 p-3 bg-gray-500 text-white  rounded-full cursor-pointer" />
        <AlertComfirmation stopInterview={() => stopInterview()}>
          <Phone className="h-10 w-10 p-3 text-white bg-red-500  rounded-full cursor-pointer" />
        </AlertComfirmation>
      </div>
      <h2 className="text-sm text-gray-400 text-center mt-5">
        Interview is in Progress...
      </h2>
    </div>
  );
}

export default StratInterview;
