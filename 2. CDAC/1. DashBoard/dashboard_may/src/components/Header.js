import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline, IoMdInformationCircleOutline } from 'react-icons/io';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { motion } from "framer-motion"


const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

function Header() {
  const [darkmode, setDarkmode] = useState(false);
  const [displayData, setDisplayData] = useState('Hi Admin');
  const [displayData1, setDisplayData1] = useState('Welcome to CDAC Dashboard');
  return (

    <nav className="sticky top-4 z-40 flex  items-center justify-between rounded-xl bg-white p-2 ml-4 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <p className="text-[33px] capitalize text-stone-950">
          <Link to="#" className="font-bold capitalize hover:text-black hover:scale-105 transition duration-300 ease-in-out">
            <div className='text-sm'>
              Hello Admin
            </div>
            <motion.div className='text-3xl'
              initial='hidden'
              animate='show'
              transition={{ staggerChildren: 0.1, duration:3 }}>
                {displayData1.split('').map((char, index) => {
                        return (
                            <motion.span key={index} variants={defaultAnimations} >
                            {char}
                            </motion.span>
                        );
                        })}
                
            </motion.div>
          </Link>
        </p>
      </div>

      <div className='flex gap-x-2'>
        <div className="relative flex h-[50px] w-[260px] items-center rounded-xl bg-white px-2 py-1 border border-slate-400 shadow-2xl ">
          <div className="flex  items-center  px-4"> 
            <p className="text-xl">
              <FiSearch className='absolute top-3 h-5 w-8 border-r-2 border-black left-1 ' />
            </p>
            <input
              type="text"
              placeholder="Search For Something"
              className="absolute right-7 p-1"
            />
          </div>
        </div>


      <div className="relative px-3 bg-slate-300 rounded-full"> 
          <div className="flex items-center justify-center h-5 w-6 "> 
            <IoMdNotificationsOutline className=" absolute top-2 h-8 w-8 bg-white rounded-full " />
          </div>
      </div>

        {/* <div  className="relative px-3 bg-slate-300 rounded-full">
            <p className="flex items-center justify-center h-5 w-6  "> 
              <IoMdInformationCircleOutline className=" absolute top-2 h-8 w-8 bg-white rounded-full" />
            </p>
        </div> */}
       

        {/* Adding the dark mode toggle */}
        {/* <div
            className="relative px-3 bg-slate-300 rounded-full" 
            onClick={() => {
              if (darkmode) {
                document.body.classList.remove('dark');
                setDarkmode(false);
              } else {
                document.body.classList.add('dark');
                setDarkmode(true);
              }
            }}
          >
            <div className="flex items-center justify-center h-5 w-6  ">
            {darkmode ? (
              <RiSunFill className="absolute top-3 h-6 w-6 bg-white rounded-full" />
            ) : (
              <RiMoonFill className="absolute top-2 h-8 w-8 bg-white rounded-full" />
            )}

          </div>
         
        </div> */}

        <div className="relative px-3 bg-slate-300 rounded-full">
          <div className="flex items-center justify-center h-5 w-6">  
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694269159~exp=1694269759~hmac=c8c65095b670091331a550b674305943e6a42c710a45b7356ecfe851d77b916b"
              className="absolute top-2 h-8 w-8 bg-white rounded-full"
              alt="profile"
            />
          </div>  
        </div>

      </div>
    </nav>
  );
}

export default Header;
