"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInterviewData } from "@/app/providers/InterviewProvider";
import { Timer, Bot, Mic, Phone, Loader2Icon } from "lucide-react";
import Vapi from "@vapi-ai/web";
import type { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import AlertComfirmation from "./_components/AlertComfirmation";
import { toast } from "sonner";
import axios from "axios";
import { supabase } from "@/app/services/suparbaseClient";
import { useParams, useRouter } from "next/navigation";

function StratInterview() {
  const { interviewInfo } = useInterviewData();
  const [activeUser, setActiveUser] = useState<boolean>(false);
  const [conversation, setConversation] = useState<any[] | undefined>();
  const conversationRef = useRef<any[] | undefined>(undefined);
  const vapiRef = useRef<Vapi | null>(null);
  const router = useRouter();
  const { interview_id } = useParams();

  const startCall = () => {
    const questionList = interviewInfo?.interviewData.questionList
      .map((item: any) => item?.question)
      .filter(Boolean)
      .join(", ");

    const assistantOptions: CreateAssistantDTO = {
      name: "AI Recruiter",
      firstMessage: `Hi ${interviewInfo?.userName}, how are you? Ready for your interview on ${interviewInfo?.interviewData.jobPosition}?`,
      transcriber: {
        provider: "deepgram",
        model: "nova-2",
        language: "en-US",
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
Begin the conversation with a friendly introduction, setting a relaxed yet professional tone.

Ask one question at a time and wait for the candidate's response before proceeding. Keep the questions clear and concise.

Questions: ${questionList}

If the candidate struggles, offer hints or rephrase the question.

Provide brief, encouraging feedback after each answer.

After 5–7 questions, summarize their performance and end on a positive note.

Keep it friendly, short, and React-focused.
`.trim(),
          },
        ],
      },
    };

    vapiRef.current?.start(assistantOptions);
  };

  useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);

      vapiRef.current.on("call-start", () => {
        console.log("Call started");
        toast("Call Connected...");
      });

      vapiRef.current.on("speech-start", () => {
        console.log("Assistant speech has started.");
        setActiveUser(false);
      });

      vapiRef.current.on("speech-end", () => {
        console.log("Assistant speech has ended.");
        setActiveUser(true);
      });

      vapiRef.current.on("call-end", () => {
        console.log("Call ended");
        toast("Interview Ended!");
        generateFeedback();
      });

      vapiRef.current.on("message", (message) => {
        console.log("Message received:", message);

        if (message?.conversation) {
          conversationRef.current = message.conversation;
          setConversation(message.conversation);
        } else {
          console.warn(
            "No conversation in message — keeping previous conversation."
          );
        }
      });
    }
    console.log("this is conversation ---->>>", conversation);

    if (interviewInfo) {
      startCall();
    }
  }, [interviewInfo]);

  const stopInterview = () => {
    vapiRef.current?.stop();
  };

  console.log(" this is conversation", conversationRef.current);

  const [loading, setLoading] = useState<boolean>(false);
  const generateFeedback = async () => {
    if (!conversationRef.current) {
      console.warn("No conversation available.");
      return;
    }

    try {
      setLoading(true);
      const result = await axios.post("/api/ai-feedback", {
        conversation: conversationRef.current,
      });

      const content = result.data.content;
      const cleaned = content.replace("```json", "").replace("```", "");
      const feedbackJson = JSON.parse(cleaned);

      const { data, error } = await supabase.from("interview-feedback").insert([
        {
          userName: interviewInfo?.userName,
          userEmail: interviewInfo?.userEmail,
          interview_id: interview_id,
          feedback: feedbackJson,
          recommended: false,
        },
      ]);

      if (error) {
        console.error("Supabase error:", error.message);
        toast.error("Failed to store feedback.");
        return;
      }

      toast.success("Feedback saved!");
      router.replace(`/interview/${interview_id}/completed`);
      setLoading(false);
    } catch (error) {
      console.error("Feedback error:", error);
      toast.error("Something went wrong while generating feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-20 lg:px-48 xl:px-56">
      <h2 className="font-bold text-xl flex justify-between">
        AI Interview Session
        <span className="flex gap-2 items-center ">
          <Timer />
          00:00:00
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="bg-white p-40 rounded-lg border flex-col gap-3  border-cyan-200 flex items-center justify-center mt-5">
          <div className="relative">
            {!activeUser && (
              <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping"></span>
            )}
            <div className="bg-slate-500 p-1 rounded-full flex items-center justify-center">
              <Bot className="w-[50px] h-[50px] text-cyan-400" />
            </div>
          </div>
          <h2 className="w-40 text-center">AI RecruIter</h2>
        </div>
        <div className="bg-white p-40 rounded-lg   flex-col gap-3 border border-cyan-200 flex items-center justify-center mt-5">
          <div className="relative">
            {activeUser && (
              <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping"></span>
            )}
            <h2 className="text-xl bg-blue-600 text-white rounded-full p-3 px-5">
              {interviewInfo?.userName[0]}
            </h2>
          </div>
          <h2>{interviewInfo?.userName}</h2>
        </div>
      </div>
      <div className="flex items-center gap-5 justify-center mt-7">
        <Mic className="h-10 w-10 p-3 bg-gray-500 text-white rounded-full cursor-pointer" />
        <AlertComfirmation stopInterview={() => stopInterview()}>
          {!loading ? (
            <Phone className="h-10 w-10 p-3 text-white bg-red-500 rounded-full cursor-pointer" />
          ) : (
            <Loader2Icon className="animate-spin" />
          )}
        </AlertComfirmation>
      </div>

      <h2 className="text-sm text-gray-400 text-center mt-5">
        Interview is in Progress...
      </h2>
    </div>
  );
}

export default StratInterview;
