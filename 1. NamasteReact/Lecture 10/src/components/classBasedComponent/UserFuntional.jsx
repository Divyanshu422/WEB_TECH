
//  We are creating the user Component for the about us page => using both functional and class based structure
import React from 'react'
import {useState} from 'react'
function UserFuntional({details}) {

  // const [count, setCount] = useState(0);

  //*  Destructuring the details Component
  const {name, location, contact} = details;
  
  return (

            <div className="user-card">
                {/* <h2>Count: {count}</h2> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
  )
}

export default UserFuntional;
