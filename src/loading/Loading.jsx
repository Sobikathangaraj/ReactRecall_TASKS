import React, { useEffect, useState } from 'react'

const Loading = () => {
    const[loading,setLoading] = useState(true);
    const [data,setData] = useState(null);

    useEffect(()=>{
         
       fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
       .then((res)=>{
         if(!res.ok) throw new Error ("Invalid URL")
         return res.json();
       })
       .then((data)=>{
         console.log(data);

         setTimeout(()=>{
            setData(data);
            setLoading(false);
         },2000)
         
       }).catch((err)=>{
        console.log(err);
        setLoading(false);
       })
     },[])
  return (
    <div>
        {loading ? (
           <p>Loading....</p>
        ):(
            data && (
              <div>
                <p>DATA FETCHED ✅...✅...✅</p> 
                <table border="1" cellPadding="8">
                 <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((e)=>(
                       
                    <tr>
                       <td>{e.id}</td>
                       <td>{e.name}</td>
                       <td>{e.email}</td>
                       <td style={{maxWidth:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{e.body}</td>
                    </tr>
                    ))}
                   
                </tbody>
                </table>
            </div>
           )
        )}
     
    </div>
  )
}

export default Loading
