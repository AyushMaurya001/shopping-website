import React, { useEffect, useState } from 'react'
import { Button, Inventory, SellerNavBar, Title } from "../components/index"
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { loadingStatus, shopName } from '../store/atoms/atoms';
import { useNavigate } from 'react-router-dom';

export default function SellerDashboard() {

  const navigate = useNavigate();

  const [validation, setValidation] = useState(false);

  const [shop, setShop] = useRecoilState(shopName);
  const [loading, setLoading] = useRecoilState(loadingStatus);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('token');
    const res = axios.get(import.meta.env.VITE_BACKEND_URL+'/api/v1/seller/auth/data', {
      headers: {
        authorization: token
      }
    })
    .then((res) => {
      setLoading(false);
      if (res.data.shopName){
        setValidation(true);
        setShop(res.data.shopName);
      } else {
        setValidation(false);
      }
    })
    .catch((err) => {
      setLoading(false);
      setValidation(false);
      console.log(err);
    })
  }, []);

  if (validation){
    return (
      <div className=' w-full min-h-screen flex flex-col justify-center items-center bg-background'>
          
        <SellerNavBar className=" w-full h-16" />

        <Inventory className=" w-full " />

      </div>
    )
  } else {
    return (
      <div className=' w-full min-h-screen flex gap-5 flex-col justify-center items-center bg-background'>
          
        <Title title="Make sure to use a seller account" className=" text-foreground" />
        <div className='flex gap-4 justify-center items-center'>
          <Button content="Seller Login" className=" px-4 bg-primary text-primary-foreground" onClick={() => {
            navigate('/seller/login')
          }} />
          <Button content="Seller Signup" className=" px-4 bg-primary text-primary-foreground" onClick={() => {
            navigate('/seller/signup')
          }} />
        </div>

      </div>
    )
  }

  
}
