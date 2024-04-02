import React from 'react'

export default function Button({ content, className, onClick }) {
  return (
    <button className={` transition-all rounded-md p-2 font-medium ${className}`} onClick={onClick}>
      {content}
    </button>
  )
}
