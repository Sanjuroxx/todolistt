import React from 'react'
import axios from 'axios'

export const CategoryApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/categories').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            categoryName: 'task'
            
        }

        axios.post('http://localhost:3001/categories', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id = "622643274db3364764d80563";
        axios.delete(`http://localhost:3001/categories/` + id).then(res => {
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
    
        var data={categoryName:'exercise',categoryId:"62145cc30a223886356bba83"};
        axios.put('http://localhost:3001/categories',data).then(res=>{
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
        <div><br></br>CategoryApi<br></br>
            <button onClick={getData}>Get Category</button>
            <br></br>
            <button onClick={postData}>post Category</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE Category</button>
            <br></br>
            <button onClick={putData}>UPDATE Category</button>
            <br></br>
        </div>
    )
}
