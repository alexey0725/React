import React from "react";
import { NavLink } from "react-router-dom";
import "./ModelS.css";
const ModelS = props => {
  return (
    <div>
      <h2>Tesla Model S</h2>
      <p>Пятидверный электромобиль производства американской компании Tesla.
        Прототип был впервые показан на Франкфуртском автосалоне в 2009 году;
        поставки автомобиля в США начались в июне 2012 года.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tesla_Model_S_02_2013.jpg/1024px-Tesla_Model_S_02_2013.jpg"
        alt=""
      />

      <ul className="menu">
        <li>
          <NavLink to={`${props.match.path}/history`} >
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

export default ModelS;
