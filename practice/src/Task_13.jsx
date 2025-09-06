import  { useState } from 'react'
//import './Task_13.css'

const Task_13 = () => {
  const[data,setData] = useState(false);
  return (
    <div className = {data?'darkmode':'lightmode'}>
       <button onClick={()=>setData(prev => !prev)}>Toggle</button>
    </div>
  )
}

export default Task_13
