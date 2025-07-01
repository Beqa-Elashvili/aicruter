"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuestionListContainer from "./QuestionListContainer";
import { supabase } from "@/app/services/suparbaseClient";
import { useUser } from "@/app/providers/provider";
import { v4 as uuidv4 } from "uuid";
type TFormData = {
  [key: string]: string | string[];
};

function QuestionList({
  formData,
  onCreateLink,
}: {
  formData: TFormData;
  onCreateLink: (interview_id?: string) => void;
}) {
  const [questionsList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const { user } = useUser();

  const generateQuestionList = useCallback(async () => {
    try {
      setLoading(true);
      const result = await axios.post("/api/ai-model", {
        ...formData,
      });

      if (result.data?.interviewQuestions) {
        setQuestionList(result.data.interviewQuestions);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error: any) {
      setError(error.response.data.error);
      toast("Server Error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [formData, setLoading, setQuestionList]);

  useEffect(() => {
    if (formData) {
      generateQuestionList();
    }
  }, [formData, generateQuestionList]);

  const onFinish = async () => {
    try {
      setLoad(true);
      const interview_id = uuidv4();
      await supabase
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

      {questionsList.length > 0 && !loading ? (
        <div>
          <QuestionListContainer questionsList={questionsList} />
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
      ) : (
        <div>
          {!loading && questionsList.length === 0 && (
            <>
              <h1 className="flex flex-col gap-1">
                rate limit exceeded: Please try-again later:
                <span className="text-red-500 text-sm text-balance">
                  {error}
                </span>
              </h1>
              <div className="flex justify-end mt-10">
                <Button
                  disabled={load}
                  className="bg-blue-600"
                  onClick={() => onCreateLink()}
                >
                  return
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionList;
