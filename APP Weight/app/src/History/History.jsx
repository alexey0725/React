import React from 'react';
import ListHistory from './ListHistory/ListHistory';
import './History.css';

const History = ({arr}) => {
    console.log(arr);
    
    return (
        <div>
         
          {arr().map(el => <ListHistory
            newWeigth = {el.newWeigth}
            nowData = {el.nowData}
          />)}
        </div>
    );
};

export default History;