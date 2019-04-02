import React from 'react';
import './CartModal.css'

const CartModal = ({isCartSow, toggleCart}) => {
    return (
        <div className = {isCartSow ? "Card__hide Card" : 'Card__hide'}>
        <span className = "close" onClick = {toggleCart}>X</span>
            <ul>

            </ul>
        </div>
    );
};

export default CartModal;