import React, { useState } from 'react'

const Todo = () => {
    const[value,setValue] = useState('');
    const[task,setTask] = useState([]);
    const addtodo =()=>{
      if(value.trim() !== ''){
        setTask([...task, { id: Date.now(), text: value, completed: false }]);
        setValue('');
    }
 }
    const toggle = (id)=>{
        setTask(task.map((e)=> e.id == id ? {...e,completed:!e.completed}:e)
        )};

    const deleteTask = (id) =>{
        setTask(task.filter((e)=> e.id !== id ));
    };
  return (
    <div>
       <input value={value} onChange={(e)=>setValue((e.target.value))} 
       type="text"
       placeholder='Enter a task'/>
       <button onClick={addtodo}>ADD TASK</button>

       <ul>
        {task.map((e,i)=>(
            <li key={e.id}><span style={{textDecoration:e.completed?'line-through':'none'}}>
            {e.text}</span>
            <button onClick={()=>toggle(e.id)}>Completed</button>
            <button onClick={()=>deleteTask(e.id)}>Delete</button>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default Todo
