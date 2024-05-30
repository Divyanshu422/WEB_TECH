import { GiCancel } from 'react-icons/gi';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/AppContext';

const Modal = ({ onClose }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        darkMode ? 'bg-slate-800 bg-opacity-50' : 'bg-slate-500 bg-opacity-30'
      } backdrop-blur-sm`}
    >
      <div
        className={`relative p-10 rounded-lg ${
          darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100'
        }`}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <GiCancel size={30} color={darkMode ? 'white' : 'black'} />
        </button>
        <div className="flex gap-x-10 items-center justify-between">
          <div className="flex flex-col gap-y-5">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : ''}`}>Upcoming Holidays</h1>
            <table
              className={`min-w-full divide-y ${
                darkMode ? 'divide-gray-600 bg-slate-800' : 'divide-green-800 bg-white'
              }`}
            >
              <thead className={`${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                <tr>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    } uppercase tracking-wider`}
                  >
                    No.
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    } uppercase tracking-wider`}
                  >
                    Name
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    } uppercase tracking-wider`}
                  >
                    Date
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    } uppercase tracking-wider`}
                  >
                    Day
                  </th>
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  darkMode ? 'divide-gray-600 bg-slate-800' : 'divide-gray-200 bg-white'
                }`}
              >
                <tr>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>1</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>Diwali</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>19th_Sep</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>Wednesday</td>
                </tr>
                <tr>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>2</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>Govardhan Puja</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>25th_Sep</td>
                  <td className={`px-6 py-4 whitespace-nowrap ${darkMode ? 'text-gray-400' : ''}`}>Thursday</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button
              className={`p-4 rounded-lg text-2xl font-bold text-white hover:scale-105 hover:bg-green-300 hover:text-black items-center ${
                darkMode
                  ? 'bg-blue-800 hover:bg-green-800 hover:text-white'
                  : 'bg-blue-500 hover:bg-green-300 hover:text-black'
              }`}
            >
              Download Pdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;