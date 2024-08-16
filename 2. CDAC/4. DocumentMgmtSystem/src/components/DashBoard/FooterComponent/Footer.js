import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex flex-col p-5 pr-40 justify-center items-center ${
        theme == "light" ? "bg-[#134B70] " : "bg-[#1E201E]"
      }`}
    >
      <div
        className={` ${
          theme == "light"
            ? "text-[#E2DFD0] text-xl font-bold"
            : "text-[#EEEEEE] text-xl font-bold"
        }`}
      >
        Website owned & maintained by: Centre for Development of Advanced
        Computing (C-DAC)
      </div>
      <div
        className={` ${
          theme == "light" ? "text-xs text-[#E2DFD0]" : "text-xs text-[#EEEEEE]"
        }`}
      >
        © 2024 C-DAC. All rights reserved, Last Updated: Monday, October 30,
        2023
      </div>
    </div>
  );
}

export default Footer;
