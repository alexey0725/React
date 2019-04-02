import React from 'react';
import './ListHistory.css';

const ListHistory = ({newWeigth,nowData}) => {
    return (
        <ul className="ulListHistory">
            <li className="ListHistory">
                <span className="spanHistory hisLeft">{newWeigth}
                </span>
                <span className="spanHistory centre"> kg</span>
                <span className="spanHistory hisRight">{nowData}</span>
            </li>
            
        </ul>
    );
};

export default ListHistory;



