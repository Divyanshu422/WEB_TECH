 
 import {LOGO_URL} from '../utils/constants'
 
 import { useState } from 'react';
 // Creating the header component: has 2 things image and links
 const Header = () =>{
    //  Creating a local variable to change the state of Button -> Login and logout

    const [isLoggedIn, setLoggedIn] = useState('Login');

    function clickHandler(e){
        if (isLoggedIn == 'Login'){
            setLoggedIn('LogOut');
        }
        else{
            setLoggedIn('Login');
        }
    }

    return(
        <div className="header">
            {/* Logo */}
            <div>
                <img className="logo" src={LOGO_URL} alt=""/>

            </div>
            <div>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                   {/* <button className='login' onClick={() => (setLoggedIn('LogOut')) }>{isLoggedIn}</button> */}
                   <button className ='login' onClick={clickHandler}>{isLoggedIn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;