import React from 'react'
import {useState, useEffect } from 'react'
import Shimmer from './Shimmer';

function RestaurantMenu() {

  const [resData, setResData] = useState([]); 
  const [menuList, setMenuList] = useState([]);

  //  To make a api call we will use useEffect
  useEffect(() => {
      fetchMenu();
  },[])

  //  making an api call 
  const fetchMenu = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61426970867492&lng=77.3554216325283&restaurantId=883912&catalog_qa=undefined&submitAction=ENTER');
    const menu = await data.json();
    console.log(menu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
      setResData(menu?.data?.cards[2]?.card?.card?.info);
      setMenuList(menu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
  }
  return resData.length == 0? (<Shimmer/>) :(
    <div className='menu'>
        <h1>
           {resData.name}
        </h1>
        <h2>Menu</h2>
        <ul>
  {
    menuList.map((menu) => (
      <li className='res-card'>
        {menu.card.info.name}
        <img className='res-logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menu.card.info.imageId}`} />
      </li>
    ))
  }
</ul>

      
    </div>
  )
}

export default RestaurantMenu
