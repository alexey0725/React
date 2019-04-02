import React from 'react';
import Header from '../Header/Header';
import Employerinfo from '../Employerinfo/Employerinfo';

import "./EmployerPage.css";

const EmployerPage = () => {
    return(
  <div className ="EmployerPage" >
 <Header text = 'Employee'/> 
 <Employerinfo/>
  </div>
    )

};

export default EmployerPage;