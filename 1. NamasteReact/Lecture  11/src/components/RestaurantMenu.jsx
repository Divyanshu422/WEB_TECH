import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/UserHook/useRestaurantMenu';
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {
  const { resId } = useParams();
  const [menuList, resData] = useRestaurantMenu();

  console.log(menuList);


  const category = menuList.filter((item)=> (item?.card?.card?.['@type']=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'))
  console.log(category[0]?.card?.card);


  return resData.length === 0 ? (<Shimmer/>) : (
    <div className='menu py-20'>
      <h1 className='text-4xl italic text-center font-bold pb-4'>{resData}</h1>
      <h2 className='text-center font-light text-2xl text-red-600'>Menu</h2>

      {/* Building the accordian */}
      {
        category.map((items, index)=>(
              
            <RestaurantCategory key={index} data = {items?.card?.card}/>
        ))
      }
      

    
    </div>
  );
}

export default RestaurantMenu;


