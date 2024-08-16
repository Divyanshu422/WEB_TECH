import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Search } from "lucide-react";
import Logo from "../../../Assets/Navbar/Logo.png";
import User_Image from "../../../Assets/Navbar/User_Image.png";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  // DropDown Toggle
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`w-full transition-all duration-500 ease-in-out`}>
      <div
        className={`flex items-center justify-between px-14 ${
          theme === "light" ? "bg-[#134B70]" : "bg-[#1E201E]"
        } transition-all duration-500 ease-in-out`}
      >
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-20 cursor-pointer" />

        {/* Heading */}
        <h1
          className={`text-4xl font-bold text-center flex-grow 
              ${theme === "light" ? "text-[#FAF0E6]" : "text-[#EEEEEE]"} 
             `}
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)" }} // Inline style for text shadow
        >
          Welcome to Document Management System
        </h1>
        {/* Search Box and Toggle Button Container */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div
            className={`flex items-center px-3 gap-2 py-2 rounded-full ${
              theme === "light" ? "bg-[#EEEEEE]" : "bg-[#3C3D37]"
            } transition-all duration-500 ease-in-out`}
          >
            <input
              type="text"
              placeholder="Search"
              className={`outline-none bg-transparent text-${
                theme === "light" ? "black" : "white"
              } font-medium`}
              aria-label="Search"
            />
            <Search
              className={`w-5 cursor-pointer text-${
                theme === "light" ? "black" : "white"
              }`}
              aria-label="Search Icon"
            />
          </div>

          {/* User info */}
          <div className="flex p-3 relative" onClick={handleDropDownToggle}>
            <img src={User_Image} alt="" className="w-10 h-10 rounded-md" />
            {isDropDownOpen && (
              <div
                ref={dropdownRef} // Attach the ref to the dropdown
                className={`absolute left-0 top-full mt-2 w-40 rounded-md shadow-lg
                  ${
                    theme === "light"
                      ? "bg-[#134B70] text-[#E2DFD0]"
                      : "bg-[#1E201E] text-[#EEEEEE]"
                  }
                `}
              >
                <ul className="list-none">
                  <li
                    className={`p-2 cursor-pointer ${
                      theme === "light"
                        ? "hover:bg-[#E2DFD0] hover:text-[#134B70]"
                        : "hover:bg-[#3C3D37] hover:text-[#1E201E]"
                    }`}
                  >
                    Profile
                  </li>
                  <li
                    className={`p-2 cursor-pointer ${
                      theme === "light"
                        ? "hover:bg-[#E2DFD0] hover:text-[#134B70]"
                        : "hover:bg-[#3C3D37] hover:text-[#1E201E]"
                    }`}
                  >
                    Settings
                  </li>
                  <li
                    className={`p-2 cursor-pointer ${
                      theme === "light"
                        ? "hover:bg-[#E2DFD0] hover:text-[#134B70]"
                        : "hover:bg-[#3C3D37] hover:text-[#1E201E]"
                    }`}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Toggle icon */}
          <button
            onClick={toggleMode}
            aria-label="Toggle Theme"
            className="w-10 h-10 cursor-pointer"
          >
            {theme === "light" ? "🌙" : "☀️"}{" "}
            {/* Simple text toggle for demo */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
