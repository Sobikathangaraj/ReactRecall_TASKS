import { useEffect, useState,useRef } from "react";
import Task3_child from "./Task3_child";


const Task_3 = () => {
    const[name,setName] = useState('');
    const[age,setAge] = useState('');
    const[url,setUrl] = useState('');
    let hasPrompted = useRef(false);

    useEffect (()=>{
       if(!hasPrompted.current){
          const namee = prompt("Enter your name ");
          setName(namee);
          const agee = prompt("Enter your Age ");
          setAge(agee);
          const imageurl = prompt("Enter Url ");
          setUrl(imageurl);
          hasPrompted.current = true;
       }
    },[])
  return (
    <div>
       <Task3_child name={name} age={age} url={url}/>
    </div>
  )
}

export default Task_3
