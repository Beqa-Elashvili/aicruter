"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from "@/app/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function FormContainer({
  onHandleInputChange,
  GoToNext,
}: {
  onHandleInputChange: (field: string, value: string | string[]) => void;
  GoToNext: () => void;
}) {
  const [interviewType, setIntetviewType] = useState<string[]>([]);

  const addInterviewType = (type: string) => {
    const data = interviewType.includes(type);
    if (!data) {
      setIntetviewType((prev) => [...prev, type]);
    } else {
      const filtered = interviewType.filter((item) => item !== type);
      setIntetviewType(filtered);
    }
  };

  useEffect(() => {
    if (interviewType) {
      onHandleInputChange("type", interviewType);
    }
  }, [interviewType, onHandleInputChange]);

  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          onChange={(e) => onHandleInputChange("jobPosition", e.target.value)}
          placeholder="e.g. Full Stack Developer"
          className="mt-2"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Description</h2>
        <Textarea
          onChange={(e) =>
            onHandleInputChange("jobDescription", e.target.value)
          }
          placeholder="Enter details job description"
          className="h-[200px] mt-2"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Duration</h2>
        <Select
          onValueChange={(value) => onHandleInputChange("duration", value)}
        >
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 Min">5 Min</SelectItem>
            <SelectItem value="15 Min">15 Min</SelectItem>
            <SelectItem value="30 Min">30 Min</SelectItem>
            <SelectItem value="45 Min ">45 Min</SelectItem>
            <SelectItem value="60 Min">60 Min</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5 ">
        <h2 className="text-sm font-medium">Interveiew Type</h2>
        <div className="mt-5 flex gap-3 flex-wrap ">
          {InterviewType.map((type, index) => (
            <div
              key={index}
              className={`flex hover:bg-secondary cursor-pointer gap-2 items-center px-2 py-1 bg-white rounded-2xl border border-gray-300 ${
                interviewType.includes(type.title) &&
                "text-blue-600 bg-blue-100"
              }`}
              onClick={() => addInterviewType(type.title)}
            >
              <type.icon size={20} />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex justify-end">
        <Button className="bg-blue-600" onClick={() => GoToNext()}>
          Generate Question <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FormContainer;
