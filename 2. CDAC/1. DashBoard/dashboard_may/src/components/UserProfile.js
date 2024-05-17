import React from 'react';
import { UserProfileData } from '../util/data';
import UserProfileCard from './UserProfileCard'

function UserProfile() {
  return (
    <div>
      <h1 className='font-extrabold pl-5 py-3 text-2xl'>User Profile</h1>
      <div>
        {
          UserProfileData.map((user) => (
            <UserProfileCard key={user.id} user={user} />
          ))
        }
      </div>
    </div>
  );
}

export default UserProfile;