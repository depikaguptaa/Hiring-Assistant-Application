import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const Timer = ({ onFinish, totalQuestions, answeredQuestions }) => {
  const [timeLeft, setTimeLeft] = useState(1800);

  useEffect(() => {
    if (timeLeft === 0) {
      onFinish();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onFinish]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 shadow-md 
      transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {Object.keys(answeredQuestions).length} of {totalQuestions} answered
          </div>
        </div>
        <ProgressBar 
          total={totalQuestions} 
          completed={Object.keys(answeredQuestions).length} 
        />
      </div>
    </div>
  );
};

export default Timer;