import React from 'react';
import { UserProfileData } from '../util/data';
import UserProfileCard from './UserProfileCard'

function UserProfile() {
  return (
    <div>
      <h1 className='font-bold pl-3 pt-3 text-xl overflow-hidden'>User Profile</h1>
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