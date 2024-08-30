import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaSync } from "react-icons/fa";
import Captcha from "./Captcha";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "",
    enterCaptcha: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const usernameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!usernameRegex.test(formData.username)) {
      return "Username must contain only alphabets.";
    }

    if (!passwordRegex.test(formData.password)) {
      return "Password must be at least 8 characters long and include at least one special symbol.";
    }

    if (formData.enterCaptcha !== formData.captcha) {
      return "Captcha does not match. Please try again.";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    setError(""); // Clear error if validation passes
    // Handle form submission, such as sending data to Firebase
    console.log(formData);
    navigate("/dashboard");
  };

  const handleCaptchaChange = (newCaptcha) => {
    setFormData((prev) => ({ ...prev, captcha: newCaptcha }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <header className="w-full p-4 text-center bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Document Management System</h1>
      </header>

      <form
        className="border border-gray-300 p-8 rounded-md shadow-md flex flex-col space-y-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-lg font-semibold">Sign In</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
          aria-label="Username"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
          aria-label="Password"
        />

        <Captcha onCaptchaChange={handleCaptchaChange} />

        <input
          type="text"
          name="enterCaptcha"
          placeholder="Enter Captcha"
          value={formData.enterCaptcha}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full"
          aria-label="Enter Captcha"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>

        <div className="flex justify-between text-sm mt-2">
          <Link to="/forgotpassword" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
          <Link to="/registration" className="text-blue-500 hover:underline">
            Register
          </Link>
        </div>
      </form>

      <footer className="w-full p-4 text-center bg-blue-600 text-white">
        <p className="text-xs">
          Copyright © 2023 C-DAC Delhi. All Rights Reserved. Application
          Developed & Maintained by e-Governance Solutions Group, C-DAC Delhi
          (Time Dynamic)
        </p>
      </footer>
    </div>
  );
};

export default SignIn;
