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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-pulse text-xl text-gray-600 dark:text-gray-400">
          Loading questions...
        </div>
      </div>
    );
  }
  
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
        </div>
        
        <QuestionOverview
          questions={questions}
          answers={answers}
          onNavigate={setCurrentQuestionIndex}
        />
        
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg 
              hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 
              font-medium shadow-md hover:shadow-lg"
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;