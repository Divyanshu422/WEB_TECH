import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPasswordOTP = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [errors, setErrors] = useState({ emailOtp: "", mobileOtp: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const emailOtpValid = /^[0-9]{6}$/.test(emailOtp);
    const mobileOtpValid = /^[0-9]{6}$/.test(mobileOtp);

    if (!emailOtpValid || !mobileOtpValid) {
      setErrors({
        emailOtp: emailOtpValid ? "" : "Email OTP must be a 6-digit number.",
        mobileOtp: mobileOtpValid ? "" : "Mobile OTP must be a 6-digit number.",
      });
      return;
    }

    // Handle the OTP verification logic here
    console.log("Email OTP:", emailOtp);
    console.log("Mobile OTP:", mobileOtp);

    // Clear errors if validation is successful
    setErrors({ emailOtp: "", mobileOtp: "" });
    navigate("/forgotlogin");
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 text-center border-b">
        <h1 className="text-lg font-semibold">Document Management System</h1>
      </header>

      {/* OTP Verification Form */}
      <main className="flex-grow flex justify-center items-center">
        <div className="border p-8 rounded-md shadow-md max-w-xs w-full">
          <h2 className="text-center text-xl font-semibold mb-6">
            Forgot Password OTP Verification
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email OTP"
                value={emailOtp}
                onChange={(e) => setEmailOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.emailOtp && (
                <p className="text-red-500 text-sm mt-1">{errors.emailOtp}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Mobile OTP"
                value={mobileOtp}
                onChange={(e) => setMobileOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.mobileOtp && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileOtp}</p>
              )}
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center border-t text-xs">
        <p>
          Copyright © 2023 C-DAC Delhi. All Rights Reserved. Application
          Developed & Maintained by e-Governance Solutions Group, C-DAC Delhi
          (Time Dynamic)
        </p>
      </footer>
    </div>
  );
};

export default ForgotPasswordOTP;
