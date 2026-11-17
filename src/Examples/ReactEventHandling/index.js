import { useState } from "react"

function ReactEventHandling(){
const[name, Setname]= useState("");
    
    return(<>
  <input type="text" onChange={(e)=> (onChangeMethod(e))}></input>

   <label>The employee Name is: {name}</label><br></br>
    <button onClick={() => (displayMessage())}>ClickForName</button>
    </>)


   function displayMessage(){
      Setname("Sandeep");
   }

   function onChangeMethod(e){
    Setname(e.target.value);
   }
}

export default ReactEventHandling