   
//    Named exports:

import {CDN_URL} from '../utils/constants'
   
   
   // Calling the Restuarant card:
    const RestaurantCard = (props ) => {
        console.log(props);     // it will be object
    
        const {resData} = props;            // Destructuring the data
        const {resName, cuisine, rating, price, cloudinaryImageId } = resData;          
        return(
            <div className="res-card">
                {/* Using the cloudinary Image Id */}
                <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt=''/>
                <h3>{resName}</h3>
                <h4>{cuisine.join(", ")}</h4>
                <h4>{rating}</h4>
                <h4>{price}</h4>
            
            </div>
        )
    }



    export default RestaurantCard;