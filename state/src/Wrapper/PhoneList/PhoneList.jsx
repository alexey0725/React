import React from 'react';
import PhoneListItem from "../PhoneListItem/PhoneListItem";
import "./PhoneList.css";

const PhoneList = ({arr,addToCart}) => {
    return (
        <div className = "container">
            { arr.map(el => <PhoneListItem card = {el} key = {el.title}
            addToCart = {addToCart}/>)
            }

        </div>
    );
};

export default PhoneList;
