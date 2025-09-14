import { useState } from "react";

const Task_6 = () => {
  const[todo,setTodo] = useState('');
  const[todolist,setTodolist] = useState([]);

  // adding onto list
  const add = () =>{
      if(todo.trim() === '') return;
      else setTodolist ([...todolist,{id:Date.now(),text:todo.trim(), completed:false}])
      setTodo('');
  }

  // strike Out
  const toggleComplete = (id)=>{
     setTodolist(
      todolist.map((e)=>
      e.id === id?{...e,completed:!e.completed}:e
      ))
  }

  // deleting todo
  const deletetodo = (id)=>{
       setTodolist(
        todolist.filter((e)=> e.id !== id)
       )
  }
  return (
    <div>
      <h2>TO DO LIST</h2>

      <div className="input-container">
        <input
        type="text" 
        placeholder=" Enter Task ... "
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}/>
        <button className="add-btn" onClick={add}>Add</button>
      </div>
      <ul className="todo-list">
         {todolist.map((e) =>(
           <li key={e.id}
            onClick={()=>toggleComplete(e.id)}
            style={{cursor:"pointer",
                  listStyle:"none",
                  textDecoration:e.completed?'line-through':'none',
                  color: e.completed?'grey':"black"
            }}>
              <span style={{margin:"10px"}}>{e.completed?"✅" : "❌"}{e.text}</span>
              <button className="delete-btn" onClick={(event)=>{
                event.stopPropagation();
                deletetodo(e.id);
              }}>Delete</button></li>
         ))}
      </ul>
    </div>
  )
}

export default Task_6
