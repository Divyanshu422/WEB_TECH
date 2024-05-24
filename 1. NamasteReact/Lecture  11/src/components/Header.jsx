import {LOGO_URL} from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/UserHook/useOnlineStatus';


import { useContext } from 'react';
import { UserContext } from '../utils/ContextAPI/UserContext';



 const Header = () =>{
   
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser );


    const [isLoggedIn, setLoggedIn] = useState('Login');

    function clickHandler(e){
        isLoggedIn == 'Login'? setLoggedIn('LogOut') : setLoggedIn('Login');
    }

    const onlineStatus = useOnlineStatus();
    return(
        <div className="md:flex justify-between items-center shadow-lg">
            <div>
                <img className="w-36 h-34" src={LOGO_URL} alt=""/>

            </div>
            <div className=''>
                <ul className="flex  md:gap-x-10 text-2xl font-bold ">
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