import React from 'react'
import logo from '../Assets/logo.png'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

function Navbar(){ 
  return (
    <div className='w-screen'>
      <nav className='flex h-[40px]' >
        <NavLink to ='/'>
          <div className=''>
              <img src ={logo}/>   
          </div>
        </NavLink>
        <div className='flex'>
          <NavLink to='/'>
            <p>Home1</p>
           
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