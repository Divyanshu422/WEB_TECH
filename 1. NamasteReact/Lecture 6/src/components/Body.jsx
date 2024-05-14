// Creating the body component:

import RestaurantCard from './RestaurantCard'
import resList from '../utils/MockData'


import { useState, useEffect } from 'react'

const Body = () =>{

    const [data, setData] = useState([])

    useEffect(()=>{
        // Calling the function for fetching data
        fetchData();
    },[]);

   const fetchData = async () => {
    // Fetching the data from the API
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5489889&lng=77.2887429&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // Converting the data into JSON format
        const jsonData = await data.json();
        console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setData(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   }
    
    const style = {
        padding: '10px',
    }

    function changeHandler (e){
        // console.log(resList);
        const FilterList = data.filter((rest) => rest.info.avgRating>4)
        setData(FilterList);
    }


    return(
        <div className="body">
            <div>
                <button className="filter-btn" onClick={changeHandler} >Top rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    data.map((data,index) => (
                   
                            <RestaurantCard key={index} resData = {data.info} />
                        
                    ))
                }
            </div>
        </div>
    )

} 
export default Body;








