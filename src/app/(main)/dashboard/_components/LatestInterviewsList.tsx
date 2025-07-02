"use client";

import { useUser } from "@/app/providers/provider";
import { supabase } from "@/app/services/suparbaseClient";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import InterviewCard from "./InterviewCard";
import { Tinterview } from "@/app/types/types";
import { useRouter } from "next/navigation";

function LatestInterviewsList() {
  const [interviewList, setInterviewList] = useState<Tinterview[]>([]);
  const { user } = useUser();
  const router = useRouter();

  const GetInterviewsList = useCallback(async () => {
    const { data: Interviews } = await supabase
      .from("Interviews")
      .select("*")
      .eq("userEmail", user?.email)
      .order("id", { ascending: false })
      .limit(6);

    if (Interviews) {
      setInterviewList(Interviews);
    }
  }, [user]);

  useEffect(() => {
    if (user) GetInterviewsList();
  }, [user, GetInterviewsList]);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Previously Created Interviews </h2>

      {interviewList?.length === 0 ? (
        <div className="p-5 flex flex-col gap-3 items-center mt-5 rounded-lg bg-white">
          <Video className="h-10 w-10 text-blue-500" />
          <h2>You don&apos;t have interview created!</h2>
          <Button
            onClick={() => router.push("/dashboard/create-interview")}
            className="bg-blue-600"
          >
            + Create New Interview
          </Button>
        </div>
      ) : (
        <div className="grid  mt-5 gird-cols-2 md:grid-cols-3  gap-5">
          {interviewList.map((interview: Tinterview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LatestInterviewsList;
