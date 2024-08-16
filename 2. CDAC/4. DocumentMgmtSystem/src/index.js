import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SideBarToggleProvider from "./context/SideBarToggleContext";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <SideBarToggleProvider>
      <App />
    </SideBarToggleProvider>
  </ThemeContextProvider>
);
