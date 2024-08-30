// import React from "react";
import React, { useState, useEffect } from "react";
import { FaSync } from "react-icons/fa";
const Captcha = ({ onCaptchaChange }) => {
  const [captcha, setCaptcha] = useState("");
  const generateCaptcha = () => {
    const characters = "0123456789!@#$%^&*";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters[Math.floor(Math.random() * characters.length)];
    }
    setCaptcha(captcha);
    onCaptchaChange(captcha); // Notify parent component about the new captcha
  };

  useEffect(() => {
    generateCaptcha(); // Generate captcha on mount
  }, []);

  return (
    <div className="captcha-container mb-4 flex items-center justify-between">
      <div className="captcha-display border border-gray-300 px-2 py-1 text-center text-lg font-bold bg-gray-200 rounded-md shadow-md flex-grow">
        {captcha}
      </div>
      <button
        type="button"
        onClick={generateCaptcha}
        className="ml-4 px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"
        aria-label="Refresh Captcha"
      >
        <FaSync className="text-xl" />
      </button>
    </div>
  );
};

export default Captcha;
