import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailForm = ({ setEmail }) => {
  const [email, setLocalEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setEmail(email);
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full mx-4 animate-fade-in"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Welcome to the Quiz!
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setLocalEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                dark:bg-gray-700 dark:text-gray-200 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md 
              hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            Start Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;