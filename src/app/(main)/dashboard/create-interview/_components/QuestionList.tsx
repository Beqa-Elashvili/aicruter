"use client";

import React, { useEffect } from "react";

function QuestionList({ formData }: { formData: any }) {
  useEffect(() => {
    if (formData) {
      GenerateQuesctionList();
    }
  }, [formData]);

  const GenerateQuesctionList = () => {};
  return <div>QuestionList</div>;
}

export default QuestionList;
