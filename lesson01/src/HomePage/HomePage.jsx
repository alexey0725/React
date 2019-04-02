import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

import "./HomePage.css";

const HomePage = () => {
    return(
  <div className ="HomePage" >
  <Header text = 'Employee Directory'/>    {/* передаем аргументы от сюда */}  
  <SearchBar/>
  </div>
  

    )

};

export default HomePage;