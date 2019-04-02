import React from 'react';
import "./User.css"

const User = ({userData}) => {
    console.log(userData);
    
    return (
        <div>
          {Object.keys(userData).length ? <div>
            <img src={userData.picture.large} alt="#" className="avatar"/>
            <p className="name">{userData.name.first}</p>
            <p className="email">{userData.email}</p>
            </div> : <p>Loading...</p>}          
        </div>
    );
};

export default User;