import { useState } from "react"

const Task_2 = () => {
    const[value,setValue] = useState(0);
    const Addition = ()=>{
       setValue(value+1);
    }
    const Subraction =() =>{
        if(value<1) setValue(0); 
        else setValue(value-1);
    }
  return (
    <div>
        <button onClick={Addition}>+</button> 
        <div> {value} </div>
        <button onClick={Subraction} >-</button>
    </div>
  )
}

export default Task_2
