import React from 'react';
import "./Header.css";

const Header = ({cart, toggleCart}) => {
    return (
        
            <header className ="Header">
             <button className = "cart" onClick = {toggleCart}>Корзина</button>
             <p className = "amount"  >{cart.length}</p>
            
            </header>
            
        
    );
};


export default Header;