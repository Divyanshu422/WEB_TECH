 import {LOGO_URL} from '../utils/constants'
 import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/UserHook/useOnlineStatus';
 const Header = () =>{
    const [isLoggedIn, setLoggedIn] = useState('Login');

    function clickHandler(e){
        isLoggedIn == 'Login'? setLoggedIn('LogOut') : setLoggedIn('Login');
    }

    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            {/* Logo */}
            <div>
                <img className="logo" src={LOGO_URL} alt=""/>

            </div>
            <div>
                <ul className="nav-items">
                    <li>
                        <Link to='/'> online Status:
                        {onlineStatus? ('✔ ' ) : ('🔴')}
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>Home </Link>
                    </li>
                    <li>  
                        <Link to='/about'>About US </Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact US </Link>
                    </li>
                    <li>
                        <Link to='/grocery'>Grocery </Link>
                    </li>
                    <li>Cart</li>
                   <button className ='login' onClick={clickHandler}>{isLoggedIn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;