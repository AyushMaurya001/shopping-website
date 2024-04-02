import React from 'react'

export default function Anchor({ content, onClick }) {
  return (
    <div className={` font-light text-card-foreground/50 transition-all cursor-pointer hover:text-card-foreground border-b-[1px] border-card-foreground/50 hover:border-card-foreground`} onClick={onClick}>
      {content}
    </div>
  )
}
