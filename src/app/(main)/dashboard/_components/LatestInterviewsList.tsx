"use client";

import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import React, { useState } from "react";

function LatestInterviewsList() {
  const [interviewList, setInterviewList] = useState<[]>([]);
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Previously Created Interviews </h2>

      {interviewList?.length === 0 && (
        <div className="p-5 flex flex-col gap-3 items-center mt-5 rounded-lg bg-white">
          <Video className="h-10 w-10 text-blue-500" />
          <h2>You don't have interview created!</h2>
          <Button className="bg-blue-600">+ Create New Interview</Button>
        </div>
      )}
    </div>
  );
}

export default LatestInterviewsList;
