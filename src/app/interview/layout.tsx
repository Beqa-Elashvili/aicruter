import React, { useState } from "react";
import InterviewHeader from "./_components/InterviewHeader";
import InterviewDataProvider from "../providers/InterviewProvider";

function InterviewLayout({ children }: { children: any }) {
  return (
    <InterviewDataProvider>
      <div className="bg-secondary ">
        <InterviewHeader />
        {children}
      </div>
    </InterviewDataProvider>
  );
}

export default InterviewLayout;
