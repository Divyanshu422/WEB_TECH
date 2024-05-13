import React from "react";
import ReactDOM from'react-dom/client';   



//  providing the inline styling => creating the object. this object is passed to the jsx as shown
const style = {
    padding: '10px',
}




// Creating the header component: has 2 things image and links
    const Header = () =>{
        return(
            <div className="header">
                {/* Logo */}
                <div>
                    <img className="logo" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt=""/>

                </div>
                <div>
                    <ul className="nav-items">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact US</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    }


    // Calling the Restuarant card:
 const RestaurantCard = (props ) => {
    console.log(props);     // it will be object
 
    const {resData} = props;            // Destructuring the data
    const {resName,cuisine,rating,price } = resData?.data;          // Optional chaining 
    return(
        <div className="res-card">
            <img className='res-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVW4wIPZxx3wlv5R_jJkt9bsepbjGRaOCq_a5rlJSZra9k_KZwoeltsPnK4rTCAAcXpHM&usqp=CAU' alt=''/>
            <h3>{resName}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{price}</h4>
          
        </div>
    )
 }






 //  Creating a object:
 const resObj = {
    data: {
        resName: 'KFC',
        cuisine: ["Burgers", "Biryani", "American", "FastFood"],
        rating: 4.4,
        delivery: 35,
        price: 400
    }
 }

// Creating the body component:
const Body = () =>{
    return(
        <div className="body">
            <div className="search" style = {style}>
                Search
            </div>
            <div className="res-container">
                {/*  Passing the prop to the RestaurantCars */}
                <RestaurantCard resData = {resObj}/>
                {/* <RestaurantCard resName = 'Meghana Foods' cuisine = 'Biryani, North Indian' rating = '4.4 star' delivery = '38 minutes'/> */}
                {/* <RestaurantCard resName = 'KFC' cuisine = 'Burger' rating = '4.1 star' delivery = '40 minutes'/> */}
            </div>
        </div>
    )

} 
// Creating the Restaurant card: which has followinf


// creating the parent container in which all component are rendered

const AppLayout = () => {
    return (
        <div className="App">
            <Header/>
            <Body/>

        </div>
    )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);