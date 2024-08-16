import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return <div>CHECKING THE ThemeContex</div>;
}

export default Navbar;
