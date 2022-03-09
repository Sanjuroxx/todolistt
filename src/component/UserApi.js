import React from 'react'
import axios from 'axios'

export const UserApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/users').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            firstName: 'vikas',email:'sanjay@gmail.com',password:'sanjay123'
            
        }

        axios.post('http://localhost:3001/users', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id = "62263f7b4db3364764d8055b";
        axios.delete(`http://localhost:3001/users/` + id).then(res => {
            console.log(res);
            if (res.status == 200) {
                alert("Deleted Successfully");
            } else {
                console.log("not deleted");
            }
        }
        )
    }

    const putData = () => {
    
        var data={firstName:'ramesh',email:'ram@gmail.com',password:'ram123',userId:"6228813302f094a6d987673e"};
        axios.put('http://localhost:3001/users',data).then(res=>{
            console.log(res);
            if(res.status=200){
                alert("updated Successfully");
                console.log(res.data.data)           ;
            }else{
                console.log("not updated");
            }
        })
    }

    return (
        <div><br></br>UserApi<br></br>
            <button onClick={getData}>Get User</button>
            <br></br>
            <button onClick={postData}>post User</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE User</button>
            <br></br>
            <button onClick={putData}>UPDATE User</button>
            <br></br>
        </div>
    )
}
