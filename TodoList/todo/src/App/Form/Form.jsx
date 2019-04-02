import React from 'react';
import "./Form.css";

const Form = ({addSearch,text,addInArr}) => {
return (
      
<form className="search" onSubmit = {addInArr}>        
<input 
type="text"
 name="text" 
value = {text} 
className="text1"  
onChange = {addSearch}/>
<button className = "create" >Create</button>
</form>

);
};

export default Form;



