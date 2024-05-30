import React from 'react';
import { UserProfileData } from '../util/data';
import UserProfileCard from './UserProfileCard';
import { FiSearch } from 'react-icons/fi';
import { useContext } from 'react'
import { DarkModeContext } from '../context/AppContext'

function UserProfile() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div  className={` ${darkMode? 'bg-neutral-200':''}`}>
      <div className={`flex justify-evenly ${darkMode? 'bg-gray-900 text-white':''}`}>
        <h1 className='font-extrabold pl-5 py-3 text-2xl '>User Profile</h1>
        <div className="p-3 border-2 my-1 rounded-lg flex items-center"> 
          <div className="relative">
            <FiSearch className='absolute -bottom-3 left-2 h-6 w-6 text-gray-500' />
          </div>
          <input
            type="text"
            placeholder="Search For Something"
            className={`w-28 text-black  ml-2 pl-8 ${darkMode?'bg-slate-800 text-white':''}`}
          />
        </div>
      </div>
      
      <div className={`pb-1  ${darkMode?'bg-neutral-200  ':''}`} >
        {UserProfileData.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;