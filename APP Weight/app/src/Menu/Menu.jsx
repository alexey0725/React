import React from 'react';
import './Menu.css';
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div>
              <ul className="menu">
                <li className="menu-list">
    <NavLink className="navlink" to='/'>ITM</NavLink>
                
                </li>
                <li className="menu-list">
    <NavLink className="navlink"  to='/Vaga'>Vaga</NavLink>                
                </li>

                <li className="menu-list" >
     <NavLink className="navlink" to='/History'>History</NavLink>
               </li>

              
        </ul>

            
        </div>
    );
};

export default Menu;