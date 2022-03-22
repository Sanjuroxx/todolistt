import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateData = () => {
   var id= useParams().id;
   const [data, setdata] = useState('')
   const [firstName, setfirstName] = useState(data.firstName)
  //  const [lastname, setlastname] = useState('')
   const [email, setemail] = useState(data.email)

const getData=()=>{
    axios.get(` http://localhost:3001/users/${id}`).then(res=>{
        setdata(res.data.data)
        console.log(res.data.data)
    })
}     
   useEffect(()=>{
           getData() 
           
},[])


const update=(e)=>{
    //api calling
    var updateData={
        firstName:firstName,
        // last_name:lastname,
        email:email
    }
    e.preventDefault()
    axios.put(`http://localhost:3001/users/${id}`,updateData).then(res=>{
        alert("Data Updated..")
    })
}
  return (

    <div>
        <form onSubmit={update}>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">firstName</label>
    <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={data.firstName}
    onChange={(e)=>setfirstName(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={data.email} 
    onChange={(e)=>setemail(e.target.value)}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  {/* <div className="form-group">
    <label htmlFor="exampleInputPassword1">LastName</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={data.last_name}
    onChange={(e)=>setlastname(e.target.value)}/>
  </div> */}  
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 


    </div>
  )
}
