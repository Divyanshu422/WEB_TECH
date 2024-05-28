import React from 'react'
import logo from '../Assets/logo.png'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

function Navbar(){ 
  return (
    <div className='w-screen'>
      <nav className='flex h-[80px] items-center justify-evenly' >
        <NavLink to ='/'>
          <div className='h-[50px]'>
              <img src ={logo} className='w-[90px] h-[40px]'/>   
          </div>
        </NavLink>
        <div className='flex text-white text-xl font-bold gap-x-10 items-center'>
          <NavLink to='/'>
            <p>Home</p>
           
          </NavLink>
          <NavLink to='/cart'>
            <div>
              <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar