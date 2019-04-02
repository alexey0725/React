import React, { Component } from 'react';
import Form from "../App/Form/Form";
import Header from "../App/Header/Header";
import NewList from "../App/NewList/NewList";
import "./App.css";

class App extends Component {
    state = {
        text: "",
        newText: "",
        arr: [],
        rrr: "",
    }
    addSearch = ({target}) => {   
        this.setState  ({
            [target.name]: target.value,
        }) 
        // console.log('adasdsd')
    }
    addInArr = (e) => {
        e.preventDefault();
        let  obj = {
            text: this.state.text,
            id: Date.now(),
            isCart: false,
        }
        this.setState (prev => ({
            arr: [...prev.arr, obj]
        }))
        this.setState({
            text: "",
        })
    }
  addToCart = (e) => {
      this.state.arr.map(el => el.text); 
      }

  deleteInput = ({target}) => {
        const copy = this.state.arr.filter(el => el.id != target.dataset.id)
        this.setState({
            arr: [...copy],
        })
       }

    changeInput = ({target}) => {
        const sos = this.state.arr.map(el => 
        el.id == target.dataset.id ? {...el, isCart: true}: el
        )
        const srs = this.state.arr.find(el =>
            el.id == target.dataset.id ).text
        this.setState(
            {
              arr: [...sos],
              rrr: srs, 
            }
        )   
    }
    saveInput  = ({target}) => {
        // console.log(target.dataset.id);    
        const save = this.state.arr.map(el => 
            el.id == target.dataset.id ? {...el, isCart: false, text: this.state.rrr}: el)
            this.setState(
                {
                  arr: [...save],
                }
            )   
        }
    
    render() {
        const {text, arr, rrr} = this.state;

        return (
            <div className = "App"> 
               <Header/>
               <Form 
               text = {text} 
               addSearch={this.addSearch}
                addInArr ={this.addInArr}/> 
               <NewList
               addSearch={this.addSearch}
               rrr ={rrr}
               arr = {arr} 
               addToCart = {this.addToCart} 
               deleteInput ={this.deleteInput}
               saveInput ={this.saveInput}
               changeInput = {this.changeInput}/>
                          
            </div>
        );
    }
}

export default App;

// 1) Пишемо текст в інпуті
// 2) При кліку на Submit створюється нова задача і відображається на екрані
// 3) При кліку на кнопку DELETE задача видаляється
// 4) При кліку на кнопку EDIT в задачі зявляється інпут для редагування
// 5) Якщо в режимі редагування натискаємо на CANCEL інпут пропадає і залишається невідредагований текст
// 6) При кліку на кнопку SAVE задача редагується

// Додатково

// 1) Стаорити 3 кнопки All Complite Uncomplite
// 2) При кліку на текст задачі він перекреслюється і задача вважається виконаною
// 3) Кнопка All показує всі задачі
// 4) Кнопка Complite показує задачі які виконані
// 5) Кнопка Uncomplite показує задачі що невиконані

// на кнопку сейв повесить обработчик, при сейве узнать и