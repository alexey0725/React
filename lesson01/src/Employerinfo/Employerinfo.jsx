import React from 'react';
import UserInfo from '../Userinfo/Userinfo';
import UserList from '../UserList/UserList';
import "./Employerinfo.css";

const Employerinfo = () => {         
  
  let arr = [
      {
          title: 'Call Office',
          text : '781-000-0002',
      },
      {
          title: 'Call Mobile',
          text : '617-000-0002',
      },
      {
          title: 'SMS',
          text : '617-000-0002',
      },
      {
          title: 'Email',
          text : 'jtaylor@fakemail.com'
      }
    ];
  
    return(
  <div className ="Employerinfo" >
 <UserInfo/>
 <UserList userData = {arr} />
  </div>
)

};



export default Employerinfo;