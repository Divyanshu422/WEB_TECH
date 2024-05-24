
import { useState, useEffect } from "react";
import { MenuApi } from "../constants";

const useRestaurantMenu = () => {
  const [resData, setResData] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MenuApi);
    const menu = await data.json();
    console.log('fetching data')
    setResData(menu?.data?.cards[2]?.card?.card?.info.name);
    setMenuList(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    setData1(menu);
  };

  return [menuList, resData];
};

export default useRestaurantMenu;