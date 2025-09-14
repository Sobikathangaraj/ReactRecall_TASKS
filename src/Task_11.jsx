import  { useEffect, useState } from 'react'
//Task 11: Use useEffect to fetch posts 
// from https://jsonplaceholder.typicode.com/posts and display titles.
const Task_11 = () => {
    const [post,setPost] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        if(!res.ok) console.log("Network issue");
        else return res.json();
     }).then((data)=>{
        setPost(data);
        console.log(data);
     }).catch((err)=>{
        setError(err.message);
        console.log(err);
     })
    },[])
  return (
    <div>
        <h2>Fetched data..</h2>
        {error && <p style={{color:'red'}}>Error:{error}</p>}
        {post.map((e,index)=>{
            return <p key={index}><strong>Title:</strong>{e.title}</p>
        })}
    </div>
  )
}

export default Task_11
