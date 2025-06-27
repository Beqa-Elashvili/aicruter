import React from "react";
import { InterviewFeedback } from "@/app/types/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function CandidateFeedbackDialog({
  candidate,
}: {
  candidate: InterviewFeedback;
}) {
  const feedback = candidate.feedback.feedback;
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} className="text-blue-500">
          View Report
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-5">
              <div className="flex  justify-between items-center">
                <div className="flex items-center gap-5">
                  <h2 className="bg-blue-500 p-3 px-4.5 font-bold text-white rounded-full">
                    {candidate.userName[0]}
                  </h2>
                  <div>
                    <h2 className="font-bold">{candidate.userName}</h2>
                    <h2 className="text-sm text-gray-500">
                      {candidate.userEmail}
                    </h2>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <h2 className="text-blue-500 font-bold text-xl">6/10</h2>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="font-bold"> Skills Assesment</h2>
                <div className="mt-3 grid grid-cols-2 gap-10">
                  <div>
                    <h2 className="flex justify-between">
                      Technical Skills{" "}
                      <span>{feedback.rating.technicalSkills}/10</span>
                    </h2>
                    <Progress
                      value={feedback.rating.technicalSkills * 10}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <h2 className="flex justify-between ">
                      Communication
                      <span>{feedback.rating.communication}/10</span>
                    </h2>
                    <Progress
                      value={feedback.rating.communication * 10}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <h2 className="flex justify-between">
                      Problem Solving{" "}
                      <span>{feedback.rating.problemSolving}/10</span>
                    </h2>
                    <Progress
                      value={feedback.rating.problemSolving * 10}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <h2 className="flex justify-between">
                      Experience <span>{feedback.rating.experince}/10</span>
                    </h2>
                    <Progress
                      value={feedback.rating.experince * 10}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="font-bold">Performace Summery</h2>
                <p className="p-5 bg-secondary my-3 rounded-md">
                  {feedback.summery}
                </p>
              </div>
              <div
                className={` p-5 mt-10   block md:flex items-center justify-between gap-10 rounded-md ${
                  feedback.Recommendation === "No"
                    ? "bg-red-100"
                    : "bg-green-100"
                }`}
              >
                <div>
                  <h2
                    className={`${
                      feedback.Recommendation === "No"
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    Recommendation msg:
                  </h2>
                  <p
                    className={`${
                      feedback.Recommendation === "No"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {feedback.RecommendationMsg}
                  </p>
                </div>
                <Button
                  className={` mt-2 md:mt-0 w-full md:max-w-40 ${
                    feedback.Recommendation === "No"
                      ? "bg-red-700"
                      : "bg-green-700"
                  }`}
                >
                  Send Msg
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CandidateFeedbackDialog;
