"use client";

import { useUser } from "@/app/providers/provider";
import { supabase } from "@/app/services/suparbaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InterviewDetailsContainer from "./_components/InterviewDetailsContainer";
import { TinterviewDetails } from "@/app/types/types";
import CandidatesList from "./_components/CandidatesList";

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
        interview_feedback(userEmail,userName,feedback,created_at)`
      )
      .eq("userEmail", user?.email)
      .eq("interview_id", interview_id);

    if (result?.data && result.data.length > 0) {
      setInterviewDetalis(result.data[0]);
    } else {
      console.warn(
        "No interview details found or result.data is null",
        result?.error
      );
    }
  };

  return (
    <div className="mt-5">
      <h2 className="font -bold text-2xl">Interview Details</h2>
      <InterviewDetailsContainer interviewDetails={interviewDetails} />
      {interviewDetails?.interview_feedback && (
        <CandidatesList candidateList={interviewDetails?.interview_feedback} />
      )}
    </div>
  );
}

export default InterviewDetails;
