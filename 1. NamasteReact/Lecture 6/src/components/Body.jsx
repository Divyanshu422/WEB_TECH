// Creating the body component:

import RestaurantCard from './RestaurantCard'
import resList from '../utils/MockData'


import { useState } from 'react'

const Body = () =>{

    const [data, setData] = useState(resList);

        //  providing the inline styling => creating the object. this object is passed to the jsx as shown
    const style = {
        padding: '10px',
    }

    function changeHandler (e){
        //    this is the function which is called when the button is clicked
        console.log(resList);
        // ! In React we cant change the state of variable directly assigning it new value
        // resList = resList.filter((rest) => rest.rating>4);
        const FilterList = resList.filter((rest) => rest.rating>4)
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
                            <RestaurantCard key={index} resData = {data} />
                    ))
                }
            </div>
        </div>
    )

} 
export default Body;