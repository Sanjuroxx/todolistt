import React from 'react'
import axios from 'axios'

export const RoleApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/roles').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            roleName: 'admin'
            
        }

        axios.post('http://localhost:3001/roles', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id = "6226232c9eb26f6e65115990";
        axios.delete(`http://localhost:3001/roles/` + id).then(res => {
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
    
        var data={roleName:'user ',roleId:"62263d3f4db3364764d80551"};
        axios.put('http://localhost:3001/roles',data).then(res=>{
            console.log(res);
            if(res.status=200){
                alert("updated Successfully");
                console.log(res.data);
            }else{
                console.log("not updated");
            }
        })
    }

    return (
        <div><br></br>RoleApi<br></br>
            <button onClick={getData}>Get Role</button>
            <br></br>
            <button onClick={postData}>post Role</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE Role</button>
            <br></br>
            <button onClick={putData}>UPDATE Role</button>
            <br></br>
        </div>
    )
}
