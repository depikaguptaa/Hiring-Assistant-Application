import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../services/api";
import QuizQuestion from "../components/QuizQuestion";
import QuestionOverview from "../components/QuestionOverview";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [shuffledOptions, setShuffledOptions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions();
        if (fetchedQuestions && fetchedQuestions.length > 0) {
          setQuestions(fetchedQuestions);
          const initialShuffledOptions = {};
          fetchedQuestions.forEach((q, index) => {
            initialShuffledOptions[index] = q.incorrect_answers
              .concat(q.correct_answer)
              .sort(() => Math.random() - 0.5);
          });
          setShuffledOptions(initialShuffledOptions);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading questions:", error);
      }
    };
    loadQuestions();
  }, []);

  const handleAnswer = (index, answer) => {
    setAnswers(prev => ({
      ...prev,
      [index]: answer
    }));
  };

  const handleSubmit = () => {
    navigate("/report", { state: { questions, answers } });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse text-xl text-gray-600 dark:text-gray-400">
          Loading questions...
        </div>
      </div>
    );
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20 transition-colors duration-200">
      <Timer 
        onFinish={handleSubmit} 
        totalQuestions={questions.length}
        answeredQuestions={answers}
      />
      <div className="max-w-3xl mx-auto px-4 pt-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 animate-slide-in">
          {questions[currentQuestionIndex] && (
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              index={currentQuestionIndex}
              onAnswer={handleAnswer}
              selectedAnswer={answers[currentQuestionIndex]}
              options={shuffledOptions[currentQuestionIndex]}
            />
          )}

<div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200
                ${currentQuestionIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Previous
            </button>
            
            {isLastQuestion ? (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-8 py-2 rounded-lg 
                  hover:bg-green-700 transition-all duration-200 font-medium"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg 
                  hover:bg-blue-700 transition-all duration-200 font-medium"
              >
                Next
              </button>
            )}
          </div>
        </div>

        <QuestionOverview
          questions={questions}
          answers={answers}
          onNavigate={setCurrentQuestionIndex}
          currentQuestionIndex={currentQuestionIndex}
        />
      </div>
    </div>
  );
};

export default QuizPage;