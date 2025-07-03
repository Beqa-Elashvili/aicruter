export type Tinterview = {
  id: number;
  created_at: string;
  duration: string;
  interview_id: string;
  jobDescription: string;
  jobPosition: string;
  interview_feedback?: InterviewFeedback[];
  questionList: InterviewQuestion[];
  type: string[];
  userEmail: string;
};

export type FeedbackRatings = {
  communication: number;
  experince: number;
  problemSolving: number;
  technicalSkills: number;
};

export type FeedbackDetail = {
  Recommendation: "Yes" | "No";
  RecommendationMsg: string;
  rating: FeedbackRatings;
  summary: string;
};

export type InterviewFeedback = {
  created_at: string;
  feedback: {
    feedback: FeedbackDetail;
  };
  userEmail: string;
  userName: string;
};

export type InterviewQuestion = {
  question: string;
  type: string;
};

export type TinterviewDetails = {
  created_at: string;
  duration: string;
  interview_id: string;
  jobDescription: string;
  jobPosition: string;
  questionList: InterviewQuestion[];
  type: string;
  interview_feedback?: InterviewFeedback[] | null;
};
