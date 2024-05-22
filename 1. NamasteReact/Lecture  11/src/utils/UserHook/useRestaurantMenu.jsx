// // Hooks are the normal JS functions

// import { useState, useEffect } from "react";
// import { MenuApi } from "../constants";

// const useRestaurantMenu = () =>{

//     const [resData, setResData] = useState([]); 
//     const [menuList, setMenuList] = useState([]);
//     // Fetching the data
//     useEffect(() => {
//         fetchMenu();
//     },[])

//     const fetchMenu = async () => {

//         const data = await fetch(MenuApi);
//         const menu = await data.json();
//         console.log(menu)
//         // console.log(menu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
//           setResData(menu?.data?.cards[2]?.card?.card?.info);
//           setMenuList(menu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
//       }


//     //  IN this hook => it returns the menuList in which we have called Cards
//     return [menuList, resData]   ;
// }

// export default useRestaurantMenu;



import { useState, useEffect } from "react";
import { MenuApi } from "../constants";

const useRestaurantMenu = () => {
  const [resData, setResData] = useState([]);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MenuApi);
    const menu = await data.json();
    setResData(menu?.data?.cards[2]?.card?.card?.info);
    console.log(menu);
    setMenuList(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  };

  return [menuList, resData];
};

export default useRestaurantMenu;