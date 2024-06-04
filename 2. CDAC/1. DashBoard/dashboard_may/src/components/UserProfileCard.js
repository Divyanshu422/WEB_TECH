import React, { useState } from 'react';
import UserCardModal from '../components/cardData/UserCardModal';
import { useContext } from 'react';
import { DarkModeContext } from '../context/AppContext';

function UserProfileCard({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="m-4">
      <div
        className={`neutral shadow-md rounded-lg p-4 flex  max-h-32 items-center gap-4 ${darkMode ? 'bg-[#1D1F25] shadow-gray-900/50' : ''}`}
      >
        <div>
          <img src={user.img} className="w-16 h-16 rounded-full" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1">{user?.username}</h3>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
        <button
          className={`  text-white  hover:bg-blue-600 font-bold py-2 px-2 rounded-lg ${darkMode ? 'bg-slate-400 ]' : 'bg-blue-500  '}`}
          onClick={handleClick}
        >
          Click Here
        </button>
      </div>
      {isModalOpen && <UserCardModal onClose={handleCloseModal} />}
    </div>
  );
}

export default UserProfileCard;