import React from 'react';
import  "./NewListItem.css"

const NewListItem = ({boxLi,changeInput,
   addSearch, id,deleteInput,saveInput,rrr}) => {  
    // console.log(boxLi.isCart);
    return (      
<li  >  
   { boxLi.isCart ?
   <input
    type="text"
    name="rrr"
    onChange = {addSearch} 
    value = {rrr}
    // placeholder = {boxLi.text}
    /> :

   <p className ="box" >{boxLi.text}</p>}
    
{ boxLi.isCart ?
<button data-id={id} onClick={saveInput} >Save</button>:

<button data-id={id} onClick={changeInput}  >Edit</button> }
  
<button data-id={id} onClick={deleteInput}>Delete</button> 
        
</li>

  );
};

export default NewListItem;