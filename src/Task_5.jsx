import React, { useState } from 'react'

const Task_5 = () => {

    const[password,setPassword] = useState('');
    const[repassword,setRepassword] = useState('');
    const[credential,setCredential] = useState(false);
   
    const check = () =>{
      if(password == repassword){
        if(password.length>=8){ 
         setCredential(true);
        alert("Log in Succesfull..!");
        }else{
            alert("Password atleast 8 character");
        }
      }else{
        alert("Log in not sucessfull..!!!")
      }
    }
  return (
    <div>
      
      <label htmlFor="">Enter your name:</label>
      <input type="text" placeholder='Enter your name' /><br />
      <label htmlFor="">Enter your Password:</label>.
      <input type="text" placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
      <label htmlFor="">re-enter Password:</label>
      <input type="text" placeholder='Password' value={repassword} onChange={(e)=>setRepassword(e.target.value)}/> <br />
      <button onClick={check}>Login</button>
      {credential && <Task_4/>}
    </div>
  )
}

export default Task_5
