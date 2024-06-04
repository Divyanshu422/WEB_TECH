import React from 'react';
import { UserProfileData } from '../util/data';
import UserProfileCard from './UserProfileCard';
import { FiSearch } from 'react-icons/fi';
import { useContext } from 'react'
import { DarkModeContext } from '../context/AppContext'

function UserProfile() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div  className={` ${darkMode? 'bg-[#040404]':''}`}>
      <div className={`flex justify-evenly ${darkMode? 'bg-[#040404] text-white':''}`}>
        <h1 className='font-extrabold pl-5 py-3 text-2xl '>User Profile</h1>
        <div className={`p-2 px-4 my-2 rounded-lg flex items-center ${darkMode? 'bg-[#1D1F25]':''} `}> 
          <div className="relative">
            <FiSearch className='absolute -bottom-3 left-2 h-6 w-6 text-gray-500' />
          </div>
          <input
            type="text"
            placeholder="Search For Something"
            className={`w-28 text-black outline-none ml-2 pl-8 ${darkMode?'bg-[#1D1F25] text-white':''}`}
          />
        </div>
      </div>
      
      <div className={`pb-1  ${darkMode?'bg-[#040404] ':''}`} >
        {UserProfileData.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;