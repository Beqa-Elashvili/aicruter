import React from "react";
import { Tinterview } from "./LatestInterviewsList";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy, Send } from "lucide-react";
import { toast } from "sonner";

function InterviewCard({
  interview,
  viewDetail = false,
}: {
  interview: Tinterview;
  viewDetail?: boolean;
}) {
  const copyLink = () => {
    const url =
      process.env.NEXT_PUBLIC_HOST_URL + "/" + interview?.interview_id;
    navigator.clipboard.writeText(url);
    toast("Copied!");
  };

  console.log(interview);

  const onSend = () => {
    toast("send on email will add soon!");
  };
  return (
    <div className="p-5 bg-white rounded-lg border">
      <div className="flex items-center justify-between">
        <div className="h-[40px] w-[40px] bg-blue-500 rounded-full"></div>
        <h2>{moment(interview.created_at).format("DD MMM yyy")}</h2>
      </div>
      <h2 className="mt-3 font-bold text-lg">{interview.jobPosition}</h2>
      <h2 className="mt-2 flex justify-between text-gray-500">
        {interview.duration}
        <span className="text-green-700">
          {interview["interview-feedback"]?.length ?? 0} Candidates
        </span>
      </h2>
      {!viewDetail ? (
        <div className="flex gap-3 mt-5">
          <Button onClick={copyLink} className="w-1/2" variant={"outline"}>
            <Copy /> Copy Link
          </Button>
          <Button onClick={onSend} className="w-1/2" variant={"outline"}>
            <Send /> Send
          </Button>
        </div>
      ) : (
        <Button className="mt-5 w-full" variant={"outline"}>
          View Details <ArrowRight />
        </Button>
      )}
    </div>
  );
}

export default InterviewCard;
