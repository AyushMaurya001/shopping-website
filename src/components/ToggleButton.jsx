import React from 'react'

export default function ToggleButton({ className, circleClassName, status, onClick }) {

  // status -> boolean (true / false)

  return (
    <div className={` w-10 h-4 rounded-full relative border-2 border-primary z-0 bg-secondary ${className}`} onClick={onClick}>
      <div className={` h-5 w-5 rounded-full bg-primary absolute -top-[30%] ${status===true?"-right-[10%]":"-left-[10%]"} ${circleClassName}`}>
      </div>
    </div>
  )
}
