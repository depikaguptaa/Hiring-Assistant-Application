// API service for fetching quiz questions
import axios from "axios";

/**
 * Fetches quiz questions from OpenTDB API
 * @returns {Promise<Array>} Array of quiz questions
 */
export const fetchQuestions = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_QUIZ_API_URL}?amount=${process.env.REACT_APP_QUIZ_AMOUNT}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }
};