import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import "./Vaga.css";



class Vaga extends Component {
    constructor(props){
        super(props);

console.log(props.historyDate);

        this.state = {  
            historyDate: props.historyDate,
    }
}

    render(){ 
console.log(this.state.historyDate);

    return (
        <div className='LineChart'>
            <Line
                data={this.state.historyDate}
                width={100}
             	height={110}
                options={{
                    title: {
                        display: true,
                        text: "History weight",
                        fontSize: 15,
                    },
                    legend: {
                        display: true,
                        position: "right",
                    },
                    maintainAspectRatio: true,
                }}    
            />
        </div>
    );
}
}


export default Vaga;

