import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AddProduct, SellerNavBar } from '../components';

export default function SellerAddProduct() {

  const navigate = useNavigate();

  return (
    <div className=' w-full min-h-screen bg-background flex flex-col justify-start items-center'>

      <SellerNavBar className=" w-full h-16 z-10" />

      <AddProduct className=" w-full min-h-screen" />

    </div>
  )

}
