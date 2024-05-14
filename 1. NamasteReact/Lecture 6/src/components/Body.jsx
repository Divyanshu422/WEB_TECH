// Creating the body component:

import RestaurantCard from './RestaurantCard'
import resList from '../utils/MockData'


import { useState, useEffect } from 'react'

const Body = () =>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        // Calling the function for fetching data
        fetchData();
    },[]);

    // async function fetchData() {
        const fetchData = async () =>{
    // Fetching the data from the API`
        /*
          Since i am fetching the data from the swiggy server -> there is Possibility that
          we get an error due to fetch from cross platform. as a result, browser will not render
          the data. hence to sove this issue we need to add an extension to the browser which
          is: Allow cross and then start it.
        */
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








