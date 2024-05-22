


// const hoc = (WrappedComponent) => {
//     return (props) =>{
//         return(
//             <div>
//                 {/* Adding functionality to the HOC */}

//                 <WrappedComponent {...props}/>

//             </div>
//         )
//     }
// }


export const HigherOrder = (RestaurantCard) => {
    // A HOC -> Returns the component
    return (props) => {
        return(
      // A component returns JSX
        <div>
          <label>
            Promoted
          </label>
           <RestaurantCard {...props} />
        </div>
        )
    };
};


//  Creating the component which call the HOC
const  ExtendendComponent = HigherOrder(RestaurantCard);


// Calling the extendedComponent
<ExtendendComponent props ={data}/>
  