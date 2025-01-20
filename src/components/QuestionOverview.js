import React from "react";

const QuestionOverview = ({ questions, answers, onNavigate, currentQuestionIndex }) => {
  return (
    <div className="my-8">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">Question Overview</h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((_, index) => (
          <div key={index} className="relative">
            {currentQuestionIndex === index && (
              <div className="absolute inset-0 border-2 border-blue-500 dark:border-blue-400 
                rounded-full animate-pulse-ring transform scale-110" />
            )}
            <button
              onClick={() => onNavigate(index)}
              className={`w-10 h-10 rounded-full font-medium transition-all duration-200
                ${answers[index] 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-red-100 hover:bg-red-200 text-red-600'
                } flex items-center justify-center
                ${currentQuestionIndex === index ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
            >
              {index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionOverview;