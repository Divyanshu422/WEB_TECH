import React, { useState } from "react";
import { CircleX } from "lucide-react";

const RoleMenuMapperForm = ({ onClose }) => {
  const [menuId, setMenuId] = useState("");
  const [roleId, setRoleId] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (menuId.trim() === "") newErrors.menuId = "MenuId is required";
    if (roleId.trim() === "") newErrors.roleId = "RoleId is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ menuId, roleId });
      setMenuId("");
      setRoleId("");
    } else {
      setErrors(validationErrors);
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
          Role Menu Mapper
        </h2>

        <form
          className="bg-white p-6 rounded shadow-md w-80"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="menuId" className="block text-gray-700 mb-2">
              MenuId
            </label>
            <input
              type="text"
              id="menuId"
              value={menuId}
              onChange={(e) => setMenuId(e.target.value)}
              className={`w-full px-3 py-2 border rounded ${
                errors.menuId ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.menuId && (
              <p className="text-red-500 text-xs mt-1">{errors.menuId}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="roleId" className="block text-gray-700 mb-2">
              RoleId
            </label>
            <input
              type="text"
              id="roleId"
              value={roleId}
              onChange={(e) => setRoleId(e.target.value)}
              className={`w-full px-3 py-2 border rounded ${
                errors.roleId ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.roleId && (
              <p className="text-red-500 text-xs mt-1">{errors.roleId}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleMenuMapperForm;
