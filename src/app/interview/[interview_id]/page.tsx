"use client";

import { useInterviewData } from "@/app/providers/InterviewProvider";
import { supabase } from "@/app/services/suparbaseClient";
import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Info, Loader2Icon, Video } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface InterviewType {
  jobPosition: string;
  jobDescription: string;
  duration: string;
  type: string[];
}

function Interview() {
  const [interviewData, setInterviewData] = useState<InterviewType>();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const { interview_id } = useParams();
  const { interviewInfo, setInterviewInfo } = useInterviewData();
  const router = useRouter();

  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    try {
      setLoading(true);
      let { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("jobPosition, jobDescription, duration, type")
        .eq("interview_id", interview_id);
      if (Interviews) setInterviewData(Interviews[0]);
    } catch (error) {
      toast("Incorrect Interview Link");
    } finally {
      setLoading(false);
    }
  };
  const onJoinInterview = async () => {
    try {
      setLoading(true);
      let { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("*")
        .eq("interview_id", interview_id);
      if (Interviews) setInterviewInfo(Interviews[0]);
      router.push("/interview/" + interview_id + "/start");
    } catch (error) {
      console.error("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-80 mt-7 ">
      <div className="flex flex-col items-center justify-center border rounded-xl bg-white p-7 lg:px-33 xl:px-52 mb-20">
        <Logo size={24} classname="text-lg" />
        <h2 className="mt-3">AI-Powered Interview Platform</h2>
        <Image
          src={"/interview.png"}
          alt="interview"
          width={500}
          height={500}
          className="w-[250px] my-6"
        />
        <h2 className="font-bold text-xl mt-3">
          {interviewData?.jobPosition} interview
        </h2>
        <h2 className="flex gap-2 items-center text-gray-500 mt-3">
          <Clock className="h-4 w-4" />
          {interviewData?.duration}
        </h2>
        <div className="w-full">
          <h2>Enter your full name</h2>
          <Input
            placeholder="e.g. John Smith"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="p-3 bg-blue-100 flex mt-6  gap-4 rounded-xl">
          <Info className="text-blue-500" />
          <div>
            <h2>Before you begin</h2>
            <ul>
              <li className="text-sm text-blue-500">
                -Text your microphone and camera
              </li>
              <li className="text-sm text-blue-500">
                -Ensure you have a stable internet connection
              </li>
              <li className="text-sm text-blue-500">
                -Find a Quiet place for interview
              </li>
            </ul>
          </div>
        </div>
        <Button
          disabled={loading || !userName}
          onClick={() => onJoinInterview()}
          className={`mt-5 w-full font-bold bg-blue-600`}
        >
          <Video />
          {loading && <Loader2Icon className="animate-spin" />}
          Join Interview
        </Button>
      </div>
    </div>
  );
}

export default Interview;
