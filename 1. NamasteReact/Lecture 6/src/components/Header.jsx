 
 import {LOGO_URL} from '../utils/constants'
 
 
 // Creating the header component: has 2 things image and links
 const Header = () =>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header;