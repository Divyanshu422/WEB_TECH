import React, { useState } from 'react';
import { MdArrowDropDownCircle } from "react-icons/md";
import ItemList from './ItemList';

function RestaurantCategory({ data }) {
    const [show, setShow] = useState(false);

    // console.log(data1);
    const handleclick = () => {
        setShow(!show);
    };

    return (
        <div className='w-6/12 mx-auto my-4 shadow-lg rounded-md'> 
            <div className='flex justify-between mx-4'>
                <span className='font-bold text-2xl text-left px-2 py-2 '>{data?.title} ({data?.itemCards.length})</span>
                <span onClick={handleclick} className='hover:cursor-pointer'> <MdArrowDropDownCircle className='w-6 h-6'/> </span>
            </div>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${show ? 'max-h-screen' : 'max-h-0'}`}>
                {show && <ItemList data={data.itemCards}/>}
            </div>
        </div>
    );
}

export default RestaurantCategory;