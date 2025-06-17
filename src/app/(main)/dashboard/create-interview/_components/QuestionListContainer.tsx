import React from "react";

function QuestionListContainer({ questionsList }: { questionsList: any }) {
  return (
    <div>
      <h2 className="font-bold text-lg mb-5">Generated Interview Questions:</h2>
      <div className="p-5 border border-gray-300 rounded-xl bg-blue-50">
        {questionsList.map((item: any, index: number) => (
          <div
            key={index}
            className="p-3 border border-blue-500 shadow-inner shadow-blue-100 mb-2 rounded-xl"
          >
            <h2 className="font-medium">{item?.question}</h2>
            <p className="text-sm text-blue-500">Type: {item?.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionListContainer;
