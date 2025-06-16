"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

function QuestionList({ formData }: { formData: any }) {
  const [questionsList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (formData) {
      generateQuestionList();
    }
  }, [formData]);

  const generateQuestionList = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/api/ai-model", {
        ...formData,
      });

      console.log("API Response:", result.data);

      if (result.data?.interviewQuestions) {
        setQuestionList(result.data.interviewQuestions);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast("Server Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <div className="p-5 bg-blue-50 rounded-xl border border-blue-600 flex gap-5 items-center">
          <Loader2Icon className="animate-spin" />
          <div>
            <h2 className="font-medium">Generating Interview Questions</h2>
            <p className="text-blue-500">
              Our AI is crafting personalized questions based on your job
              position
            </p>
          </div>
        </div>
      )}

      {questionsList.length > 0 && (
        <div className="p-5 border border-gray-300 rounded-xl bg-blue-50">
          {questionsList.map((item: any, index: number) => (
            <div
              key={index}
              className="p-3 border border-blue-500 shadow-inner shadow-blue-100 mb-2 rounded-xl"
            >
              <h2 className="font-medium">{item?.question}</h2>
              <p className="text-sm text-gray-600">Type: {item?.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuestionList;
