"use client";

import { useUser } from "@/app/providers/provider";
import { supabase } from "@/app/services/suparbaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InterviewDetailsContainer from "./_components/InterviewDetailsContainer";
import { TinterviewDetails } from "@/app/types/types";

function InterviewDetails() {
  const [interviewDetails, setInterviewDetalis] =
    useState<TinterviewDetails | null>(null);
  const { interview_id } = useParams();
  const { user } = useUser();

  useEffect(() => {
    user && GetInterviewDetails();
  }, [user]);

  const GetInterviewDetails = async () => {
    const result = await supabase
      .from("Interviews")
      .select(
        `jobPosition,jobDescription,type,questionList,duration,interview_id,created_at,
        interview-feedback(userEmail,userName,feedback,created_at)`
      )
      .eq("userEmail", user?.email)
      .eq("interview_id", interview_id);
    result && setInterviewDetalis(result?.data[0]);
  };

  return (
    <div className="mt-5">
      <h2 className="font -bold text-2xl">Interview Details</h2>
      <InterviewDetailsContainer interviewDetails={interviewDetails} />
    </div>
  );
}

export default InterviewDetails;
