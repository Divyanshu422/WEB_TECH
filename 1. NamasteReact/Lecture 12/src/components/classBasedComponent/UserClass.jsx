
import React from "react";

//  We are creating the user Component for the about us page => using both functional and class based structure


class UserClass extends React.Component{
    //* To accept the props we have to use constructor in which super method is called
    constructor(props){
        super(props);
        // State variable:
        this.state = {
           userInfo:{
            name: 'Dummy',
            location: 'Dummy',
            contact: 'Dummy',
            image: '',
           }
        };
    }

    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     })
    // }

    //* Using the componentDidMount() function to fetch the data => therefore the function is made asynchronous
   async componentDidMount(){
    //  Fetching the data

        const data = await fetch('https://api.github.com/users/mojombo');
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo:{
                name: jsonData.login,
                location: jsonData.location,
                contact: jsonData.company,
                image: jsonData.avatar_url,
            }
        })

   }

    render(){
        // debugger;
        const {name} = this.props.details;
        return(
            <div className="user-card">
                {/* <h2>Count: {this.state.count}</h2> */}
                {/* <button onClick={this.increment}>Count Increased</button> */}
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: {this.state.userInfo.contact}</h4>
              
                <img src={this.state.userInfo.image} alt="image not rendered" className="classimg"/>
            </div>
        )
    }
    
}

export default UserClass;
