 import {LOGO_URL} from '../utils/constants'
 import { useState, useEffect } from 'react';

 const Header = () =>{
    const [isLoggedIn, setLoggedIn] = useState('Login');

    function clickHandler(e){
        isLoggedIn == 'Login'? setLoggedIn('LogOut') : setLoggedIn('Login');
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
                   <button className ='login' onClick={clickHandler}>{isLoggedIn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;