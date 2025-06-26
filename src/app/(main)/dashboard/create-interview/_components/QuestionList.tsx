"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuestionListContainer from "./QuestionListContainer";
import { supabase } from "@/app/services/suparbaseClient";
import { useUser } from "@/app/providers/provider";
import { v4 as uuidv4 } from "uuid";

function QuestionList({
  formData,
  onCreateLink,
}: {
  formData: any;
  onCreateLink: (interview_id: string) => void;
}) {
  const [questionsList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [load, setLoad] = useState<boolean>(false);
  const { user } = useUser();
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

  const onFinish = async () => {
    try {
      setLoad(true);
      const interview_id = uuidv4();
      const { data, error } = await supabase
        .from("Interviews")
        .insert([
          {
            ...formData,
            questionList: questionsList,
            userEmail: user?.email,
            interview_id: interview_id,
          },
        ])
        .select();

      onCreateLink(interview_id);
    } catch (error) {
      throw new Error("Server Error");
    } finally {
      setLoad(false);
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
        <div>
          <QuestionListContainer questionsList={questionsList} />
        </div>
      )}
      <div className="flex justify-end mt-10">
        <Button
          disabled={load}
          className="bg-blue-600"
          onClick={() => onFinish()}
        >
          {load && <Loader2 className="animate-spin" />}
          Create Interview Link & Finish
        </Button>
      </div>
    </div>
  );
}

export default QuestionList;
