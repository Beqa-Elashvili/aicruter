"use client";

import React from "react";
import { Check, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function InterviewComplete() {
  const router = useRouter();
  return (
    <div className="flex justify-center p-8  md:p-20 ">
      <div className="flex flex-col text-center items-center gap-4">
        <div className="bg-green-500 rounded-full p-4">
          <Check className="h-12 w-12" />
        </div>
        <h1 className="text-3xl font-bold">Interview Complete!</h1>
        <p className="text-gray-500">
          Thank you participating in the AI-driven interview with AIcruiter
        </p>
        <Image
          src={"/interview_ilustration.jpg"}
          alt="image"
          width={500}
          height={500}
          className="w-[800px] rounded-xl"
        />
        <div className="bg-white w-full flex flex-col p-4 items-center justify-center rounded-xl">
          <div className="bg-blue-500 rounded-full p-4">
            <Send className="h-6 text-white w-6" />
          </div>
          <h2 className="text-xl font-bold">What&apos;s Next ?</h2>
          <p className="text-sm text-gray-500">
            The recruiter review your interview responses and will contact you
            soon regarding the next steps.
          </p>
          <Button
            className="mt-4"
            onClick={() => router.push("/scheduled-interview")}
          >
            view feedback
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InterviewComplete;
