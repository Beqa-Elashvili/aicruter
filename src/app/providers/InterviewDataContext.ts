import { createContext } from "react";

export interface InterviewDataContextType {
  interviewInfo: undefined;
  setInterviewInfo: React.Dispatch<React.SetStateAction<undefined>>;
}

export const InterviewDataContext = createContext<InterviewDataContextType>({
  interviewInfo: undefined,
  setInterviewInfo: () => {},
});
