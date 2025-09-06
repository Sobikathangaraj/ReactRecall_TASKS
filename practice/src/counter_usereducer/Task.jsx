import React, { useReducer, useState } from 'react'

const taskreducer = (state,action)=> {

       switch(action.type){
        case'+': return state+1;
        case '-': 
        if(state < 1) return state;
        else return state -1;
        default:  return state;
    }
};

const Task = ({state}) => {
       
  return (
    <div>
      <h1>current Value : {state}</h1>
    </div>
  )
}



export default function Show() {
    const[task,reducerTask] = useReducer(taskreducer,0);
  return (
    <div>
        <Task state={task}/>
       <button onClick={()=>reducerTask({type:'+'})}>+</button>
       <button onClick={()=>reducerTask({type:'-'})}>-</button>
    </div>
  )
}

