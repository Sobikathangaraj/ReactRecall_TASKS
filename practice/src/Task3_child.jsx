const Task3_child = ({name,age,url}) => {
  return (
    <div style={{height:"100px", width:"auto", border:"2px solid black",boxSizing:"border-box"}}>
         <label htmlFor=""> Name : {name}</label><br />
         <label htmlFor=""> age : {age}</label><br />
         <label htmlFor=""> url : {url}</label><br />
    </div>
  )
}

export default Task3_child
