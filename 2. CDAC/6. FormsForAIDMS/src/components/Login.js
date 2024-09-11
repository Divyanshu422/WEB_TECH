import React, { useState } from "react";
import { CircleX } from "lucide-react";

const Login = ({ onClose }) => {
  const [loginID, setLoginID] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginID.length <= 11) {
      console.log("LoginID:", loginID);
      setError("");
    } else {
      setError("LoginID must be 11 characters or less.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 fixed inset-0 bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <CircleX />
        </button>
        <h2 className="text-2xl font-bold mb-6 bg-blue-500 py-2 rounded-lg text-center text-white">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="loginID"
              className="block text-sm font-medium text-gray-700"
            >
              LoginID
            </label>
            <input
              type="text"
              id="loginID"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={loginID}
              onChange={(e) => setLoginID(e.target.value)}
              maxLength={11}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
