import { useEffect, useRef,useState } from 'react'

const Task_1 = () => {
   const hasPrompted = useRef(false);
   const [value,setValue] = useState('');
  useEffect(()=>{
    if(!hasPrompted.current){
      let name = prompt("Enter Your name:");
      setValue(name);
      console.log(setValue);
      hasPrompted.current= true;
    }    
  },[])
  return (
    <div>
      <h1>Welcome to Task_1 {value || 'Guest'}.. ! </h1> 
    </div>

  )
}

export default Task_1
