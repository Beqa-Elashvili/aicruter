"use client";

import { useContext, useState } from "react";
import { InterviewDataContext } from "./InterviewDataContext";

function InterviewDataProvider({ children }: { children: any }) {
  const [interviewInfo, setInterviewInfo] = useState();

  return (
    <InterviewDataContext.Provider value={{ interviewInfo, setInterviewInfo }}>
      {children}
    </InterviewDataContext.Provider>
  );
}

export default InterviewDataProvider;

export const useInterviewData = () => {
  const context = useContext(InterviewDataContext);
  return context;
};
