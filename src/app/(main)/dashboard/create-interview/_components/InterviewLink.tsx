import React from "react";
import {
  ArrowLeft,
  CircleCheck,
  Clock,
  Copy,
  List,
  Mail,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

function InterviewLink({
  interview_id,
  formData,
}: {
  interview_id: string;
  formData: any;
}) {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview_id;

  const GetInterviewUrl = () => {
    return url;
  };

  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast("Link Copied");
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center mt-10">
      <CircleCheck className=" fill-green-500 text-white w-38 h-38 m-auto" />
      <h2 className="font-bold text-lg">Your AI Interview is Ready!</h2>
      <p>Share this with your candidates to start the interview process </p>

      <div className="w-full p-7 mt-6 rounded-xl bg-white">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Interview Link</h2>
          <h2 className="p-1 px-2 text-blue-500 bg-blue-50 rounded-xl">
            Valid for 30 Days
          </h2>
        </div>
        <div className="mt-3 flex gap-3">
          <Input defaultValue={GetInterviewUrl()} disabled={true} />
          <Button onClick={() => onCopyLink()} className="bg-blue-600">
            <Copy /> Copy Link
          </Button>
        </div>
        <hr className="my-7" />
        <div className="flex items-center gap-5 text-gray-500">
          <h2 className="flex items-center gap-1 ">
            <Clock className="w-4 h-4 text-sm" />
            {formData?.duration}
          </h2>
          <h2 className="flex items-center gap-2">
            <List className="w-4 h-4 text-sm" />
            10 Questions
          </h2>
        </div>
      </div>
      <div className="mt-7 bg-white p-5 rounded-lg w-full ">
        <h2 className="font-bold">Share Via</h2>
        <div className="flex gap-7 mt-5">
          <Button variant={"outline"}>
            <Mail /> Email
          </Button>
          <Button variant={"outline"}>
            <Mail /> Slack
          </Button>
          <Button variant={"outline"}>
            <Mail /> Whatsapp
          </Button>
        </div>
      </div>
      <div className="flex justify-between w-full gap-5">
        <Link href={"/dashboard"}>
          <Button variant={"outline"}>
            <ArrowLeft /> Back to Dashboard
          </Button>
        </Link>
        <Link href={"/create-interview"}>
          <Button className="bg-blue-600">
            <Plus /> Create New Interview
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InterviewLink;
