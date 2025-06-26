import { Button } from "@/components/ui/button";
import MainWrapper from "./mainWrapper/MainWrapper";
import { ArrowRight, Clock, ChartBar } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MainWrapper>
        <div className="px-4 md:px-20">
          <div>
            <div className="flex flex-col gap-2 items-start">
              <h1 className="flex flex-wrap text-balance  gap-2 w-full md:max-w-2/3 font-bold text-3xl  md:text-5xl">
                AI-Powered
                <span className="text-primary">Interview Assistant</span> for
                Modern Recruiters
              </h1>
              <p className=" text-xl md:text-2xl text-gray-500 w-full md:max-w-2/4">
                Let our AI voice agent conduct candidate interviews while you
                focus on finding the perfect match. Save time, reduce bias, and
                improve your hiring process.
              </p>
              <Button className="flex items-center gap-2 mt-4 px-4">
                Create Interview <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center  mt-20 md:mt-40 w-full gap-4">
            <div className="flex flex-col  items-center justify-center w-full">
              <h1 className="font-bold text-3xl  md:text-5xl">
                Streamline Your Hiring Process
              </h1>
              <p className="mt-4 text-center text-xl md:text-2xl text-gray-500">
                AiCruiter helps you save time and find better candidates with
                our advanced AI interview technology.
              </p>
            </div>
            <div className=" space-y-12 md:space-y-0 md:flex items-center justify-between gap-12 ">
              <div className="border shadow rounded-lg flex flex-col items-center justify-center gap-2 p-4 ">
                <Clock className="h-20 w-20 text-blue-500" />
                <h1 className="text-2xl font-bold">Save Time</h1>
                <p className="text-gray-500 text-center">
                  Automate initial screening interviews and focus on final
                  candidates.
                </p>
              </div>
              <div className="border shadow rounded-lg flex flex-col items-center justify-center gap-2 p-4 ">
                <ChartBar className="h-20 w-20 text-blue-500" />
                <h1 className="text-2xl font-bold">Data-Driven Insights</h1>
                <p className="text-gray-500 text-center">
                  Get detailed analytics and candidate comparisons based on
                  interview responses.
                </p>
              </div>
              <div className="border shadow rounded-lg flex flex-col items-center justify-center gap-2 p-4">
                <Clock className="h-20 w-20 text-blue-500" />
                <h1 className="text-2xl font-bold">Reduce Bias</h1>
                <p className="text-gray-500 text-center">
                  Standardized interviews help eliminate unconscious bias in the
                  hiring process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center py-20 px-4 md:px-20 mt-20 md:mt-40 w-full gap-4">
          <div className="flex flex-col  items-center justify-center w-full">
            <h1 className="font-bold text-3xl  md:text-5xl">
              Streamline Your Hiring Process
            </h1>
            <p className="mt-4 text-center text-xl md:text-2xl text-gray-500">
              AiCruiter helps you save time and find better candidates with our
              advanced AI interview technology.
            </p>
          </div>
          <div className="space-y-12 md:space-y-0 md:flex items-center justify-between gap-12 ">
            <div className=" flex flex-col items-center justify-center gap-2 p-4 ">
              <div className="w-20 h-20 text-2xl flex items-center justify-center font-bold bg-gray-200 rounded-full">
                1
              </div>
              <h1 className="text-2xl font-bold">Create Interview</h1>
              <p className="text-gray-500 text-center">
                Set up your job requirements and customize interview questions.
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2 p-4 ">
              <div className="w-20 h-20 text-2xl flex items-center justify-center font-bold bg-gray-200 rounded-full">
                2
              </div>
              <h1 className="text-2xl font-bold">Share with Candidates</h1>
              <p className="text-gray-500 text-center">
                Send interview links to candidates to complete at their
                convenience.
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-20 h-20 text-2xl flex items-center justify-center font-bold bg-gray-200 rounded-full">
                3
              </div>
              <h1 className="text-2xl font-bold">Review Results</h1>
              <p className="text-gray-500 text-center">
                Get AI-analyzed results, transcripts, and candidate comparisons.
              </p>
            </div>
          </div>
        </div>
        <div className="py-20 px-4 md:px-20 w-full gap-4">
          <div className="flex flex-col  items-center justify-center w-full">
            <h1 className="font-bold text-3xl  md:text-5xl">
              Ready to Transform Your Hiring Process?
            </h1>
            <p className="mt-4 text-center text-xl md:text-2xl text-gray-500">
              Join hundreds of companies already using AiCruiter to find the
              best talent.
            </p>
          </div>
          <div className="px-4 mt-2 md:px-0 md:w-1/2 m-auto flex items-center justify-center gap-12">
            <Link
              className="w-full bg-primary text-semibold text-center p-2 rounded-lg text-white md:w-60"
              href={"/dashboard/create-interview"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </MainWrapper>
    </div>
  );
}
