import React from 'react'

export default function SubTitle({ subtitle, className, textClassName, onClick }) {
  return (
    <div className={` font-light text-card-foreground text-center ${className}`} onClick={onClick}>
      <p className={` ${textClassName}`}>
        {subtitle}
      </p>
    </div>
  )
}
