import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'

export default function ProductsList({ products }) {

  return (
    <div className=' w-full bg-card'>
      <div className=' w-full h-14 flex px-2 justify-between items-center border-b border-b-accent'>
        <Title title="Name" className=" text-card-foreground/60 text-xl font-normal" />
        <Title title="Price" className=" text-card-foreground/60 text-xl font-normal" />
      </div>

      {products.map((product) => <div className=' w-full h-20 flex px-2 justify-between items-center border-b border-b-accent'>
        <div className=' w-[80%] h-full flex flex-col justify-center items-start overflow-hidden '>
          <Title title={product.title} className="text-lg font-normal text-left text-nowrap overflow-hidden " />
          <SubTitle subtitle={product.productType} className=" text-sm" />
        </div>
        <div className=' w-[15%] h-full flex justify-end items-center overflow-hidden'>
          <Title title={product.price} className=" text-lg font-normal text-right " />
        </div>
      </div>)}
      
    </div>
  )
}
