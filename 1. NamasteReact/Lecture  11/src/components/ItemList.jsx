import React from 'react'
import { CDN_URL } from '../utils/constants'

function ItemList({ data }) {
    console.log(data)
  return (
    <div className='space-y-4 px-8'>
      {data.map((item) => (
        <div key={item?.card?.info?.id} className='flex items-center border-b-2 border-gray-200 pb-4'>
          <div className='flex-1'>
            <div className='font-bold text-xl'>{item?.card?.info?.name}</div>
            <div className='font-bold text-xl text-green-500'> ₹ {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</div>
            <div className='text-gray-500'>{item?.card?.info?.description}</div>
          </div>
          <div className='relative'>
            <img src={CDN_URL + item?.card?.info?.imageId} alt="" className='w-20 h-30 object-cover rounded-md mr-4' />
            <button className=' absolute font-extrabold text-sm  -bottom-4 left-2 border-slate-300 shadow-sm bg-white rounded-lg text-green-400 px-4 py-1'>ADD</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
