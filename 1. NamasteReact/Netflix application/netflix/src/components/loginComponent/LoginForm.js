import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function LoginForm() {
    const [isSignInForm, setIsSignInForm]= useState(true);

    const formHandler = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <form className='absolute flex flex-col h-screen w-screen items-center justify-center  '>
        <div className='flex flex-col bg-stone-950/80 w-3/12  py-20 px-10 gap-y-6 rounded-md'>

                <h1 className='text-4xl font-bold text-white w-10/12  mx-auto' > {isSignInForm? 'Sign In':'Sign Up'}</h1>
                {
                    isSignInForm && <input type='text' id="name-id" placeholder="Name of User" className='w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-500/50'/>
                }

                <input type='text' id="email-id" placeholder="Email or Phone number" className='w-10/12 mx-auto rounded-md py-4 px-4 text-neutral-100 bg-slate-500/50'/>
                <input type='password' id="password-id" placeholder="Password" className='w-10/12  mx-auto py-4 px-4 text-neutral-100 rounded-md bg-slate-500/50'/>
                <button className={`w-10/12  mx-auto py-4 px-4 text-neutral-100 text-xl font-bold  ${isSignInForm? 'bg-red-600':'bg-green-600'} rounded-md`}>{isSignInForm? 'Sign In':'Sign Up'}</button>

           

            <div className='flex w-10/12 text-sm justify-between mx-auto'>
                <div>
                    <input type='checkbox' id='remember_me' className=''/> 
                    <label htmlFor='remember_me' className='text-slate-300 pl-2 '>Remember me </label>
                </div>
                <NavLink className="text-slate-300">Need Help?</NavLink>
            </div>
            <div className='flex w-10/12 mx-auto'>
                {/* <span className="text-slate-300 text-sm">New to Netflix? </span> */}
                <NavLink className="text-slate-300 pl-1" onClick={formHandler}> 
                {isSignInForm? 'New to Netflix?  Signup Now':'Already Registered? Sign In Now'}</NavLink>
            </div>
            
        </div>
    </form>
  )
}

export default LoginForm
 