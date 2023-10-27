import React from 'react'
import { useParams } from 'react-router-dom'   //useParams is used to get the url params dynamically 

export default function User() {
  const {userid} = useParams()
  
  return (
    <div className='bg-slate-900 text-white text-center p-6 text-2xl'>
      User : {userid}
    </div>
  )
}
