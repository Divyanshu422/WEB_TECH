import React from 'react';
import { UserProfileData } from '../util/data';
import UserProfileCard from './UserProfileCard';
import { FiSearch } from 'react-icons/fi';

function UserProfile() {
  return (
    <div>
      <div className='flex justify-evenly'>
        <h1 className='font-extrabold pl-5 py-3 text-2xl'>User Profile</h1>
        <div className="p-3 border-2 my-1 rounded-lg flex items-center"> 
          <div className="relative">
            <FiSearch className='absolute -bottom-3 left-2 h-6 w-6 text-gray-500' />
          </div>
          <input
            type="text"
            placeholder="Search For Something"
            className=" w-28 text-black bg-white ml-2 pl-8"
          />
        </div>
      </div>
      
      <div>
        {UserProfileData.map((user) => (
          <UserProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;