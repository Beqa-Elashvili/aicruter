import { TinterviewDetails } from "@/app/types/types";
import { Calendar, Clock } from "lucide-react";
import React from "react";
import moment from "moment";

function InterviewDetailsContainer({
  interviewDetails,
}: {
  interviewDetails: TinterviewDetails | null;
}) {
  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      <h2>{interviewDetails?.jobDescription}</h2>
      <div className="mt-4 flex items-center justify-between lg:pr-52">
        <div>
          <h2 className="text-sm text-gray-500">Duration</h2>
          <h2 className="flex items-center text-md gap-2 font-bold">
            <Clock className="h-4 w-4" /> {interviewDetails?.duration}
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-gray-500">Create On</h2>
          <h2 className="flex items-center text-md gap-2 font-bold">
            <Calendar className="h-4 w-4" />{" "}
            {moment(interviewDetails?.created_at).format("MMM DD, yyy")}
          </h2>
        </div>
        <div>
          <h2 className="text-sm text-gray-500">Type</h2>
          <h2 className="flex items-center text-md gap-2 font-bold">
            <Clock className="h-4 w-4" />{" "}
            {JSON.parse(interviewDetails?.type || "[]")[0]}
          </h2>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="font-bold">Job Description</h2>
        <p className="text-sm leading-6">{interviewDetails?.jobDescription}</p>
      </div>{" "}
      <div className="mt-5">
        <h2 className="font-bold">Interview Questions</h2>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {interviewDetails?.questionList.map((question, index) => (
            <h2 className="text-xs" key={index}>
              {index + 1}.{question.question}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InterviewDetailsContainer;
