import React, { useState,useEffect } from 'react'
import leo from "../assets/leo.jpeg"
import User_favorite from './User_favorite';
const Movie_search = () => {
    const database_Movie = [
        {"title":"Leo","year":2024,"poster":leo,"genre":"Love-action"},
        {"title":"Inception","year":2010,"genre":"Sci-Fi-Thriller"},
        {"title":"Interstellar","year":2014,"genre":"Sci-Fi-Adventure"},
        {"title":"The Dark Knight","year":2008,"genre":"Action-Crime"},
        {"title":"Avatar 2","year":2022,"genre":"Sci-Fi-Fantasy"},
        {"title":"Titanic","year":1997,"genre":"Romance-Drama"},
        {"title":"Joker","year":2019,"genre":"Drama-Thriller"},
        {"title":"Avengers: Endgame","year":2019,"genre":"Action-Fantasy"},
        {"title":"The Matrix","year":1999,"genre":"Sci-Fi-Action"},
        {"title":"Frozen II","year":2019,"genre":"Animation-Family"}
    ]
    const[userdata,setUserdata] = useState('');
    const[results,setResults] = useState([]);
    const[favorite,setFavorite] = useState([]);
      
   
    const fetchAll=(userdata)=>{
         const results_filter = database_Movie.filter(movie => movie.title.toLowerCase() === userdata.toLowerCase());
         setResults(results_filter);
         setUserdata('');
    }
    const favorite_fun = (e)=>{
         if(!favorite.some (fav => fav.title === e.title)){
          setFavorite([...favorite,e]);
         }
        }

    useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);
  return (
    <div>
      <label htmlFor="">Search  : </label> 
      <input type="text"
      value={userdata}
      onChange={(e)=>setUserdata(e.target.value)}
      placeholder='Enter movie title to search' /> <br />
      
      <button onClick={()=>(fetchAll(userdata))}>Get REsults</button>
      
      {results.map((e,index)=>(
           <li key = {index}>
             <h3>{e.title} ({e.year})</h3>
            <p>{e.genre}</p>
            {e.poster && <img src={e.poster} alt={e.title} width="100px"/>}
            <br />
            <button  onClick={()=>favorite_fun(e)}
             style={{width:"100px",height:"60px",outline:"red"}}> Add Favorite</button>
           </li>  
      ))}
      <User_favorite favo={favorite}/>
    </div>
    
  )
}

export default Movie_search
