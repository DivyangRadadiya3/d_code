import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/"}>Home </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL +"/service-two"}>Services</Link>
                    
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/ProjectGridOne"}>Portfolio</Link>
                    
                </li>
                <li className="menu-item-has-children">
                    <Link to={process.env.PUBLIC_URL + "/AboutUs"}>About us</Link>
                    
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Blog</Link>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;