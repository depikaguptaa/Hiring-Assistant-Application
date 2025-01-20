import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

const ReportPage = () => {
  const { state } = useLocation();
  const { questions, answers } = state;
  const navigate = useNavigate();

  const score = useMemo(() => {
    return questions.reduce((acc, q, index) => {
      return acc + (answers[index] === q.correct_answer ? 1 : 0);
    }, 0);
  }, [questions, answers]);

  const handleRetry = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            Quiz Report
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <div className="text-center">
              <p className="text-2xl font-semibold text-blue-800 dark:text-blue-300">
                Your Score: {score} out of {questions.length}
              </p>
              <p className="text-lg text-blue-600 dark:text-blue-400 mt-2">
                ({((score / questions.length) * 100).toFixed(2)}%)
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {questions.map((q, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                  answers[index] === q.correct_answer 
                    ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800' 
                    : 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800'
                }`}
              >
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Q{index + 1}: {decodeHTML(q.question)}
                </p>
                <p className={`mb-2 ${
                  answers[index] === q.correct_answer 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  Your Answer: {answers[index] || 'Not answered'}
                </p>
                <p className="text-green-600 dark:text-green-400">
                  Correct Answer: {q.correct_answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleRetry}
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg 
                hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 
                font-medium shadow-md hover:shadow-lg"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;