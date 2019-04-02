import React, { Component } from 'react';
import Header from "./Header/Header"
import Roadster from "./Roadster/Roadster"
import ModelS from "./ModelS/ModelS"
import ModelX from "./ModelX/ModelX"
import User from "./User/User"
import './App.css';
import {Switch, Route} from "react-router-dom";

class App extends Component {
 state ={
   user: {},
 }
 fetchData = () =>{
  //  console.log(data); 
   fetch("https://randomuser.me/api/")
   .then(res=>res.json())
   .then(data => { this.setState({
     user: data.results[0],
   })}
   )
   .catch(err=> console.log(err)); 
 }
 componentDidMount(){
   this.fetchData();
 }
  render() {
    
    const user =  this.state.user;  
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path ="/" component={ Roadster} />
          <Route path ="/ModelS" component={ ModelS} />
          <Route path ="/ModelX" component={ ModelX} />
          <Route path ="/User" render={props=><User userData = {user}
           {...props}/>}/>

          </Switch>
      </div>
    );
  };
}

export default App;


