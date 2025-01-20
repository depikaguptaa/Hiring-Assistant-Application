import React from "react";

const QuizQuestion = ({ question, index, onAnswer, selectedAnswer, options }) => {
  if (!question || !options) {
    return <p className="text-red-500 dark:text-red-400 text-center p-4">Question not found. Please try again!</p>;
  }

  const handleChange = (e) => {
    onAnswer(index, e.target.value);
  };

  const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div 
      key={index} 
      className={`transition-all duration-500 ease-out transform ${
        index % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'
      }`}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 animate-fade-in">
  Q{index + 1}: {decodeHTML(question.question)}
</h3>
      <div className="space-y-3">
        {options.map((opt, i) => (
          <label 
            key={i}
            style={{ 
              animationDelay: `${i * 150}ms`,
              animationFillMode: 'forwards'
            }}
            className={`flex items-center p-3 rounded-lg border-2 transition-all duration-300
              cursor-pointer animate-fade-in-up
              ${selectedAnswer === opt 
                ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/30' 
                : 'border-gray-200 hover:border-blue-200 dark:border-gray-700 dark:hover:border-blue-700'}`}
          >
            <input
              type="radio"
              name={`question-${index}`}
              value={decodeHTML(opt)}
              checked={selectedAnswer === opt}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 dark:text-blue-400 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-700 dark:text-gray-300">
              {decodeHTML(opt)}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;