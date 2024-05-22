import React from 'react'
import { CDN_URL } from '../utils/constants'

function ItemList({ data }) {
  return (
    <div className='space-y-4'>
      {data.map((item) => (
        <div key={item?.card?.info?.id} className='flex items-center border-b-2 border-gray-200 pb-4'>
          <div className='flex-1'>
            <div className='font-bold text-xl'>{item?.card?.info?.name}</div>
            <div className='font-bold text-xl text-green-500'> ₹ {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</div>
            <div className='text-gray-500'>{item?.card?.info?.description}</div>
          </div>
          <div>
            <img src={CDN_URL + item?.card?.info?.imageId} alt="" className='w-20 h-20 object-cover rounded-md mr-4' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
