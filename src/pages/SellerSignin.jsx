import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loadingStatus, websiteSlogan } from '../store/atoms/atoms';
import { Anchor, Button, InputBox, LinearLoader, SubTitle, Title } from '../components';
import axios from 'axios';

export const SellerSignin = () => {

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
  const [sellerPassword, setSellerPassword] = useState('');

  const [loading, setLoading] = useRecoilState(loadingStatus);

  const sellerLoginProcess = async () => {
    try {
      setLoading(true);
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/seller/login', {
        email: sellerEmail,
        password: sellerPassword,
      })
      // console.log(sellerEmail, sellerPassword);
      // console.log(res);
      const token = res.data.token;
      if (!token){
        const error = res.data.error;
        alert(error);
      } else {
        localStorage.setItem('token', token);
        navigate('/seller/dashboard');
      }
      setLoading(false);
    } catch (err){
      setLoading(false);
      console.log('Error', err);
    }
  }
  
  return (
    <div className=' w-full h-screen bg-background flex flex-col justify-center items-center'>

      <LinearLoader />

      <div className=' w-full min-h-screen bg-background flex justify-center items-center'>
        <div className=' w-0 h-0 overflow-hidden lg:w-[40%] lg:min-h-screen bg-card-foreground/10 text-card-foreground'>
          
          <div className=' w-[100%] h-[80%] flex gap-2 justify-start items-start p-7'>
            <Title title="Outfit Ocean" />
          </div>
          <div className=' w-[100%] h-[20%] flex gap-2 justify-start items-end p-7'>
            <Title title={websiteSloganArray[index]} className=" text-xl" />
          </div>

        </div>

        <div className=' w-full h-full lg:w-[60%] lg:min-h-screen bg-card text-card-foreground'>
          
          <div className={` w-full h-[15%] p-4 lg:w-full lg:h-[20%] flex justify-end items-start lg:p-7`}>
            <Button content="Seller Signup" className=" px-4 text-foreground bg-transparent hover:bg-card-foreground/10" onClick={() => {
              navigate('/seller/signup')
            }} />
          </div>
          <div className={` w-full h-[85%] lg:w-full lg:h-[80%] flex flex-col gap-4 p-10 items-center `}>
            <Title title="Welcome back"/>
            <SubTitle subtitle="Enter your credentials to login into your seller account" />
            <InputBox placeholder="Email address" type="email" className=" w-[90%] md:w-[50%] sm:w-[70%] mt-2" onChange={(e) => {
              setSellerEmail(e.target.value);
            }} />
            <InputBox placeholder="Password" type="password" className=" w-[90%] md:w-[50%] sm:w-[70%] " onChange={(e) => {
              setSellerPassword(e.target.value);
            }} />
            <Button content="Login" className=" w-[90%] md:w-[50%] sm:w-[70%] text-primary-foreground bg-primary hover:bg-primary/90" onClick={sellerLoginProcess} />
            <Anchor content="Forgot your password?" onClick={() => {
              alert('forgot password yet to be added, need to perform operations for creating new password')
            }} />
          </div>
          
        </div>
      </div>


    </div>
  )
}
