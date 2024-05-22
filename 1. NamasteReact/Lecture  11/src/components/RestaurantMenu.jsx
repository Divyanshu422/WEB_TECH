import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/UserHook/useRestaurantMenu';
import Shimmer from './Shimmer';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {
  const { resId } = useParams();
  const [menuList, resData] = useRestaurantMenu();


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


  {/* <ul className='grid grid-cols-2 gap-4'>
        {menuList.map((menu, index) => (
          <li key={index} className='res-card p-4 bg-white shadow-md rounded-lg'>
            <div>
              <h3 className='font-bold'>{menu.card.info.name}</h3>
              <img className='res-logo mt-2' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menu.card.info.imageId}`} alt='' />
            </div>
          </li>
        ))}
      </ul> */}
