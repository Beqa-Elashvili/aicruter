import {
  Code2Icon,
  LayoutDashboard,
  Puzzle,
  User2Icon,
  Rocket,
  BriefcaseBusiness,
} from "lucide-react";

export const SideBarOptions = [
  {
    name: "Dasboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Scheduled Interview",
    icon: LayoutDashboard,
    path: "/scheduled-interview",
  },
  {
    name: "All Interiew",
    icon: LayoutDashboard,
    path: "/all-interiew",
  },
  {
    name: "Billing",
    icon: LayoutDashboard,
    path: "/billing",
  },
  {
    name: "Settings",
    icon: LayoutDashboard,
    path: "/settings",
  },
];

export const InterviewType = [
  {
    title: "Technical",
    icon: Code2Icon,
  },
  {
    title: "Behavioral",
    icon: User2Icon,
  },
  {
    title: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Problem Solving",
    icon: Puzzle,
  },
  {
    title: "Leadership",
    icon: Rocket,
  },
];

export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Title: {{jobTitle}}
Job Description:{{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}
Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type}} interview.
Format your response in JSON format with array list of questions.
format: interviewQuestions=[

question:",
type:'Technical/Behavioral/Experince/Problem Solving/Leaseship'
},{
...
}]
The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`;
