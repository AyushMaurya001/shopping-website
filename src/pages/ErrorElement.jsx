import React from 'react'
import { Title } from '../components'

export default function ErrorElement() {
  return (
    <div className=' w-full h-screen bg-background text-foreground flex gap-5 justify-center items-center'>

      <Title title={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' fill-foreground w-10 h-10'><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>} />
      <div className=' w-[1px] h-20 bg-primary'></div>
      <Title title="404 NOT FOUND" />

    </div>
  )
}