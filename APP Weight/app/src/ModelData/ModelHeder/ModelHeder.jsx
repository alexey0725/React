import React from 'react';
import './ModelHeder.css'

const ModelHeder = ({saveWeigth}) => {
    return (
        <div className ="modelHeader">
            <span className="menuHeader" onClick = {saveWeigth}>&#9783;</span>
            <span className = "save">Menu</span>
        </div>
    );
};

export default ModelHeder;