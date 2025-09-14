import React, { useState } from 'react'

const Task_9 = () => {

    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const[repassword,setRepassword] = useState('');

    const check = () =>{
        if (password.length<8) alert('Password must be 8 character');
        else if(password == repassword){
            alert('Form submitted successfull');
            setName('');
            setPassword('');
            setRepassword('');  
        }
        else{
            alert("Enter correct Password..!");
        } 
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

        <label htmlFor=""> Password : </label>
        <input type="text" 
        placeholder='Enter Password 8 character'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /> <br />

        <label htmlFor=""> Re-enter Password : </label>
        <input type="text" 
        placeholder='Re-enter your password'
        value={repassword}
        onChange={(e)=>setRepassword(e.target.value)}
        /> <br />

        <button onClick={check}>Submit</button>
    </div>
  )
}

export default Task_9
