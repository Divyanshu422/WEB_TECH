import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Search } from "lucide-react";
import Logo from "../../../Assets/Navbar/Logo.png";
import User_Image from "../../../Assets/Navbar/User_Image.png";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

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
         ${theme == "light" ? "text-[#FAF0E6]" : "text-[#EEEEEE]"}  
        `}
        >
          Welcome to AIDBMS
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
          <div className=" flex p-3">
            <img src={User_Image} alt="" className="w-10 h-10 rounded-md" />
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
