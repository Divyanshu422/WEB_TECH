import React, { useState } from 'react';

function UserProfileCard({ user }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(activeIndex === 0 ? 1 : 0);
  };

  return (
    <div className='flex items-center gap-3 pr-3'>
      <div>
        <img src={user.img} className='w-14 h-14 rounded-full m-4' />
      </div>
      <div className='flex flex-col justify-center flex-grow p-3'>
        <p className='text-xl font-extrabold'>{user?.username}</p>
        <p className='p-1 text-center text-sm'>{user.email}</p>
      </div>
      <button className='bg-blue-950 text-white p-3 rounded-[8px] hover:bg-slate-500'>Click Here</button>
    </div>
  );
}

export default UserProfileCard;