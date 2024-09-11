import React, { useState, useRef } from "react";
import { CircleX } from "lucide-react";

function AddRoleForm({ onClose }) {
  const [roleName, setRoleName] = useState("");

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Role Name:", roleName);
  };

  const handleReset = () => {
    setRoleName("");
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="flex items-center justify-center min-h-screen bg-gray-100 fixed inset-0 bg-opacity-30 backdrop-blur-sm"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <CircleX />
        </button>
        <h2 className="text-2xl font-bold mb-6 bg-blue-500 py-2 rounded-lg text-center text-white">
          Add Role
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="roleName"
              className="block text-sm font-medium text-gray-700"
            >
              Role Name
            </label>
            <input
              type="text"
              id="roleName"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter role name"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRoleForm;
