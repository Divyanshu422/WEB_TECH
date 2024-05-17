import React from 'react'
import Message from '../components/Message';
import LoginForm from '../components/LoginForm';


function Signup() {
    let data = {
        title: "Welcome to Cdac",
        subtitle: "Dashboard",
        description: "Enter your personal details to use all of site features"
    }
  return (
    <div className=' h-screen'>
        <div className='flex'>
            <div className='w-1/2 bg-green-50'>
                <Message data = {data}/>
            </div>
            <div className='w-1/2 bg-blue-950'>
                <LoginForm />
            </div>
        </div>    
    </div>
  );
}

export default Signup