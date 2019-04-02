import React from 'react';
import avatar from '../Userinfo/images.png';
import "./Userinfo.css";

const Userinfo = () => {
    // console.log(props.text);           
    return(
  <div className ="Userinfo" >
   <img className = "imgInfo" src= {avatar} alt="ava"/>
   <div>
       <h2>Taylor</h2>
       <p>VP of Marceting</p>
   </div>

  </div>
)

};

export default Userinfo;