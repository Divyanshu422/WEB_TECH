import React from 'react'
import { MdArrowDropDownCircle } from "react-icons/md";
import ItemList from './ItemList';

function RestaurantCategory({data}) {
    // console.log(data);

  return (
    <div className='w-6/12 mx-auto my-4 shadow-lg rounded-md'> 
        {/* Creating the according header */}
        <div className='flex justify-between mx-4'>
            <span className='font-bold text-2xl text-left px-2 py-2 '>{data?.title} ({data?.itemCards.length})</span>
                    {/* <span>{data?.itemCards.length}</span> */}

            <span > <MdArrowDropDownCircle size={20} /> </span>
        </div>
        {/* Item List */}
        <ItemList data = {data.itemCards}/>
    </div>
  )
}

export default RestaurantCategory