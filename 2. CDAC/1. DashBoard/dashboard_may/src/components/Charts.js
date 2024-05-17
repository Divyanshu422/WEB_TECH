import React from 'react';
import UserProfile from './UserProfile';
import ChartBox from './ChartBox';

function Charts() {
  return (
    <div className='m-10 grid gap-3 grid-cols-3 auto-rows-max'>
      <div className='border-2 p-1 rounded-lg row-span-4 bg-blue-50'>
        <UserProfile/>
      </div>
      <div className=' p-3 rounded-lg col-span-2 row-span-2 rounded-sm'>
        <ChartBox />
      </div>
    </div>
  );
}

export default Charts;