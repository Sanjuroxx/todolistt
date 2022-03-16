import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const ApiDemo2 = () => {
    const [userList, setuserList] = useState([])

    const getData = () => {
        axios.get("http://localhost:3001/users").then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)
        })
    }

    //for when we run  code then direct get data
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">userId</th>
                        <th scope="col">firstName</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user) => {
                            return (

                                <tr>
                                    <th scope="row">{user._id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.roleId}</td>

                                    <td>
                                        <Link to ={`table/data/${user.id}`}>delete</Link>
                                        <button onClick={()=>{deleteData(user.id)}}>DELETE</button>
                                        <button className='btn btn-primary'>UPDATE</button>
                                    </td>
                            
                                </tr>

                            )
                        })
                    }


                </tbody>
            </table>
        </div>

    )
}
