import { createContext } from "react";

export interface TInterviewInfoType {
  userName: string;
  userEmail: string;
  interviewData: {
    jobPosition: string;
    questionList: [
      {
        question: string[];
      }
    ];
  };
}

export interface InterviewDataContextType {
  interviewInfo: TInterviewInfoType | undefined;
  setInterviewInfo: React.Dispatch<
    React.SetStateAction<TInterviewInfoType | undefined>
  >;
}

export const InterviewDataContext = createContext<InterviewDataContextType>({
  interviewInfo: {
    userName: "",
    userEmail: "",
    interviewData: {
      jobPosition: "",
      questionList: [
        {
          question: [],
        },
      ],
    },
  },
  setInterviewInfo: () => {},
});
