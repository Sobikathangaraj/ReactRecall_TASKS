import React, { useState } from 'react'

const Task_10 = () => {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[age,setAge] = useState('');
    const[data,setData] = useState([]);
    
    const display = () =>{
        const newEntry = {name,email,age};
        setData([...data,newEntry])
        setName('');
        setEmail("");
        setAge('');
    }
        
  return (
    <div>
       <h1>Log In Form..</h1> 
        <label htmlFor=""> UserName : </label>
        <input type="text" 
        placeholder='Enter name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        /> <br />

        <label htmlFor=""> Email : </label>
        <input type="text" 
        placeholder='Enter EmailID'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /> <br />

        <label htmlFor=""> Age : </label>
        <input type="number" 
        placeholder='Enter Age..'
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        /> <br />
        <button onClick={display}>Submit</button>

        <h2>Submitted data</h2>
        {data.map((e,index)=>(
             <ul key={index}>
            <li>{e.name}</li>
            <li>{e.email}</li>
            <li>{e.age}</li>
        </ul>
        ))}
       
    </div>
  )
}

export default Task_10
