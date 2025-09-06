import React, { useEffect, useRef } from 'react'

const Task_14 = () => {
   const refer = useRef(null);
   useEffect(()=>{
        refer.current.focus();
   },[])
  return (
    <div>
       <label htmlFor="">UserName:</label>
       <input ref={refer} type="text" placeholder='Enter userName :'/> <br />

       {/* 
       <label htmlFor="">UserEmailId:</label>
       <input ref={refer} type="email" placeholder='Enter EmailId :'/> <br />

       <label htmlFor="">Age:</label>
       <input ref={refer} type="text" placeholder='Enter Age :'/> <br /> 
       Preferrence is by  last execution.. 
       remember ->  3 Steps.. */}
    </div>
  )
}

export default Task_14
