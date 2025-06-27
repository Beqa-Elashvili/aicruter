"use client";

import { useUser } from "@/app/providers/provider";
import { supabase } from "@/app/services/suparbaseClient";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import InterviewCard from "../dashboard/_components/InterviewCard";
import { Tinterview } from "@/app/types/types";

function ScheduledInterview() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState<any>([]);

  const getInterviewList = useCallback(async () => {
    const result = await supabase
      .from("Interviews")
      .select("jobPosition,duration,interview_id,interview_feedback(userEmail)")
      .eq("userEmail", user?.email)
      .order("id", { ascending: false });

    if (result?.data) {
      setInterviewList(result.data);
    }
  }, [user]);

  useEffect(() => {
    if (user) getInterviewList();
  }, [user, getInterviewList]);

  return (
    <div className="mt-5">
      <h2 className="font-bold text-xl">
        Interview List with Candidate Feedback
      </h2>
      {interviewList?.length === 0 ? (
        <div className="p-5 flex flex-col gap-3 items-center mt-5 rounded-lg bg-white">
          <Video className="h-10 w-10 text-blue-500" />
          <h2>You don&apos;t have interview created!</h2>
          <Button className="bg-blue-600">+ Create New Interview</Button>
        </div>
      ) : (
        <div className="grid  mt-5 gird-cols-2 md:grid-cols-3  gap-5">
          {interviewList.map((interview: Tinterview, index: number) => (
            <InterviewCard
              key={index}
              interview={interview}
              viewDetail={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ScheduledInterview;
