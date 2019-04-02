import React, { Component } from "react";
import StartPage from "./StartPage/StartPage";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import IMT from "./IMT/IMT";
import Vaga from "./Vaga/Vaga";
import History from "./History/History";
import ModelData from "./ModelData/ModelData";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    weigth: "",
    disWeigth: 0,
    growth: "",
    data: "",
    arr: [],
    boole: true,
    boole2: true,
    newWeigth: "",
    nowData: "",
    time: "",
    historyDate: {},
    nowWeigth: 0,
    lastData:"",
  };
  //формула слушатель, берет данные с таргета(события) и отправляем их ключ:значение в массив
  addEnter = ({ target }) => {
    // console.log({target});
    this.setState({
      [target.name]: target.value
    });
  };
  //формула для записи данных с модальной страницы для новых записей в масив, а затем в локал.
  changeArr = e => {
    e.preventDefault();
    let object = {
      start: this.state.weigth,
      newWeigth: this.state.newWeigth,
      id: Date.now(),
      nowData: this.state.nowData,
      time: this.state.time,
      disWeigth: this.state.disWeigth,

    };
    this.setState(prev => ({
      arr: [...prev.arr, object]
    }));
    this.setToLocalStorage("arr", this.state.arr); //вызываем формулу для передачи массива arr в локал
  };
  //формула для записи данных со стартовой страницы
  addInfo = () => {
    // console.log('fsdfdsfs')
    let obj = {
      weigth: this.state.weigth,
      disWeigth: this.state.disWeigth,
      growth: this.state.growth,
      id: Date.now(),
    };
    this.setToLocalStorage("test", obj);

    this.setState({
      boole: false
    });
    // console.log(this.getfromLocalStorage("arr"));
  };
  // 2 формулы для записи в локал
  setToLocalStorage = (key, obj) =>
    localStorage.setItem(key, JSON.stringify(obj));
  // просто формулы для записи в локал. Без вызова в другой функции через (this) и передачи ей параметров она раб. не будет
  getfromLocalStorage = key => JSON.parse(localStorage.getItem(key)); // просто формула для считывания
  //формула для переключки компонетов
  addModel = () => {
    this.setState({
      boole2: false
    });
  };
  //формула для переключки компонетов
  saveWeigth = () => {
    console.log("sssssssss");
    this.setState({
      boole2: true
    });
  };
  //Считываем с локала массив для отрисовки тегов
  history = () => {
    // console.log(this.getfromLocalStorage("arr"));
    return this.getfromLocalStorage("arr")
      ? this.getfromLocalStorage("arr")
      : [];
  };

   async componentDidMount() {
    this.getChartData();
  }

  getChartData = () => {
    let result = this.history();
    console.log(result);

    let weigth = result.map(el => (el.newWeigth )* 1);
    let obj = result.map(el => el.nowData); 
    let lastWeigth  = weigth[weigth.length-1]
    let lastData  = obj[obj.length-1]
    console.log(lastData);
    // console.log(obj);
    

    this.setState({
      nowWeigth: lastWeigth,
      lastData: lastData,

      historyDate: {
        labels: [...obj],
        datasets: [
          {
            label: "Weight",
            data: [...weigth],
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 15,
            pointBorderColor: "limegreen",
            pointBackgroundColor: "limegreen",
            borderColor: "limegreen",
            borderWidth: 2,
            lineTension: 0.3
          }
        ]
      }
    });
    this.weigtNow(weigth);
  }

  weigtNow=(weigth)=>{
         const result =  weigth[weigth.length-1];
         return result
  }
  

  render() {
    const {
      data,
      weigth,
      boole,
      boole2,
      disWeigth,
      growth,
      newWeigth,
      nowData,
      time,
      historyDate,
      nowWeigth,
      lastData,
    } = this.state;
    return (
      <div className="App">
        <Header addModel={this.addModel} 
        saveWeigth={this.saveWeigth}/>
        <Menu />

        <Switch>
          <Route exact path="/" 
           render={props => (
            <IMT nowWeigth={nowWeigth} 
            lastData={lastData}
            disWeigth={disWeigth}
             {...props}/>
                      
            )}/>
          <Route
            path="/Vaga"
            render={props => (
              <Vaga historyDate={historyDate} {...props}
               />
                   
            )}
          />
          <Route
            path="/History"
            render={props => <History arr={this.history} {...props} />}
          />
        </Switch>

        {boole && (
          <StartPage
            weigth={weigth}
            data={data}
            disWeigth={disWeigth}
            growth={growth}
            addEnter={this.addEnter}
            addInfo={this.addInfo}
          />
        )}
        {!boole2 && (
          <ModelData
            saveWeigth={this.saveWeigth}
            addEnter={this.addEnter}
            newWeigth={newWeigth}
            nowData={nowData}
            time={time}
            changeArr={this.changeArr}
          />
        )}
        <div />
      </div>
    );
  }
}

export default App;
