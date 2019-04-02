import React from 'react';
import './IMT.css';
import ReactSpeedometer from "react-d3-speedometer";



const IMT = ({nowWeigth,lastData,disWeigth}) => {

  
  console.log(nowWeigth);
  
    return (
      <div className="wrapper">
          <div className="stat">
            <div className="weight">
              <p className="text1">Текущий вес</p>
                 <div className="num1">
                 <span className="numGreen">{nowWeigth}  </span>           
                  <span className="numSpan1">kg</span>
                 </div>
                 <div className="num2">
                 <span className="numSpan2">Дата:</span>
                 <span className="numSpan2">{lastData}</span>
                 </div>
   
            </div>

            <div className="weight">
              <p className="text1">Желаемый вес</p>
                 <div className="num1">
                 <span className="numGreen numRed">{disWeigth}</span>
                 <span className="numSpan1">kg</span>
                 </div>
                 <div className="num2">
                 <span className="numSpan2">Цель:</span>
                 <span className="numSpan2">%</span>
                 </div>
   
            </div>
          </div>

          <div className="index">
            <ReactSpeedometer 
             width={180}
             height={150}

             minValue={20}           
             maxValue={150}           
             value={nowWeigth} 
             needleColor="red"
              startColor="green" 

             segments={10} 
             endColor="red"



            />
          </div>

        

  
            
        </div>
    );
};

export default IMT;