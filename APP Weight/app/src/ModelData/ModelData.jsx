import React from 'react';
import ModelHeder from './ModelHeder/ModelHeder';
import NewWeigth from './NewWeigth/NewWeigth';

import './ModelData.css'

const ModelData = ({saveWeigth,addEnter,newWeigth,nowData,time,changeArr}) => {
    return (
        <div className ="modelStart">
        <ModelHeder
        saveWeigth = {saveWeigth}
        />
        <NewWeigth
         addEnter={addEnter}
         newWeigth ={newWeigth}
         nowData={nowData}
         time={time}
         changeArr={changeArr}       
        /> 
        </div>
    );
};

export default ModelData;