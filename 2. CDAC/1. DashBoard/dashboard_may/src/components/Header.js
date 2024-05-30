import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { motion } from "framer-motion"
import { DarkModeContext } from '../context/AppContext';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [displayData, setDisplayData] = useState('Hi Admin');
  const [displayData1, setDisplayData1] = useState('Welcome to CDAC Dashboard');

  return (
    <nav className={`sticky top-4 z-40 flex items-center justify-between rounded-xl p-2 ml-4 backdrop-blur-xl ${
      darkMode
        ? 'bg-gray-900 text-white'
        : 'bg-white dark:text-white'
    }`}>
      <div className="ml-[6px]">
        <p className={`text-[33px] capitalize ${darkMode ? 'text-white' : 'text-stone-950'}`}>
          <Link to="#" className="font-bold capitalize hover:text-black hover:scale-105 transition duration-300 ease-in-out">
            <div className={`text-sm ${darkMode ? 'text-neutral-200' : 'text-stone-950'}`}>
              Hello Admin
            </div>
            <motion.div className='text-3xl'
              initial='hidden'
              animate='show'
              transition={{ staggerChildren: 0.1, duration:3 }}>
                {displayData1.split('').map((char, index) => {
                        return (
                            <motion.span key={index} variants={defaultAnimations} className={darkMode ? 'text-neutral-200' : 'text-stone-950'}>
                            {char}
                            </motion.span>
                        );
                        })}
            </motion.div>
          </Link>
        </p>
      </div>

      <div className='flex gap-x-2'>
        <div className={`relative flex h-[50px] w-[260px] items-center rounded-xl px-2 py-1 border shadow-2xl ${
          darkMode
            ? 'bg-gray-800  text-white sha'
            : 'bg-white border-slate-400 dark:bg-[#0b14374d] dark:border-slate-600 dark:text-white'
        }`}>
          <div className="flex items-center px-4"> 
            <p className={`text-xl ${darkMode ? 'text-white' : 'text-stone-950'}`}>
              <FiSearch className={`absolute top-3 h-5 w-8 border-r-2 left-1 ${darkMode ? 'border-white' : 'border-black'}`} />
            </p>
            <input
              type="text"
              placeholder="Search For Something"
              className={`absolute right-7 p-1 ${darkMode ? 'bg-[#0b14374d] text-white' : 'bg-white dark:bg-[#0b14374d] dark:text-white'}`}
            />
          </div>
        </div>

        <div className={`relative px-3 rounded-full ${
          darkMode
            ? 'bg-slate-600'
            : 'bg-slate-300 dark:bg-slate-600'
        }`}>
          <div className="flex items-center justify-center h-5 w-6"> 
            <IoMdNotificationsOutline className={`absolute top-2 h-8 w-8 rounded-full ${
              darkMode
                ? 'bg-[#0b14374d] text-white'
                : 'bg-white dark:bg-[#0b14374d] dark:text-white'
            }`} />
          </div>
        </div>

        <div className={`relative px-3 rounded-full ${
          darkMode
            ? 'bg-slate-600'
            : 'bg-slate-300 dark:bg-slate-600'
        }`}>
          <div className="flex items-center justify-center h-5 w-6">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <MdOutlineDarkMode className={`absolute top-2 right-2 h-8 w-8 rounded-full ${
                  darkMode
                    ? 'bg-[#0b14374d] text-white'
                    : 'bg-white dark:bg-[#0b14374d] dark:text-white'
                }`} />
              ) : (
                <MdDarkMode className={`absolute top-2 right-2 h-8 w-8 rounded-full ${
                  darkMode
                    ? 'bg-[#0b14374d] text-white'
                    : 'bg-white dark:bg-[#0b14374d] dark:text-white'
                }`} />
              )}
            </button>
          </div>
        </div>

        <div className={`relative px-3 rounded-full ${
          darkMode
            ? 'bg-slate-600'
            : 'bg-slate-300 dark:bg-slate-600'
        }`}>
          <div className="flex items-center justify-center h-5 w-6">  
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694269159~exp=1694269759~hmac=c8c65095b670091331a550b674305943e6a42c710a45b7356ecfe851d77b916b"
              className={`absolute top-2 h-8 w-8 rounded-full ${
                darkMode
                  ? 'bg-[#0b14374d] text-white'
                  : 'bg-white dark:bg-[#0b14374d] dark:text-white'
              }`}
              alt="profile"
            />
          </div>  
        </div>

      </div>
    </nav>
  );
}

export default Header;





