import React from 'react'

export default function InputBox({ placeholder, type, className, disabled, onChange, accept }) {
  return (
    <input required placeholder={placeholder} type={type} disabled={disabled} className={` transition-all outline-none text-card-foreground bg-card/20 rounded-md border-2 border-accent p-2 px-4 placeholder:text-card-foreground/50 focus:border-accent-foreground/50 ${className}`} accept={accept} onChange={onChange} />
  )
}
