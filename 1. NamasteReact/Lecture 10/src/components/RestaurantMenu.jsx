import React from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/UserHook/useRestaurantMenu';
import Shimmer from './Shimmer';

function RestaurantMenu() {
  const { resId } = useParams();
  const [menuList, resData] = useRestaurantMenu();

  return resData.length === 0 ? (<Shimmer/>) : (
    <div className='menu'>
      <h1>{resData[0]?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul className='grid grid-cols-2 gap-4'>
        {menuList.map((menu, index) => (
          <li key={index} className='res-card p-4 bg-white shadow-md rounded-lg'>
            <div>
              <h3 className='font-bold'>{menu.card.info.name}</h3>
              <img className='res-logo mt-2' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menu.card.info.imageId}`} alt='' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
