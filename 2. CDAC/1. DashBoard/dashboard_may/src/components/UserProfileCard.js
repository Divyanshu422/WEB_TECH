import React, { useState } from 'react';

function UserProfileCard({ user }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(activeIndex === 0 ? 1 : 0);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex max-h-32items-center gap-4">
      <div>
        <img src={user.img} className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex-1 ">
        <h3 className="text-lg font-bold mb-1">{user?.username}</h3>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        onClick={handleClick}
      >
        Click Here
      </button>
    </div>
  );
}

export default UserProfileCard;