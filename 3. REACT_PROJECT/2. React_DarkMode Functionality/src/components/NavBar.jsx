import React from 'react';
import toggle_light from '../assets/day.png';
import toggle_night from '../assets/night.png';
import logo_black from '../assets/logo-black.png';
import logo_white from '../assets/logo-white.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';

// Destructuring the variable and function
function NavBar({ theme, setTheme }) {
  // Creating the toggle function for changing the theme and setting the value
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`w-full h-screen ${theme === 'light' ? 'bg-[#ced8ff]' : 'bg-[#222]'} transition-all duration-5000 ease-in-out`}>
      <div className={`w-100 flex items-center justify-between ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} px-14 py-4 transition-all duration-5000 ease-in-out`}>
        {/* Logo */}
        <img src={theme === 'light' ? logo_black : logo_white} alt='Logo' className='w-[160px] cursor-pointer' />

        <ul className={`flex gap-10 cursor-pointer font-bold text-xl ${theme === 'light' ? 'text-black' : 'text-white'}`}>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
        </ul>

        {/* Search Box */}
        <div className={`flex items-center ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'} px-[10px] gap-3 py-[10px] rounded-[50px] transition-all duration-5000 ease-in-out`}>
          <input
            type='text'
            placeholder='Search'
            className={`outline-none bg-transparent font-[18px] border-[0] ml-3 max-w-[200px] ${theme === 'light' ? 'text-black' : 'text-white'}`}
          />
          <img src={theme === 'light' ? search_icon_dark : search_icon_light} alt="Search Icon" className='w-[20px] mr-2 cursor-pointer' />
        </div>

        {/* Toggle icon */}
        <img
          src={theme === 'light' ? toggle_night : toggle_light}
          alt='Toggle Theme'
          className='w-[50px] cursor-pointer ml-[40px]'
          onClick={toggle_mode}
        />
      </div>
    </div>
  );
}

export default NavBar;