import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotForm() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState();

    function changeHandler(event){
        setUserName(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        console.log(userName);
        navigate('/')
    }

  return (
    <div className="flex justify-center items-center h-screen">
        <form onSubmit={submitHandler} className="flex flex-col w-2/3">
            <div className="flex flex-col items-center w-full px-6 gap-y-6">
                {/* Label for email address  */}
                <label className="w-full">
                    <p className="text-xl text-richblack-5 mb-4 font-bold leading-[1.375rem]">
                        Enter User Name<sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        value={userName}
                        onChange={changeHandler}
                        placeholder="Enter User Name"
                        name="userName"
                        className="bg-white rounded-[0.5rem] text-black w-full p-[12px]"
                    />
                </label>


                <button className="bg-yellow-100 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] mt-6">
                    <div className='text-black font-bold text-xl'>
                        Send Otp
                    </div>
                </button>
            </div>
        </form>
    </div>
  )
}

export default ForgotForm