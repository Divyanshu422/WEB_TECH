import React from 'react'
import Message from '../components/Message'
import ForgotForm from '../components/ForgotForm'

function ForgotPassword() {
    let data = {
      title: "Welcome to Cdac",
      subtitle: "Dashboard",
      description: "Please enter the userName"
    }
  return (
    
    <div className=' h-screen'>
        <div className='flex'>
            <div className='w-1/2 bg-fuchsia-50'>
                <Message  data = {data}/>
            </div>
            <div className='w-1/2 bg-sky-950'>
                <ForgotForm />
            </div>
        </div>    
    </div>

  )
}

export default ForgotPassword