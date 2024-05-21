import {LOGO_URL} from '../utils/constants'
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                   <li>
                       <Link to='/'>Home </Link>
                   </li>
                   <li>  
                       <Link to='/about'>About US </Link>
                   </li>
                   <li>
                       <Link to='/contact'>Contact US </Link>
                   </li>
                   <li>Cart</li>
                  <button className ='login' onClick={clickHandler}>{isLoggedIn}</button>
               </ul>
           </div>
       </div>
   )
}

export default Header;