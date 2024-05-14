// Creating the body component:

import RestaurantCard from './RestaurantCard'
import resList from '../utils/MockData'
 //  Creating a object:
 const resList = [
    {
        resName: 'KFC',
        cuisine: ["Burgers", "Biryani", "American", "FastFood"],
        rating: 4.4,
        delivery: 35,
        price: 400,
        cloudinaryImageId:"b5bb7ff584ad97aebc3a08fba8e29bed"
    },
    {  
        resName: "Matbakh Al Hind",
        cuisine: [
            "Indian",
            "Fast Food"
          ],
        rating: 4.4,
        delivery: 31,
        price: 300,
        cloudinaryImageId:"FOOD_CATALOG/IMAGES/CMS/2024/3/19/46e6aa56-a5d3-4027-8960-52f85a668677_9894bf8c-e5ed-4f07-960e-2047a1bd6bfe.jpg",
    },
    {
        resName: "Slurpy Momos",
        cuisine: [
            "Chinese",
            "Burgers"
          ],
        rating: 4.0,
        delivery: 21,
        price: 340,
        cloudinaryImageId:"3c52a6bc69763e0436a578f621690df6",

    },
    {
        resName: "24Seven",
        cuisine: [
            "Bakery",
            "Cakes and Pastries",
            "Pizzas",
            "Burgers",
          ],
        rating: 4.7,
        delivery: 11,
        price: 200,
        cloudinaryImageId:"82475499e243ba9cc56e958559b8e223",
    },
    {
        resName: "Kurry Kingdom",
        cuisine: [
            "North Indian",
            "Burgers",
            "Chinese"
        ],
        rating: 3.4,
        delivery: 27,
        price: 230,
        cloudinaryImageId:"cx2zoxdmblxz078hkmsu",
    }
]
const Body = () =>{

        //  providing the inline styling => creating the object. this object is passed to the jsx as shown
    const style = {
        padding: '10px',
    }
    return(
        <div className="body">
            <div className="search" style = {style}>
                Search
            </div>
            <div className="res-container">
                {/*  Passing the prop to the RestaurantCars and passing the data */}
                {/* <RestaurantCard resData = {resList[0]}/> */}
                {/* using the map function to render the UI for all the data => with out return */}


                {
                    resList.map((data,index) => (
                            <RestaurantCard key={index} resData = {data} />
                    ))
                }


                {/* Or using map with return */}
                {/* {
                    resList.map((data) => {
                        return(
                        <RestaurantCard resData = {data} />
                        )}
                    )
                } */}
            </div>
        </div>
    )

} 
export default Body;