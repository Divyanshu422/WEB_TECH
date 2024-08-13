import React from 'react'
import toggle_light from '../assets/day.png';
import toggle_night from '../assets/night.png';
import logo_black from '../assets/logo-black.png';
import logo_white from '../assets/logo-white.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';


// Destructuring the variable and function
function NavBar({theme , setTheme}) {

    // Creating the toggle Function for changing the theme and setting the value

    const toogle_mode = () => {
      theme === 'light'? setTheme(dark): setTheme(light);
    }

  return (
    <div className='w-full h-screen bg-[#ced8ff]'>  
      <div className='w-100 flex items-center justify-between bg-white px-14 py-4'>
      {/* Logo */}
      <img src={logo_black} alt=' ' className='w-[160px] cursor-pointer'/>

      <ul className='flex gap-10 cursor-pointeer font-bold text-xl'>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

        {/* Search Box */}
        <div className='flex items-center bg-[#242424] px-[10px] gap-3 py-[10px] rounded-[50px] '>
          <input type='text' placeholder='Search' className='outline-none text-[#fff] bg-transparent font-[18px] border-[0] ml-3 border-white max-w-[200px]'/>
          <img src={search_icon_light} alt="" className='w-[20px] mr-2 cursor-pointer '/>    
        </div>

        {/* Toggle icon */}
        <img src ={toggle_night} alt='' className='w-[50px] cursor-pointer ml-[40px]'/>
     </div> 
    </div>
  )
}

export default NavBar