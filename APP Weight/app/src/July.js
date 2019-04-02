import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {NavLink} from 'react-router-dom'; 

import StartPage from './StartPage/StartPage';
import MainPage from './MainPage/MainPage';
import NewEntry from './NewEntry/NewEntry';
import './App.css';

class App extends Component {

  state = {
    // isUserNew: localStorage.getItem('userParameters') ? false : true,
    isUserNew: true,
    userParameters: {
      birthday: '2000-01-01',
      gender: 'female',
      weight: 80.0,
      desiredWeight: 70.0,
      height: 170,
    },
    newEntry: {
    },
    historyOfEntries: {
    }
  }

  trackUserParameters = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let updatedParameters = {...this.state.userParameters, [key]: value};
    this.setState({
      userParameters: updatedParameters,
    })
    console.log(e.target);
  }

  submitUserParameters = (e) => {
    e.preventDefault();
    localStorage.setItem( "userParameters", JSON.stringify({...this.state.userParameters}) );
    this.setState({
      isUserNew: false,
    })
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData() {
    this.setState({
      historyOfEntries: {
        
        labels: ['2019-03-13', '2019-03-14', '2019-03-15'],
        datasets: [
          {
            label: 'Weight history', 
            data: [53.2, 53.9, 52.5],
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 5,
            pointBorderColor: 'limegreen',
            pointBackgroundColor: 'limegreen',
            borderColor: 'limegreen',
            borderWidth: 2,
            lineTension: 0.3,
          }
        ]

      }
    }, ()=>console.log(this.state.historyOfEntries))
  }

  render() {
    const {isUserNew, userParameters, historyOfEntries} = this.state;
    return (
      <div className="App">

        <Switch>
          <Route 
            path='/'
            render={
              ()=>( 

                !this.state.isUserNew ? 

                <Redirect to='/main-page'/> : 

                <StartPage
                  isUserNew={isUserNew}
                  userParameters={userParameters}
                  submitUserParameters = {this.submitUserParameters}
                  trackUserParameters = {this.trackUserParameters}
                />
                
              )
            }
          />
          <Route 
            path='/main-page' 
            render={
              props => <MainPage
                isUserNew={isUserNew}
                historyOfEntries={historyOfEntries}
                {...props}
              />
            }
          />
        </Switch>


      </div>


    );
  }

}

export default App;