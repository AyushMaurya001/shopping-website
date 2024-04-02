import React from 'react'

export default function CustomerProfile({ className }) {

  // profile data, log out, orders, api call
  
  const userName = "?";

  return (
    <div className=' w-10 h-10 bg-card text-card-foreground cursor-pointer flex justify-center items-center rounded-full'>
      
      {userName[0].toUpperCase()}

    </div>
  )
}
