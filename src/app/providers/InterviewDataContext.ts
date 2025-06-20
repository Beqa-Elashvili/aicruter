import { createContext } from "react";

export interface TInterviewInfoType {
  username: string;
  interviewData: {
    jobPostition: string;
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
    username: "",
    interviewData: {
      jobPostition: "",
      questionList: [
        {
          question: [],
        },
      ],
    },
  },
  setInterviewInfo: () => {},
});
