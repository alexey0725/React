import React, { Component } from 'react';
// React для того чтобы писать разметку
import "./App.css"

//extends -розширение
//render без него работать клас не будет
// создаем счетчик

class App extends Component {
// 1 способ
    //    constructor(){
//        super();
//        this.state = {
//            counter: 0,
//        }
//    }
// 2 способ
state ={
    counter: 0,
}
increment =  () => {
    // console.log("plus");   
    this.setState (prevState => ({
        counter: prevState.counter +1
    }))
}
decrement = () => {
    // console.log("ninus");   
    this.setState (prevState => ({
        counter: prevState.counter -1
    }))
    //поставили круглые скобки дополнительные чтобы ретерн не ставить + нам нуже объект
}
reset = () => {
    this.setState ({
        counter:0 
    })
}
    render() {
    let {counter} = this.state;
        return (
            <div>

                <button className ="btn" data-action="sub" onClick =
                {this.decrement} >-1</button>
                <span className = "value">{counter}</span>
                <button className ="btn" data-action="sub" onClick =
                {this.increment}>+1</button>
                <button className ="btn" data-action="sub" onClick =
                {this.reset}>Reset</button>

                
            </div>
        );
    }
}
export default App;

