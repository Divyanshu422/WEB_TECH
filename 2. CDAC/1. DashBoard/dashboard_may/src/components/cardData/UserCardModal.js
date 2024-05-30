import React from 'react';
import { GiCancel } from 'react-icons/gi';
import { userData } from '../../util/data';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/AppContext';

function UserCardModal({ onClose }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-slate-500 bg-opacity-30'
      } backdrop-blur-sm`}
    >
      <div
        className={`relative p-10 rounded-lg shadow-lg w-full max-w-3xl ${
          darkMode ? 'bg-slate-900 text-white' : 'bg-white'
        }`}
      >
        <button
          className={`absolute top-4 right-4 ${
            darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
          } focus:outline-none`}
          onClick={onClose}
        >
          <GiCancel size={30} />
        </button>
        <h1 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : ''}`}>User Profile</h1>
        <div className="flex items-center mb-8">
          <img src={userData.img} className="h-32 w-32 rounded-full mr-8" alt="" />
          <div>
            <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>{userData.username}</h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Director</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Employee ID: {userData.id}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Details</h3>
            <p className={`mb-2 ${darkMode ? 'text-gray-400' : ''}`}>
              <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Designation:</span> {userData.designation}
            </p>
            <p className={`mb-2 ${darkMode ? 'text-gray-400' : ''}`}>
              <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Group:</span> {userData.group}
            </p>
            <p className={`mb-2 ${darkMode ? 'text-gray-400' : ''}`}>
              <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Center:</span> {userData.center}
            </p>
          </div>
          <div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Contact</h3>
            <p className={`mb-2 ${darkMode ? 'text-gray-400' : ''}`}>
              <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Email:</span> {userData.email}
            </p>
            <p className={`mb-2 ${darkMode ? 'text-gray-400' : ''}`}>
              <span className={`font-bold ${darkMode ? 'text-white' : ''}`}>Phone:</span> {userData.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardModal;