import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FolderUp } from "lucide-react";

function Data() {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);
  const modalRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentFile(null);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const updatedFiles = selectedFiles.map((file) => ({
      file,
      documentName: "",
      documentDescription: "",
    }));
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    setCurrentFile(updatedFiles[0]);
  };

  const handleDocumentNameChange = (event) => {
    setCurrentFile((prev) => ({
      ...prev,
      documentName: event.target.value,
    }));
  };

  const handleDocumentDescriptionChange = (event) => {
    setCurrentFile((prev) => ({
      ...prev,
      documentDescription: event.target.value,
    }));
  };

  const handleSave = () => {
    if (currentFile) {
      setFiles((prevFiles) =>
        prevFiles.map((file) =>
          file.file === currentFile.file
            ? {
                ...file,
                documentName: currentFile.documentName,
                documentDescription: currentFile.documentDescription,
              }
            : file
        )
      );
    }
    setShowModal(false);
    setCurrentFile(null);
  };

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleModalClose();
    }
  };

  return (
    <div
      className={`m-4 ${
        theme === "light" ? "bg-white text-gray-800" : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-center flex-grow">
          Welcome to Document Management System
        </h1>
        <button
          className={`bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center ${
            theme === "light" ? "bg-blue-600" : "bg-blue-700"
          }`}
          onClick={handleUploadClick}
          aria-label="Upload Document"
        >
          Upload <FolderUp className="ml-2" />
        </button>
      </div>
      <p className="text-lg text-center">
        Manage your documents efficiently and securely.
      </p>

      {/* Display uploaded files */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {files.map((fileData, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg shadow-md ${
              theme === "light"
                ? "bg-white text-gray-800"
                : "bg-gray-800 text-white"
            }`}
          >
            {fileData.file.type.startsWith("image/") && (
              <img
                src={URL.createObjectURL(fileData.file)}
                alt={fileData.file.name}
                className="w-full h-auto max-w-[300px] mb-2 object-cover"
              />
            )}
            {fileData.file.type === "application/pdf" && (
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2">📄</span>
                <span className="text-sm font-medium">
                  {fileData.file.name}
                </span>
              </div>
            )}
            {fileData.file.type.startsWith("video/") && (
              <video controls className="w-full h-auto max-w-[300px] mb-2">
                <source
                  src={URL.createObjectURL(fileData.file)}
                  type={fileData.file.type}
                />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="mt-2">
              <span className="font-medium">Document Name:</span>{" "}
              <span>{fileData.documentName || "N/A"}</span>
            </div>
            <div className="mt-2">
              <span className="font-medium">Document Description:</span>{" "}
              <span>{fileData.documentDescription || "N/A"}</span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          onClick={handleOverlayClick}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div
              ref={modalRef}
              className={`rounded-lg shadow-lg w-full max-w-md p-6 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Upload Files</h2>
              <div
                className={`border-2 border-dashed rounded-lg p-6 mb-4 ${
                  theme === "light" ? "border-gray-300" : "border-gray-600"
                }`}
              >
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <span className="text-4xl mb-2">📂</span>
                  <span className="text-gray-500">
                    Drag and drop files here or click to select
                  </span>
                </label>
              </div>
              {currentFile && (
                <>
                  <input
                    type="text"
                    placeholder="Enter Document Name"
                    value={currentFile.documentName}
                    onChange={handleDocumentNameChange}
                    className={`border rounded-lg px-4 py-2 w-full mb-4 ${
                      theme === "light"
                        ? "border-gray-300"
                        : "border-gray-600 text-gray-800"
                    }`}
                  />
                  <textarea
                    placeholder="Enter Document Description"
                    value={currentFile.documentDescription}
                    onChange={handleDocumentDescriptionChange}
                    className={`border rounded-lg px-4 py-2 w-full mb-4 h-24 ${
                      theme === "light"
                        ? "border-gray-300"
                        : "border-gray-600 text-gray-800"
                    }`}
                  ></textarea>
                </>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2 ${
                    theme === "light" ? "bg-gray-200" : "bg-gray-700 text-white"
                  }`}
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={`bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg`}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
