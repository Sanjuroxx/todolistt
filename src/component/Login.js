import React, { useState } from 'react'

export const Login = () => {
 
const [email, setemail] = useState('')
const [password, setpassword] = useState('')


const login=(e)=>{
    e.preventDefault();
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)

}
return (
<div>
  <h2>Log in Page</h2>
<form onSubmit={login}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e)=>{setemail(e.target.value)}}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
