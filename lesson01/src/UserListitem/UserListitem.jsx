import React from 'react';
import PropTypes from 'prop-types';

import "./UserListitem.css"

const UserListitem = ({title,text}) => {

    return(
 <li>
<h3>{title}</h3>
<p>{text}</p>
 </li>
)

};

UserListitem.propTypes ={
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    
  }

export default UserListitem;