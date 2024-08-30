import React, { useState } from "react";

const SecurityQuestionsForm = () => {
  const questions = [
    "What is your pet’s name?",
    "What is your mother’s maiden name?",
    "What was the name of your first school?",
    "What is your favorite color?",
    "What city were you born in?",
  ];

  const [selectedQuestions, setSelectedQuestions] = useState(["", "", ""]);
  const [answers, setAnswers] = useState(["", "", ""]);

  const handleQuestionChange = (index, value) => {
    const newSelectedQuestions = [...selectedQuestions];
    newSelectedQuestions[index] = value;
    setSelectedQuestions(newSelectedQuestions);
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Questions:", selectedQuestions);
    console.log("Answers:", answers);
  };

  const getFilteredQuestions = (currentIndex) => {
    return questions.filter(
      (question) =>
        !selectedQuestions.includes(question) ||
        selectedQuestions[currentIndex] === question
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Security Questions</h2>
      {[0, 1, 2].map((index) => (
        <div key={index} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Security Question {index + 1}
          </label>
          <select
            value={selectedQuestions[index]}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a question</option>
            {getFilteredQuestions(index).map((question, i) => (
              <option key={i} value={question}>
                {question}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={answers[index]}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            placeholder="Your Answer"
            className="block w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
};

export default SecurityQuestionsForm;
