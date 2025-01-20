import React from "react";

const QuestionOverview = ({ questions, answers, onNavigate }) => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Question Overview</h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-10 h-10 rounded-full font-medium transition-all duration-200
              ${answers[index] 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-red-100 hover:bg-red-200 text-red-600'
              } flex items-center justify-center`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionOverview;