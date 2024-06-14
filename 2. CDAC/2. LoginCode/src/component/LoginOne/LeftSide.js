import React from 'react'
import { animate, easeIn, motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';


const parentVariants = {
    hidden: {
        y:"50vw"
    },
    visible:{
        y:"0" ,
        transition: {
            duration: 1.5,
        } 
    }
}

const childVariant  = {
    hidden:{
        y:"-5vw",
        opacity: 0
    },
    visible:{
        y:"0" ,
        opacity:1,
        transition: {
            duration: 0.8,
            delay: 1.5,
        }
    }
}

const childVariant1 = {
    hidden:{
        y:"-5vw",
        opacity:0
    },
    visible:{
        y:"0" ,
        opacity:1,
        transition: {
            duration: 0.8,
            delay: 2.5,
        }
    }
}

const childVariant2 = {
    hidden:{
        y:"-5vw",
        opacity:0
        
    },
    visible:{
        y:"0" ,
        opacity:1,
        transition: {
            duration:  0.8,
            delay: 3.5,
        }
    }
}

const childVariant3 = {
    hidden:{
        y:"-5vw",
        opacity:0
    },
    visible:{
        y:"0" ,
        opacity:1,
        transition: {
            duration: 1,
            delay: 4.5,
        }
    }
    
}



function LeftSide() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        captcha:''
      });
    
      const [showPassword, setShowPassword] = useState(false);

      function changeHandler(event) {
        setFormData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value,
        }));
      }
      

  return (
    
    <motion.div className='w-1/2  bg-white'
        variants={parentVariants}
        initial = "hidden"
        animate = "visible"
    >
        <form  className="flex flex-col items-center justify-center h-full bg-[#FYF8FB]">
                <div className="w-3/4  gap-y-7">
                    <motion.p className="text-3xl text-center text-richblack-900 pb-6 font-bold "
                        variants={childVariant}
                    >
                                Welcome Back
                     </motion.p>
                    {/* Label for email address  */}
                    <motion.label className="w-full flex flex-col"
                        variants={childVariant1}
                    >
                        <p className="text-2xl text-richblack-900 p-2 font-bold ">
                            Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={changeHandler}
                            placeholder="Enter email address"
                            name="email"
                            className="bg-white border-2 outline-none rounded-[0.5rem] m-2 text-black w-full p-[12px]"
                        />
                    </motion.label>

                    {/* Label for Password address  */}
                    <motion.label className="w-full relative flex flex-col"
                         variants={childVariant2}
                    >
                        <p className="text-xl text-richblack-900 p-2 pt-4 font-bold  leading-[1.375rem]">
                            Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            name="password"
                            className="bg-white border-2 outline-none rounded-[0.5rem] m-2 text-black w-full p-[12px]"
                        />
                            <span className="absolute right-10 bottom-12 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="black" />
                                ) : (
                                <AiOutlineEye fontSize={24} fill="black" />
                                )}
                            </span>
                        
                        <div className=' max-w-max ml-auto mt-1'>
                        <a to="#" className="text-sm font-bold  underline  text-richblack-900 hover:text-base hover:text-slate-900  ">
                            Forgot Password
                        </a>
                        </div>
                    

                    </motion.label>


                    <motion.button
                        className="bg-blue-600 rounded-[8px] font-medium w-full px-[12px] py-[8px] mt-6"
                        variants={childVariant3}
                        whileHover={{
                            // x:[0,-2,2,-2,2],
                            scale: [1, 1.03,1,1.03,1],
                            // scale: 1.1,
                            type: 'spring',
                            // textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,255,255)",
                            color: "#C17060",
                            // transition: {
                            //     yoyo: 10,
                            // }
                        }}
                        >
                        <div className="text-white font-bold text-xl">
                            Sign In
                        </div>
                    </motion.button>
                </div>
            </form>
        

    </motion.div>
  )
}

export default LeftSide