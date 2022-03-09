import React,{useState} from 'react'

export const UserRegistration = () =>{
const [userName, setuserName] = useState('')
const [useremail, setuseremail] = useState('')
const [userpassword, setuserpassword] = useState('')
const [userage, setuserage] = useState('')


const userNameHandler =(e)=>{

    setuserName(e.target.value)
}
const useremailHandler =(e)=>{
    setuseremail(e.target.value)
}
const userpasswordHandler =(e)=>{
    setuserpassword(e.target.value)
}
const userageHandler =(e)=>{
    setuserage(e.target.value)
}

const submit =(e)=>{
    e.preventDefault()
    alert(`Name: ${userName} \nEmail:${useremail} \nPassword:${userpassword} \nAge:${userage}`)
}

  return (
    <div>
        <h1>UserRegistration</h1>
        <form onSubmit={submit}>
            <table>
                <tr>
                    <td>User Name</td>
                   <td> <input type="text" name="User Name" placeholder="enter User name" 
                   onChange={(e)=>{userNameHandler(e)}}></input></td>
                </tr>
                <tr>
                    <td>User email</td>
                   <td> <input type="text" name="User email" placeholder="enter User email"
                   onChange={(e)=>{useremailHandler(e)}}></input></td>
                </tr>
                <tr>
                    <td>User password</td>
                   <td> <input type="password" name="User password" placeholder="enter User password"
                   onChange={(e)=>{userpasswordHandler(e)}}></input></td>
                </tr>
                <tr>
                    <td>User age</td>
                   <td> <input type="number" name="User age" placeholder="enter User age"
                   onChange={(e)=>{userageHandler(e)}}></input></td>
                </tr>
                <tr>
                    <button type="submit">Submit</button>
                </tr>
            </table>
        </form>
        </div>
  )
}

