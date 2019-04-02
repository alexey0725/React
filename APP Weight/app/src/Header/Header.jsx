import React from 'react';
import './Header.css';


const Header = ({addModel,saveWeigth2}) => {
    return (
        <div className ="header">
        
        <span className="foto-logo" onClick={saveWeigth2}>&#9998;</span>
        <span className="foto-start">&#10026;</span>
        <span className="img-menu" onClick ={addModel}>&#10146;</span>
        </div>
    );
};

export default Header;