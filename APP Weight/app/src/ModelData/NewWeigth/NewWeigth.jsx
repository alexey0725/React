import React from 'react';
import './NewWeigth.css'

const NewWeigth = ({newWeigth,nowData,changeArr,addEnter}) => {
    return (
 <form className="form" onSubmit={changeArr}>
   <div className="newWeigth">
            <ul className ="newUL newULLeft">
                <li className="newli h"><span>Вес</span></li>
                <li className="newli h"><span>Дата</span></li>
                
            </ul>
            <ul className ="newUL newULRigth">
                <li className="newli">
                <input className="newInp" type="text"
                onChange = {addEnter} 
                name="newWeigth" value={newWeigth} 
                /></li>
                <li className="newli">
                <input className="newInp" type="date"
                onChange = {addEnter} 
                name="nowData" value={nowData} 
                /></li>
          
            </ul>
        </div>
        <button >Сохранить вес</button>
        <button>Отменить</button>


    </form>
    );
};

export default NewWeigth;