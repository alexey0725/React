import React from 'react';
import "./StartPage.css";

const StartPage = ( { disWeigth,weigth,growth,data,addEnter,addInfo} ) => {
   
    return (
<form className ="startPage">
    <button className="enetrDate">Введите данные
   
    </button>
         <div className="weigth wrap">
         <span>Вес</span>
         <input className="weigthInput"  onChange = {addEnter} 
         type="text"  name="weigth" value={weigth} require />
         </div>
            <div className="growth wrap">
            <span>Рост</span>
            <input className="growthInput" 
            onChange = {addEnter}  value={growth} 
            type="text"  name="growth" require/>
           </div>
        <div className="disWeigth wrap">
         <span>Желаемый Вес</span>
         <input className="disWeigthInput" 
         onChange = {addEnter}  value={disWeigth} 
         type="text"  name="disWeigth" require/>
         </div>
            <div className="data wrap">
            <span>Дата</span>
            <input className="dataInput" value={data} onChange = {addEnter} 
            type="date"  name="data" require/>
            </div>
             
         <button 
          className="btn" 
           onClick ={addInfo}            
           >Сохранить</button>
         <button >Отменить</button>
                    
     </form>
    );
};

export default StartPage;