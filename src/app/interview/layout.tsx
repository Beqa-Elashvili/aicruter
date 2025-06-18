import React from "react";
import InterviewHeader from "./_components/InterviewHeader";

function InterviewLayout({ children }: { children: any }) {
  return (
    <div className="bg-secondary ">
      <InterviewHeader />
      {children}
    </div>
  );
}

export default InterviewLayout;
