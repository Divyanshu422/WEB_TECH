import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Logo from "../../../Assets/Navbar/Logo.png";
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  // Creating the toggle function for changing the theme and setting the value
  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      className={` w-full ${
        theme === "light" ? "bg-[#ced8ff]" : "bg-[#222]"
      } transition-all duration-5000 ease-in-out`}
    >
      <div
        className={`w-100 flex items-center justify-between ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        } px-14 transition-all duration-5000 ease-in-out`}
      >
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-20 cursor-pointer" />

        {/* <ul
          className={`flex gap-10 cursor-pointer font-bold text-xl ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
        </ul> */}

        {/* Search Box */}
        {/* <div
          className={`flex items-center ${
            theme === "light" ? "bg-gray-200" : "bg-gray-700"
          } px-[10px] gap-3 py-[10px] rounded-[50px] transition-all duration-5000 ease-in-out`}
        >
          <input
            type="text"
            placeholder="Search"
            className={`outline-none bg-transparent font-[18px] border-[0] ml-3 max-w-[200px] ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          />
          <img
            src={theme === "light" ? search_icon_dark : search_icon_light}
            alt="Search Icon"
            className="w-[20px] mr-2 cursor-pointer"
          />
        </div> */}

        {/* Toggle icon */}
        {/* <img
          src={theme === "light" ? toggle_night : toggle_light}
          alt="Toggle Theme"
          className="w-[50px] cursor-pointer ml-[40px]"
          onClick={toggle_mode}
        /> */}
      </div>
    </div>
  );
}

export default Navbar;
