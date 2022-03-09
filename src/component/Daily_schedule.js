import React from 'react'
import axios from 'axios'

export const Daily_scheduleApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/daily_schedules').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            Daily_scheduleName: 'task'
            
        }

        axios.post('http://localhost:3001/daily_schedules', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id = "622653bf74927073d9b2c61a";
        axios.delete(`http://localhost:3001/daily_schedules/` + id).then(res => {
            console.log(res);
            if (res.status == 200) {
                alert("Deleted Successfully");
            } else {
                console.log("not deleted");
            }
        }
        )
    }

    // const putData = () => {
    
    //     var data={isComplete:'no',daily_scheduleId:"621462350a223886356bba89"};
    //     axios.put('http://localhost:3001/daily_schedules',data).then(res=>{
    //         console.log(res);
    //         if(res.status=200){
    //             alert("updated Successfully");
    //             console.log(res.data);
    //         }else{
    //             console.log("not updated");
    //         }
    //     })
    // }

    return (
        <div><br></br>Daily_scheduleApi<br></br>
            <button onClick={getData}>Get daily_schedules</button>
            <br></br>
            <button onClick={postData}>post daily_schedules</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE daily_schedules</button>
            <br></br>
            {/* <button onClick={putData}>UPDATE daily_schedules</button> */}
        </div>
    )
}
