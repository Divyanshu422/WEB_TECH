import React, { useState } from "react";
import Footer from "./ReuseComponent/Footer";
import Header from "./ReuseComponent/Header";
const RegistrationPage = () => {
  const questions = [
    "What is your pet's name?",
    "What is your mother's maiden name?",
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
    phoneNumber: "",
    email: "",
    registrationType: "",
    address: "", // You might want to keep this for other uses
    addressLine1: "", // Added addressLine1
    addressLine2: "", // Added addressLine2
    city: "", // Added city
    state: "", // Added state
    pincode: "", // Added pincode
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
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl"
      >
        <h2 className="text-center text-2xl font-semibold mb-4">
          Registration
        </h2>
        <div className="flex flex-wrap space-x-4 mb-4">
          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="salutation"
            >
              Salutation
            </label>
            <select
              name="salutation"
              value={formData.salutation}
              onChange={handleChange}
              className="border py-1 px-4 rounded-lg w-full h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Decreased height
            >
              <option value="">Select Salutation</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </div>

          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>

          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="middleName"
            >
              Middle Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="middleName"
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Enter your middle name"
            />
          </div>
        </div>

        <div className="flex flex-wrap space-x-4 mb-4">
          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>

          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Mobile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              name="phoneNumber" // Updated name attribute
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border py-1 px-4 rounded-lg w-full h-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
        </div>

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
            <option value="">Select Center</option>
            <option value="patna">Patna</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
          </select>
        )}

        {formData.registrationType === "externalUser" && (
          <>
            <input
              type="text"
              name="addressLine1"
              placeholder="Line 1 Address"
              value={formData.addressLine1} // Bind addressLine1 state
              onChange={handleChange}
              className="block border w-full p-2 mb-4 rounded-lg"
              required
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Line 2 Address"
              value={formData.addressLine2} // Bind addressLine2 state
              onChange={handleChange}
              className="block border w-full p-2 mb-4 rounded-lg"
              required
            />
          </>
        )}

        {formData.registrationType === "externalUser" && (
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city} // Bind city state
              onChange={handleChange}
              className="block border w-full p-2 mb-4 rounded-lg"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="Enter State"
              value={formData.state} // Bind state state
              onChange={handleChange}
              className="block border w-full p-2 mb-4 rounded-lg"
              required
            />
            <input
              type="number"
              name="pincode"
              placeholder="Enter PinCode"
              value={formData.pincode} // Bind pincode state
              onChange={handleChange}
              className="block border w-full p-2 mb-4 rounded-lg"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Security Questions
          </label>
          <div className="flex flex-col space-y-4">
            {selectedQuestions.map((question, index) => (
              <div key={index} className="flex items-center space-x-4">
                <select
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                >
                  <option value="">Select a question</option>
                  {getFilteredQuestions(index).map((q, i) => (
                    <option key={i} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
                <input
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={answers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  placeholder="Your answer"
                />
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
