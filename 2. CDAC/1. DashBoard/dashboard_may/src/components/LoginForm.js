import React, { useEffect, useRef } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkValidataSignIn } from '../util/validate';

function LoginForm() {
   
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const captchaRef = useRef(null);

    const [showError, setShowError] = useState('');
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captcha: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    const result = checkValidataSignIn(emailRef.current.value, passwordRef.current.value);
    setShowError(result);
    console.log(emailRef);
    toast.success('Logged In');
    // navigate('/dashboard');
  }

  function forgotHandler() {
    navigate('/forgotpassword');
  }




  return (

    <div className="flex flex-col justify-center gap-y-5 items-center h-screen">
        <div className=''>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                className={`${accountType === "student" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("student")}>
                    Admin
                </button>

                <button
                className={`${accountType === "instructor" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>
                    SuperAdmin
                </button>
            </div>

        </div>
       
    
            <form onSubmit={submitHandler} className="flex flex-col w-2/3">
                <div className="flex flex-col items-center w-full px-6 gap-y-6">
                    {/* Label for email address  */}
                    <label className="w-full">
                        <p className="text-xl text-richblack-5 mb-4 font-bold leading-[1.375rem]">
                            Email Address<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={changeHandler}
                            ref={emailRef}
                            placeholder="Enter email address"
                            name="email"
                            className="bg-white rounded-[0.5rem] text-black w-full p-[12px]"
                        />
                    </label>

                    {/* Label for Password address  */}
                    <label className="w-full relative">
                        <p className="text-xl text-richblack-5 mb-4 font-bold  leading-[1.375rem]">
                            Password<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={changeHandler}
                            ref={ passwordRef}
                            placeholder="Enter Password"
                            name="password"
                            className="bg-white rounded-[0.5rem] text-black w-full p-[12px]"
                        />
                            <span className="absolute right-10 top-[48px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                                {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="black" />
                                ) : (
                                <AiOutlineEye fontSize={24} fill="black" />
                                )}
                            </span>
                        
                        <div className=' max-w-max ml-auto mt-1'>
                        <Link to="/forgotpassword" className="text-sm font-bold  underline  text-white hover:text-base hover:text-slate-300  ">
                            Forgot Password
                        </Link>
                        </div>
                    

                    </label>

                    <p className='text-red-500'>{showError}</p>

                    {/* <label className="w-full">
                        <p className="text-xl text-richblack-5 mb-4 font-bold  leading-[1.375rem]">
                            Captcha<sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            value={formData.captcha}
                            onChange={changeHandler}
                            placeholder="Please Enter Captcha"
                            name="email"
                            className="bg-white rounded-[0.5rem] text-black w-full p-[12px]"
                        />
                    </label> */}

                    <button className="bg-yellow-100 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] mt-6">
                        <div className='text-black font-bold text-xl'>
                            Sign In
                        </div>
                    </button>
                </div>
            </form>
    </div>

  )
};
    


export default LoginForm
