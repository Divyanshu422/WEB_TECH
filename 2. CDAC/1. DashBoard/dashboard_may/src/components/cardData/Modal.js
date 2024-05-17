// import React from 'react';
import { GiCancel } from 'react-icons/gi';

const Modal = ({onClose}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-500 bg-opacity-30 backdrop-blur-sm">
      <div className="relative bg-slate-100 p-10 rounded-lg">
        <button  onClick={onClose} className="absolute top-4 right-4">
          <GiCancel size={30} color="black" />
        </button>
        <div className="flex gap-x-10 items-center justify-between ">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-2xl font-bold">Upcoming Holidays</h1>
            <table className="min-w-full divide-y divide-green-800">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">Diwali</td>
                  <td className="px-6 py-4 whitespace-nowrap">19th_Sep</td>
                  <td className="px-6 py-4 whitespace-nowrap">Wednesday</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">Govardhan Puja</td>
                  <td className="px-6 py-4 whitespace-nowrap">25th_Sep</td>
                  <td className="px-6 py-4 whitespace-nowrap">Thursday</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button className="bg-blue-500 p-4 rounded-lg text-2xl font-bold text-white hover:scale-105 hover:bg-green-300 hover:text-black items-center">
              Download Pdf
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;