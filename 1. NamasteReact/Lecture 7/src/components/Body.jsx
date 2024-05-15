// Creating the body component:

import RestaurantCard from './RestaurantCard'
// import resList from '../utils/MockData' . =>Since we are making an api call and setting the data to the State variable on which the Component is mapped so we no longer need it
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer';

const Body = () =>{
    const [searchText, setSearchText] = useState(''); 
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

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
            //! Using optional chaining
        setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
    
    const style = {
        padding: '10px',
    }

    function changeHandler (e){
        // console.log(resList);
        const FilterList = data.filter((rest) => rest.info.avgRating>4)
        setData(FilterList);
    }


    //  Loading Spinner => this is known as conditional rendering
    // if (data.length == 0){
    //     return <h1>Loading...</h1>;
    // }

    // Using Shimmer component: => implemented using terinary operator in js
    // if (data.length == 0){
    //         return <Shimmer/>;
    //     }

   
    function searchHandler(e){
        // ! Includes method
        const FilterData = data.filter((filteredData =>(filteredData.info.name.toLowerCase().includes(searchText.toLowerCase()))));
        setFilterData(FilterData);      
    }

    return data.length == 0? <Shimmer/> : (
        <div className="body">
            <div className='filter'>
                <div className='search'>
                    <input type="text" className="search-box" value ={searchText} onChange = {(e)=> (setSearchText(e.target.value))}/>
                    <button className="search-btn" onClick ={searchHandler}>Search</button>
                </div>
                <div>
                    <button className="filter-btn" onClick={changeHandler} >Top rated Restaurant</button>
                </div>
            </div>
            <div className="res-container">
                {
                    filterData.map((data,index) => (
                   
                            <RestaurantCard key={index} resData = {data.info} />
                        
                    ))
                }
            </div>
        </div>
    )

} 
export default Body;












 