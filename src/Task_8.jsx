import React, { useState } from 'react'
const Task_8 = () => {
    const [data,setData] = useState('');
  return (
    <div>
        <div><input type="text"
        placeholder='Enter data..' 
        value={data}
        onChange={(e)=>setData(e.target.value)}/>
        <p>{data}</p>
      </div>
        
    </div>

  )
}

export default Task_8
