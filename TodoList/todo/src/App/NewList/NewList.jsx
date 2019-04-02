import React from 'react';
import NewListItem from "../NewListItem/NewListItem"
import "./NewList.css";

//в arr передается [{text: gghghg, id: 15563}] / addToCart = llll
 
const NewList = ({arr,addToCart,changeInput,deleteInput,
    saveInput,rrr,addSearch}) => {
    console.log(arr);
    
    return (
        <ul>
{arr.map(el => <NewListItem 
     boxLi = {el} 
     key = {el.id}
     rrr ={rrr}
     
     addSearch ={addSearch}
            addToCart = {addToCart} 
            changeInput ={changeInput} 
            deleteInput ={deleteInput}
            saveInput ={saveInput}
            id ={el.id}
        />)}
         
    </ul>
    );
};

export default NewList;