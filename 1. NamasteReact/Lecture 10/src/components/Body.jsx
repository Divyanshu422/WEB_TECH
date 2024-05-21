

import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/UserHook/useOnlineStatus';

const Body = () =>{
    const [searchText, setSearchText] = useState(''); 
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5489889&lng=77.2887429&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
    
    const style = {
        padding: '10px',
    }

    function changeHandler (e){
        const FilterList = data.filter((rest) => rest.info.avgRating>4)
        setData(FilterList);
    }

    function searchHandler(e){
        // console.log(data);
        // const FilterData = data.filter((item)=>(item.info.name.toLowerCase().includes(searchText.toLowerCase())));
        const FilterData = data.filter((filteredData =>(filteredData.info.name.toLowerCase().includes(searchText.toLowerCase()))));
        // setFilterData(FilterData);      
    }

    console.log('body');

    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) return <h1>U ARE OFF LINE CODE </h1>

    return  filterData && filterData.length === 0? <Shimmer/> : (
        <div className="body">
            <div className='filter'>
                <div className='flex p-2 gap-2'>
                    <input type="text" className="border-2 border-black rounded-lg" value ={searchText} onChange = {(e)=> (setSearchText(e.target.value))}/>
                    <button className="bg-green-400 px-4 py-1 rounded-md hover:scale-105" onClick ={searchHandler}>Search</button>
                </div>
                <div className=' p-2'>
                    <button className="px-4 py-1 rounded-lg bg-slate-300  hover:scale-105" onClick={changeHandler} >Top rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
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












 