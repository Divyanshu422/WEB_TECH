   
//    Named exports:

import {CDN_URL} from '../utils/constants'
   
   
   // Calling the Restuarant card:
    const RestaurantCard = (props ) => {
        // console.log(props);     // it will be object
    
        const {resData} = props;            // Destructuring the data
        // console.log(resData);
        // const {name, cloudinaryImageId} = resData;
        const {name, cuisines, avgRating,costForTwo, cloudinaryImageId } = resData;          
        return(
            <div className="res-card">
                {/* Using the cloudinary Image Id */}
                <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt=''/>
                <h3>{name}</h3>
                <h4>{cuisines}</h4>
                <h4>{avgRating}</h4> 
                <h4>{costForTwo}</h4>
            
            </div>
        )
    }



    export default RestaurantCard;