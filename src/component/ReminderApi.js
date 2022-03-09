import React from 'react'
import axios from 'axios'

export const ReminderApi = () => {

    const getData = () => {
        axios.get('http://localhost:3001/reminders').then(res => {
            console.log(res.data.data);
        })
    }
    const postData = () => {
        var data = {
            remDate:'2022-03-04',
            description:'best project in mern'
            
        }

        axios.post('http://localhost:3001/reminders', data).then(res => {
            console.log(res);
        })
    }

    const deleteData = () => {
        var id ="6226d9c1061aa07be13e0f0b";
        axios.delete(`http://localhost:3001/reminders/` + id).then(res => {
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
    
        var data={remDate:'2033-08-09',description:"good project",reminderId:"6226e9efc0272231bec4b488"};
        axios.put('http://localhost:3001/reminders',data).then(res=>{
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
        <div><br></br>ReminderApi<br></br>
            <button onClick={getData}>Get Reminder</button>
            <br></br>
            <button onClick={postData}>post Reminder</button>
            <br>
            </br>
            <button onClick={deleteData}>DELETE Reminder</button>
            <br></br>
            <button onClick={putData}>UPDATE Reminder</button>
            <br></br>
        </div>
    )
}
