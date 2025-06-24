"use client";
import React from "react";

import { useUser } from "@/app/providers/provider";
import { supabase } from "@/app/services/suparbaseClient";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { useEffect, useState } from "react";
import InterviewCard from "../dashboard/_components/InterviewCard";
import { Tinterview } from "../dashboard/_components/LatestInterviewsList";

export default function AllInterview() {
  const [interviewList, setInterviewList] = useState<Tinterview[]>([]);
  const { user } = useUser();

  const GetInterviewsList = async () => {
    let { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("userEmail", user?.email)
      .order("id", { ascending: false })
      .limit(6);
    Interviews && setInterviewList(Interviews);
  };

  useEffect(() => {
    user && GetInterviewsList();
  }, [user]);

  console.log(interviewList);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">All Previously Created Interviews </h2>

      {interviewList?.length === 0 ? (
        <div className="p-5 flex flex-col gap-3 items-center mt-5 rounded-lg bg-white">
          <Video className="h-10 w-10 text-blue-500" />
          <h2>You don't have interview created!</h2>
          <Button className="bg-blue-600">+ Create New Interview</Button>
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
