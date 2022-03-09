import React from 'react'
import axios from 'axios'

export const Schedule_typeApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/schedule_types').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            schedule_typeName:"low"
            
        }

        axios.post('http://localhost:3001/schedule_types', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id = "6226e4d88561b576a156e31b";
        axios.delete(`http://localhost:3001/schedule_types/` + id).then(res => {
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
    
        var data={schedule_typeName:"low" ,schedule_typeId:"62145d190a223886356bba85"};
        axios.put('http://localhost:3001/schedule_types',data).then(res=>{
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
        <div><br></br>Schedule_typeApi<br></br>
            <button onClick={getData}>Get Schedule_type</button>
            <br></br>
            <button onClick={postData}>post Schedule_type</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE Schedule_type</button>
            <br></br>
            <button onClick={putData}>UPDATE Schedule_type</button>
            <br></br>
        </div>
    )
}
