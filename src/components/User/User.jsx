import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const {userid} = useParams()  

  return (
    <h2 className='flex justify-center bg-slate-400 p-4 font-bold text-3xl '>User : {userid.toUpperCase()} </h2 >
  )
}

export default User