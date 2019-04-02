import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css"

const Header = () => {
return (
    <div>
        <ul className="menu">
                <li className="menu-list">
                <NavLink  to='/'>Roadster</NavLink>
                
                </li>
                <li className="menu-list">
                <NavLink  to='/ModelS'>ModelS</NavLink>                
                </li>

                <li className="menu-list">
                <NavLink  to='/ModelX'>ModelX</NavLink>
               </li>

                <li className="menu-list">
                <NavLink  to='/User'>User</NavLink>
               </li>
        </ul>
            
    </div>
    );
};

export default Header;