import React, { useState } from 'react'

const Task_7 = () => {
  
    const [bgcolor, setBgcolor] = useState('White');
    const changee = ()=>{
             setBgcolor('brown');  
    }
  return (
    <div style={{backgroundColor:bgcolor,padding:'20px'}}>
      <button onClick={changee}>Click</button>
    </div>
  )
}

export default Task_7
