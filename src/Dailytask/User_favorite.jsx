
const User_favorite = ({favo = []}) => {
      
  return (
    <div>
        <h2>Favorites : </h2>
         {favo.length === 0 ?(
            <p> Add Favorite .. !</p>
        ):(
        <ul>
        {favo.map((e,index)=>(
           <li key={index}>
             <h3>
                {/* {localStorage.setItem('name:',e.title)} */}
                {e.title}
                {/* {localStorage.setItem('year',e.year)} */}
                ({e.year})
            </h3>
             {/* {localStorage.setItem('Genre',e.genre)} */}
             <p>{e.genre}</p>
             {e.poster && <img src={e.poster} alt={e.title} width="100px"/>}
           </li>
        ))}
        </ul>
    )}     
    </div>
  )
}

export default User_favorite
