import React, { useEffect } from 'react'


export const Logout = () => {
    useEffect(() => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')


    }, [])
    
  return (
    
     <div>
       
     </div>
  )
}
