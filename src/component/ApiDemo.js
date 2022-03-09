import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export const ApiDemo = () => {

const [firstName, setfirstName] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
//const [roleName, setroleName] = useState('')

const firstNameChangeHandler=(e)=>{
    setfirstName(e.target.value)
}
const emailChangeHandler = (e)=>{
    setemail(e.target.value)
}

const passwordChangeHandler = (e)=>{
    setpassword(e.target.value)
}

// const roleNameChangeHandler = (e)=>{
//     setroleName(e.target.value)
// }
var data={
    firstName:firstName,
    email:email,
    password:password,
   // roleName:roleName
}
const submit = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/users",data).then(res=>{
        console.log(res.status)
        console.log(res.data)
    })
}
  return (
    <div className='container'>Registration
<form onSubmit={submit}>
  <div class="form-group">
    <label for="exampleInputEmail1">firstName</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter firstName"
    onChange={(e)=>firstNameChangeHandler(e)}/>
    </div>
    <div class="form-group">
    <label for="exampleInputEmail1">email</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e)=>emailChangeHandler(e)}/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  placeholder="Password"
    onChange={(e)=>passwordChangeHandler(e)}/>
  </div>

  {/* <div class="form-group">
    <label for="exampleInputEmail1">roleName</label>
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter roleName"
    onChange={(e)=>roleNameChangeHandler(e)}/>
  </div> */}

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
