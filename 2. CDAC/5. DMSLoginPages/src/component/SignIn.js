import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    captcha: "1234", // Example captcha, replace with real captcha generation
    enterCaptcha: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.enterCaptcha !== formData.captcha) {
      setError("Captcha does not match. Please try again.");
      return;
    }
    setError(""); // Clear error if validation passes
    // Handle form submission, such as sending data to Firebase
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <header className="w-full p-4 text-center bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Document Management System</h1>
      </header>

      <form
        className="border p-8 rounded-md shadow-md flex flex-col space-y-4 w-full max-w-md"
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
          className="border p-2 rounded w-full"
          aria-label="Username"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          aria-label="Password"
        />

        <input
          type="text"
          name="captcha"
          placeholder="Captcha"
          value={formData.captcha}
          readOnly // Assuming this is generated and not user-editable
          className="border p-2 rounded w-full bg-gray-200"
          aria-label="Captcha"
        />

        <input
          type="text"
          name="enterCaptcha"
          placeholder="Enter Captcha"
          value={formData.enterCaptcha}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          aria-label="Enter Captcha"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200"
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
