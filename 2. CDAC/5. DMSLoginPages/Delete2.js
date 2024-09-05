import React, { useState } from "react";
import Footer from "./ReuseComponent/Footer";
import Header from "./ReuseComponent/Header";
const RegistrationPage = () => {
  const questions = [
    "What is your pet’s name?",
    "What is your mother’s maiden name?",
    "What was the name of your first school?",
    "What is your favorite color?",
    "What city were you born in?",
  ];
  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    username: "",
    password: "",
    passwordHint: "",
    email: "",
    registrationType: "",
    address: "",
  });

  const [selectedQuestions, setSelectedQuestions] = useState(["", "", ""]);
  const [answers, setAnswers] = useState(["", "", ""]);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
  const getFilteredQuestions = (currentIndex) => {
    return questions.filter(
      (question) =>
        !selectedQuestions.includes(question) ||
        selectedQuestions[currentIndex] === question
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.registrationType
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    console.log("Selected Questions:", selectedQuestions);
    console.log("Answers:", answers);

    // Clear error if validation passes
    setError("");

    // Handle the registration logic here
    console.log("Registration Data:", formData);
    // You can navigate to another page or show a success message here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-lg w-full mx-auto">
          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 mt-6 mb-4 rounded-lg shadow-lg border border-gray-300"
          >
            <h2 className="text-center text-2xl font-semibold mb-4">
              Registration
            </h2>
            <hr className="border-gray-300 mb-4" />

            {/* Salutation, Gender, Email */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="border py-2 px-3 rounded-lg h-12 w-full"
                >
                  <option value="">Salutation</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Mrs.">Mrs.</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border py-2 px-3 rounded-lg h-12 w-full"
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block border w-full p-2 mb-4 rounded-lg h-12"
                  required
                />
              </div>
            </div>

            {/* Name Inputs in Flex */}
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border py-2 px-3 rounded-lg w-full"
                  required
                />
                <label className="text-xs text-gray-500">first name</label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="border py-2 px-3 rounded-lg w-full"
                />
                <label className="text-xs text-gray-500">middle name</label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border py-2 px-3 rounded-lg w-full"
                  required
                />
                <label className="text-xs text-gray-500">last name</label>
              </div>
            </div>

            {/* Password and Password Hint */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="block border w-full p-2 mb-4 rounded-lg h-12"
                required
              />
              <input
                type="password"
                name="passwordHint"
                placeholder="Password Hint"
                value={formData.passwordHint}
                onChange={handleChange}
                className="block border w-full p-2 mb-4 rounded-lg h-12"
              />
            </div>

            {/* Registration Type */}
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              className="block border w-full p-2 mb-4 rounded-lg"
              required
            >
              <option value="">Select Registration Type</option>
              <option value="cdacEmployee">C-DAC Employee</option>
              <option value="externalUser">External User</option>
            </select>

            {/* Address (based on registration type) */}
            {formData.registrationType === "cdacEmployee" && (
              <select
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block border w-full p-2 mb-4 rounded-lg"
                required
              >
                <option value="">Select Address</option>
                <option value="patna">Patna</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="kolkata">Kolkata</option>
              </select>
            )}

            {formData.registrationType === "externalUser" && (
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="block border w-full p-2 mb-4 rounded-lg"
                required
              />
            )}

            {/* Populating the Security Question  */}
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

            {/* Centered Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-10 text-bold rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
