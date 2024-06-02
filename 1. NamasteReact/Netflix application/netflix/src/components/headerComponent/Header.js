// The header component is used in the Login Component

import React from 'react'

function Header() {
  return (
    <div className='absolute flex items-center justify-around  w-screen bg-gradient-to-b from-black  '>

        <img src =" https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png " alt="Netflix Logo" className ="w-60" />

        <div className=' flex gap-x-10 '>
            <div className=' border-[1px] py-[0.5rem] px-4 border-white rounded-sm text-white'>
                <select id="language" name="language" className='bg-inherit'>
                    <option lang="en" label="English" value="en-IN" selected="">English</option>
                    <option lang='hi' value="hindi">हिन्दी</option>
                </select>
            </div>
            <button className='bg-red-600 py-1 px-4 text-white font-medium rounded-sm'>Sign In</button>
        </div>
      
    </div>
  )
}

export default Header
