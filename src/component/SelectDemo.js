import React from 'react'
import {useState} from 'react'
export const SelectDemo = () => {
  
  
 // const [value, setvalue] = useState([])
  
  var options =[
      {
          lable:'VOLVO',
          value:"volvooo"
      },
      {
          lable:"BMW",
          value:"bmw"
      },
      {
          lable:"AUDI",
          value:"audi"
      }
  ]
 

}
 
 const selectChangeHandler =(e)=>{
alert(e.target.value)
    console.log(e.target.value)
    //setvalue(value)

}

const genderchangehandler=(e)=>{
    alert(e.target.value)
}
const checkchangehandler=(e)=>{
    console.log(e.target.value)
    
}

//     <div>
//         <form>
//             <select onChange={(e)=>{selectChangeHandler(e)}}>
//                 {
//                     options.map((option)=>{
//                         return(
//                         <option value={option.value}>{option.lable}</option>
//                      ) })
//                 }
//             </select>
//             <br/>
//             <label>male</label>
//             <input type="radio" name='gender' value="male" onChange={(e)=>{genderchangehandler(e)}}/>
//             <br/>
//             <label>female</label>
//                 <input type="radio"name="gender" value="female" onChange={(e)=>{genderchangehandler(e)}}/>
//                 <div>



                    
//                     <label>game</label>
//                     <input type="checkbox"  value="game" name="hobby" onChange={(e)=>{checkchangehandler(e)}} />
//                     <br/>
//                     <label>books</label>
//                     <input type="checkbox" value="books" name="hobby" onChange={(e)=>{checkchangehandler(e)}} />
//                 </div>
//         </form>
//     </div>
//   )
            
//          }