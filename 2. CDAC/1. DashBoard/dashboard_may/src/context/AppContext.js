import { useState } from "react";
import { createContext } from "react"
export const DarkModeContext = createContext();


// Provider
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    const clickButton = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, isModalOpen, clickButton }}>
        {children}
      </DarkModeContext.Provider>
    );
  };