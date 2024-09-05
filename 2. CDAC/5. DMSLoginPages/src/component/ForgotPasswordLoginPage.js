import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed
import Captcha from "./Captcha"; // Ensure Captcha component is correctly imported

function ForgotPasswordLoginPage() {
  const navigate = useNavigate();
  // State management for form inputs
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    captcha: "", // Captcha value from Captcha component
    enteredCaptcha: "", // User input for captcha
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Destructure formData for easier access
    const { newPassword, confirmPassword, captcha, enteredCaptcha } = formData;

    // Validation logic
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (enteredCaptcha !== captcha) {
      alert("Captcha does not match.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted with:", {
      newPassword,
      confirmPassword,
      captcha,
      enteredCaptcha,
    });

    navigate("/forgotlogin");
  };

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle captcha change
  const handleCaptchaChange = (newCaptcha) => {
    setFormData((prev) => ({ ...prev, captcha: newCaptcha }));
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
              name="newPassword"
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* Captcha Component */}
            <Captcha onCaptchaChange={handleCaptchaChange} />

            <input
              type="text"
              name="enteredCaptcha"
              placeholder="Enter Captcha"
              className="w-full p-2 border border-gray-300 rounded-md mb-3"
              value={formData.enteredCaptcha}
              onChange={handleChange}
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
