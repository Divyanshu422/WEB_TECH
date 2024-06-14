import React from 'react'
import LeftSide from '../component/LoginOne/LeftSide'
import RightSide from '../component/LoginOne/RightSide'

function LoginOne() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#1f2331] w-screen h-screen'>
        <div className='flex m-10 w-10/12 h-5/6'>
            <LeftSide/>
            <RightSide/>
        </div>
    </div>
  )
}

export default LoginOne