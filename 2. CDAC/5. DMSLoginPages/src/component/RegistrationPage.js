import React, { useState } from "react";

const RegistrationPage = () => {
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

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    // Clear error if validation passes
    setError("");

    // Handle the registration logic here
    console.log("Registration Data:", formData);
    // You can navigate to another page or show a success message here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="bg-blue-600 text-white py-4 text-center border-b border-gray-300">
        <h1 className="text-xl font-bold">Document Management System</h1>
      </header>

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

            {/* Registration Name Heading */}
            <h3 className="text-lg font-semibold mb-2">Registration Name</h3>

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

      <footer className="bg-blue-600 text-white py-4 text-center border-t border-gray-300 text-sm">
        Copyright © 2023 C-DAC Delhi. All Rights Reserved. Application Developed
        & Maintained by e-Governance Solutions Group
      </footer>
    </div>
  );
};

export default RegistrationPage;
