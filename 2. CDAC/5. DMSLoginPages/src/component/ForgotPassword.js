import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username: Only alphabetic characters allowed
    const isValid = /^[A-Za-z]+$/.test(username);

    if (!isValid) {
      setError("Username must contain only alphabetic characters.");
      return;
    }

    // Handle the OTP sending logic here
    console.log("Username:", username);
    setError(""); // Clear any previous errors
    navigate("/forgotpasswordotp");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-blue-600 text-white py-4 text-center border-b border-gray-300">
        <h1 className="text-xl font-bold">Document Management System</h1>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-md shadow-md border border-gray-300 w-80"
        >
          <h2 className="text-lg font-semibold text-center mb-4">
            Forgot Password
          </h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Username"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send OTP
          </button>
        </form>
      </main>
      <footer className="bg-blue-600 text-white py-4 text-center border-t border-gray-300 text-sm">
        Copyright © 2023 C-DAC Delhi. All Rights Reserved. Application Developed
        & Maintained by e-Governance Solutions Group, C-DAC Delhi (Time Dynamic)
      </footer>
    </div>
  );
};

export default ForgotPassword;
