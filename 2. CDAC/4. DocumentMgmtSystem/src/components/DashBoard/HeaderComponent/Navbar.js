import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Search, AlignCenter } from "lucide-react";
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
        <div className="flex items-center bg-[#F5F5F5] p-3 rounded-md col-span-2">
          <Search />
          <input
            type="text"
            placeholder="Search in Drive"
            className="w-[740px] bg-transparent outline-none px-2"
          />
          <AlignCenter />
        </div>

        <div className="flex items-center gap-3">
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
