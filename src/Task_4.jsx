
const Task_4 = () => {

    const student = [{
        name: "Dhee",
        age: 23,
        address: {
            area:"Nagar Street",
            city:"Tiruppur",
            pincode:638702
        }
    }]

      student.forEach(e=>console.log(e.address.pincode));
  return (
    <div>
      {student.map ((e,index)=> (
          <p key={index}>{e.address.pincode}</p>
      ))}
    </div>
  )
}

export default Task_4
