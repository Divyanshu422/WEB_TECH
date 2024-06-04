import React from 'react'
import { useContext } from 'react'
import { DarkModeContext } from '../context/AppContext'

function Footer() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`flex flex-col p-5 pr-40 justify-center items-center ${darkMode? 'bg-[#414C59] ':'bg-slate-200' }`}>
        <div className={` ${darkMode? 'text-[#D1D1D2] text-xl font-bold':'text-blue-800 text-xl font-bold'}`}>
        Website owned & maintained by: Centre for Development of Advanced Computing (C-DAC)
        </div>
        <div className={` ${darkMode? 'text-xs text-[#D1D1D2]':'text-xs text-blue-900'}`}>
        © 2024 C-DAC. All rights reserved, Last Updated: Monday, October 30, 2023
        </div>
       
    </div>
  )
}

export default Footer