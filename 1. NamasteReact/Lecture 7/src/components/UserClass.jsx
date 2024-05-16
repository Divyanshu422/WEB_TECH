
import React from "react";

class UserClass extends React.Component{

    // Constructor:
    constructor(props){
        super(props);
    console.log(props);
    }

    render(){
        const {location} = this.props;
        return(
            <div className="user-card">
                <div>{this.props.name}</div>
                <div>{location}</div>

            </div>
        )
    }


}

export default UserClass;
