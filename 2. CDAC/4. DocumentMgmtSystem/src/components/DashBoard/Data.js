// Data.js
import React, { useState, useRef } from "react";
import FolderItem from "./FolderItem"; // Import the FolderItem component

function Data() {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null); // State to hold the uploaded file
  const modalRef = useRef(null); // Create a ref for the modal content

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFile(null); // Reset file state when closing the modal
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Set the selected file
  };

  const handleSave = () => {
    // Handle form data saving logic here
    if (file) {
      console.log("File ready for upload:", file);
      // Implement file upload logic here (e.g., send to server)
    } else {
      console.log("No file selected.");
    }
    setShowModal(false);
  };

  const handleOverlayClick = (event) => {
    // Check if the click is outside the modal content
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleModalClose();
    }
  };

  // Example folder structure
  const folderStructure = {
    name: "Documents",
    items: [
      {
        name: "Folder 1",
        type: "folder",
        items: [
          { name: "File 1", type: "file" },
          { name: "File 2", type: "file" },
        ],
      },
      {
        name: "Folder 2",
        type: "folder",
        items: [
          {
            name: "Subfolder 1",
            type: "folder",
            items: [{ name: "File 3", type: "file" }],
          },
          { name: "File 4", type: "file" },
        ],
      },
      { name: "File 5", type: "file" },
    ],
  };

  return (
    <div className="m-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center flex-grow">
          Welcome to Document Management System
        </h1>
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={handleUploadClick}
        >
          Upload
        </button>
      </div>
      <p className="text-lg text-gray-600 text-center">
        Manage your documents efficiently and securely.
      </p>

      {/* Render the folder structure */}
      <div>
        <FolderItem folder={folderStructure} />
      </div>

      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          onClick={handleOverlayClick} // Attach click handler to the overlay
        >
          <div className="flex items-center justify-center min-h-screen">
            <div
              ref={modalRef} // Attach the ref to the modal content
              className="bg-white rounded-lg shadow-lg w-full max-w-md p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Save Document</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2">
                    Document Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border rounded-lg px-4 py-2 w-full"
                    placeholder="Enter document name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="border rounded-lg px-4 py-2 w-full"
                    rows="3"
                    placeholder="Enter document description"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="file" className="block font-bold mb-2">
                    Upload File
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="border rounded-lg px-4 py-2 w-full"
                    onChange={handleFileChange} // Handle file selection
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
