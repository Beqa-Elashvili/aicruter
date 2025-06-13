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
