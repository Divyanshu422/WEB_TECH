import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed

function ForgotPasswordLoginPage() {
  const navigate = useNavigate();
  // State management for form inputs
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add your validation and submission logic here
    console.log("Form submitted with:", {
      newPassword,
      confirmPassword,
      captcha,
      enteredCaptcha,
    });
    navigate("/forgotlogin");
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Header */}
      <header className="w-full p-4 text-center bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Document Management System</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
        <div className="border border-gray-300 p-6 rounded-md shadow-md w-80">
          <h2 className="text-center text-lg font-semibold mb-4">
            Forgot Password
          </h2>

          {/* Form Tag */}
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Captcha"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Enter Captcha"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={enteredCaptcha}
              onChange={(e) => setEnteredCaptcha(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-4 text-center bg-blue-600 text-white">
        <p className="text-xs">
          Copyright © 2023 C-DAC Delhi. All Rights Reserved. Application
          Developed & Maintained by e-Governance Solutions Group, C-DAC Delhi
          (Time Dynamic)
        </p>
      </footer>
    </div>
  );
}

export default ForgotPasswordLoginPage;
