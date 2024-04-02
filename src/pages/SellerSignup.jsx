import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loadingStatus, websiteSlogan } from '../store/atoms/atoms';
import { Button, InputBox, LinearLoader, SubTitle, Title } from '../components';
import axios from 'axios';

export const SellerSignup = () => {

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const websiteSloganArray = useRecoilValue(websiteSlogan);

  useEffect(() => {
    const sloganTimer = setTimeout(() => {
      if (index === websiteSloganArray.length-1) setIndex(0);
      else setIndex(i => i+1);
      clearTimeout(sloganTimer);
    }, 3000)
  }, [index]);

  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerShopName, setSellerShopName] = useState('');
  const [sellerPassword, setSellerPassword] = useState('');

  const [loading, setLoading] = useRecoilState(loadingStatus);

  const sellerSignupProccess = async () => {
    try {
      setLoading(true);
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/seller/signup', {
        email: sellerEmail,
        password: sellerPassword,
        name: sellerName,
        shopName: sellerShopName,
      })
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/seller/dashboard');
      setLoading(false);
    } catch (err){
      setLoading(false);
      console.log('Error ', err);
    }
  }
  
  return (
    <div className=' w-full min-h-screen bg-background flex flex-col justify-center items-center'>

      <LinearLoader />

      <div className=' w-full min-h-screen bg-background flex justify-center items-center'>
        <div className='w-0 h-0 overflow-hidden lg:w-[40%] lg:h-screen bg-card-foreground/10 text-card-foreground'>
          
          <div className=' w-[100%] h-[80%] flex gap-2 justify-start items-start p-7'>
            <Title title="Outfit Ocean" />
          </div>
          <div className=' w-[100%] h-[20%] flex gap-2 justify-start items-end p-7'>
            <Title title={websiteSloganArray[index]} className=" text-xl" />
          </div>

        </div>

        <div className=' w-full min-h-screen lg:w-[60%] bg-card text-card-foreground'>
          
          <div className={` w-full h-[15%] p-4 lg:h-[20%] flex justify-end items-start lg:p-7`}>
            <Button content="Seller Login" className=" px-4 text-foreground bg-transparent hover:bg-card-foreground/10" onClick={() => {
              navigate('/seller/login')
            }} />
          </div>
          <div className={` w-full h-[85%] lg:h-[80%] flex flex-col gap-4 p-10 items-center `}>
            <Title title="Create a seller account"/>
            <SubTitle subtitle="Enter your data below to create your seller account" />
            <InputBox placeholder="Full name" type="text" className=" mt-2 w-[90%] md:w-[50%] sm:w-[70%] " onChange={(e) => {
              setSellerName(e.target.value);
            }} />
            <InputBox placeholder="Shop name" type="text" className=" w-[90%] md:w-[50%] sm:w-[70%]" onChange={(e) => {
              setSellerShopName(e.target.value);
            }} />
            <InputBox placeholder="Email address" type="email" className=" w-[90%] md:w-[50%] sm:w-[70%]" onChange={(e) => {
              setSellerEmail(e.target.value);
            }} />
            <InputBox placeholder="Password" type="password" className=" w-[90%] md:w-[50%] sm:w-[70%]" onChange={(e) => {
              setSellerPassword(e.target.value);
            }} />
            <Button content="Create account" className=" text-primary-foreground bg-primary hover:bg-primary/90 w-[90%] md:w-[50%] sm:w-[70%]" onClick={sellerSignupProccess} />
            <SubTitle subtitle="By clicking continue, you agree to our Terms of Service and Privacy Policy." className=" w-[90%] md:w-[50%] sm:w-[70%] text-center"/>
          </div>
          
        </div>
      </div>


    </div>
  )
}
