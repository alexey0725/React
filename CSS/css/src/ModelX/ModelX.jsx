import React from 'react';
import { NavLink } from "react-router-dom";
import "./ModelX.css";


const ModelX = (props) => {
    return (
        <div>
              <h2>Tesla Model X</h2>
      <p>Пятидверный электромобиль производства американской компании Tesla.
        Прототип был впервые показан на Франкфуртском автосалоне в 2009 году;
        поставки автомобиля в США начались в июне 2012 года.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tesla_Model_S_%28108%29_%28cropped%29.JPG/1024px-Tesla_Model_S_%28108%29_%28cropped%29.JPG"
        alt=""
      />

      <ul className="menu">
        <li>
          <NavLink to={`${props.match.path}/history`}>
            History
          </NavLink>
        </li>

        <li>
          <NavLink to={`${props.match.path}/desc`} >
            Desc
          </NavLink>
        </li>

        <li>
          <NavLink to={`${props.match.path}/image`}>
            Image
          </NavLink>
        </li>
      </ul>
            
        </div>
    );
};

export default ModelX;