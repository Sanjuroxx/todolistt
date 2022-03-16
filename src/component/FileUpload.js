import React from 'react'

export const FileUpload = () => {

const filechangeHandler =(e)=>{
    console.log("File chnaged Handler called")
    console.log(e.target.files[0])
}
const multiFileChangeHandler=(e)=>{
    console.log(e.target.files)
}




  return (

    <div>
        <form>
            <input type="file" onChange={(e=>{filechangeHandler(e)})}/>
            <input type="file" onChange={(e=>{multiFileChangeHandler(e)})}/>
        </form>
    </div>
  )
}
