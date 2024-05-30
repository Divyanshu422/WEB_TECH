import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '../util/data';
import { DarkModeContext } from '../context/AppContext';

function ChartBox() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`border-2 p-4 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h1 className='text-2xl font-bold p-2'>{darkMode ? 'Registered User (Dark Mode)' : 'Registered User'}</h1>
      <div>
        <AreaChart 
          width={730} 
          height={250} 
          data={data} 
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={darkMode ? '#718096' : '#8884d8'} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={darkMode ? '#718096' : '#8884d8'} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={darkMode ? '#63b3ed' : '#82ca9d'} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={darkMode ? '#63b3ed' : '#82ca9d'} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke={darkMode ? '#718096' : '#8884d8'} fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke={darkMode ? '#63b3ed' : '#82ca9d'} fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>
    </div>
  );
}

export default ChartBox;