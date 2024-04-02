import React from 'react'

export default function Title({ title, className, onClick }) {
  return (
    <div className={` text-3xl font-medium text-center ${className}`} onClick={onClick}>
      {title}
    </div>
  )
}
