import UserClass from "./classBasedComponent/UserClass";
import UserFuntional from "./classBasedComponent/UserFuntional";


const About = () => {
    const details = {
        name: "Divyanshu",
        location: "Delhi",
        contact: "@divyanshu422"
    }
    return(
        <div>
            <h1>About</h1>
            <h2>This is my about Us page</h2>
            <UserClass details={details} />
            <UserFuntional details={details}/>
        </div>

    )
}

export default About;





