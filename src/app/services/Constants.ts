import { Code2Icon, LayoutDashboard, Puzzle, User2Icon } from "lucide-react";

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
    name: "Behavioral",
    icon: User2Icon,
  },
  {
    name: "Experience",
    icon: Puzzle,
  },
  {
    name: "Problem Solving",
    icon: LayoutDashboard,
  },
  {
    name: "Leadership",
    icon: LayoutDashboard,
  },
];
