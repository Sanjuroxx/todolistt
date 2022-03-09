import React from 'react'
import axios from 'axios'

export const Schedule_masterApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/schedule_masters').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            endDate:"2022-04-07"
            
        }

        axios.post('http://localhost:3001/schedule_masters', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id = "6226e3178561b576a156e312";
        axios.delete(`http://localhost:3001/schedule_masters/` + id).then(res => {
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
    
        var data={schedule_masterendDate:"2022-03-00" ,schedule_masterId:"6226df93061aa07be13e0f19"};
        axios.put('http://localhost:3001/schedule_masters',data).then(res=>{
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
        <div><br></br>Schedule_masterApi<br></br>
            <button onClick={getData}>Get Schedule_master</button>
            <br></br>
            <button onClick={postData}>post Schedule_master</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE Schedule_master</button>
            <br></br>
            <button onClick={putData}>UPDATE Schedule_master</button>
            <br></br>
        </div>
    )
}
