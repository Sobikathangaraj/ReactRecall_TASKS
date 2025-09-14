import React, { useEffect, useState } from 'react'
//Task 12: Create a timer/stopwatch using useEffect.
const Task_12 = () => {
    const [sec,setSec] = useState(0);
    const [min,setMin] = useState(0);
    const [hour,setHour] = useState(0);
    const [stop , setStop]  = useState(false);
    useEffect(()=>{

           if(stop) return ; 
           const timer = setInterval(()=>{
               setSec(prevsec =>{
                let newsec = prevsec+1;
                if(newsec == 60){
                    setSec(0);
                    setMin(prevmin =>{
                        let newmin = prevmin+1;
                        if(newmin == 60){
                            setMin(0);
                            setHour(prevhour => prevhour+1);
                            return 0;
                        } else setMin(newmin);
                        return prevmin+1;
                    });
                }else setSec(newsec);
                  return prevsec+1;
               })
           },1000)
           return () => clearInterval(timer);
    },[stop])
  return (
    <div>
       <h1>{hour} : {min}: {sec}</h1>

      <button onClick={(e)=>setStop(true)}> stop Timmer:</button>
    </div>
  )
}

export default Task_12
