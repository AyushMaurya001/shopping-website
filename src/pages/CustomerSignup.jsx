import React, { useEffect, useState } from 'react'
import LogoTitle from '../components/LogoTitle'
import { Button, InputBox, LinearLoader, SubTitle, Title } from '../components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loadingStatus, websiteSlogan } from '../store/atoms/atoms';
import axios from 'axios';

export const CustomerSignup = () => {

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

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [loading, setLoading] = useRecoilState(loadingStatus);

  const userSignupProcess = () => {
    setLoading(true);
    axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/customer/signup', {
      name: userName,
      email: userEmail,
      password: userPassword,
    })
    .then((res) => {
      setLoading(false);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }
  
  return (
    <div className=' bg-background w-full h-screen flex flex-col justify-center items-center'>

      <LinearLoader />

      <div className=' bg-background w-full h-screen lg:w-full lg:h-screen lg:bg-background lg:flex lg:justify-center lg:items-center'>

        <div className=' w-0 h-0 overflow-hidden lg:w-[60%] lg:h-[100%] lg:bg-card lg:text-card-foreground'>
          <div className=' w-[100%] h-[70%] flex justify-start items-start p-7'>
            <Title title="Outfit Ocean" />
          </div>
          <div className=' w-[100%] h-[30%] flex justify-start items-end p-7 font-medium text-2xl'>
            "{websiteSloganArray[index]}"
          </div>
        </div>

        <div className=' w-full h-full lg:w-[40%] lg:h-[100%] bg-card-foreground/10 text-card-foreground'>
          
          <div className={` w-full h-[20%] flex justify-end items-start p-4 lg:w-full lg:h-[20%] lg:flex lg:justify-end lg:items-start lg:p-7`}>
            <Button content="Login" className=" px-4 text-foreground bg-transparent hover:bg-card/50" onClick={() => {
              navigate('/login')
            }} />
          </div>
          <div className={` w-full h-[80%] flex flex-col gap-4 justify-start items-center lg:w-full lg:h-[80%] lg:flex lg:flex-col lg:gap-4 lg:p-10 lg:items-center `}>
            <Title title="Create an account"/>
            <SubTitle subtitle="Enter your data below to create your account" className="" />
            <InputBox placeholder="Full name" type="text" className=" w-[65%] mt-2 md:w-[50%] lg:w-[65%]" onChange={(e) => {
              setUserName(e.target.value);
            }} />
            <InputBox placeholder="Email address" type="email" className=" w-[65%] md:w-[50%] lg:w-[65%]" onChange={(e) => {
              setUserEmail(e.target.value);
            }} />
            <InputBox placeholder="Password" type="password" className=" w-[65%] md:w-[50%] lg:w-[65%]" onChange={(e) => {
              setUserPassword(e.target.value);
            }} />
            <Button content="Create account" className=" w-[65%] text-primary-foreground bg-primary hover:bg-primary/90 md:w-[50%] lg:w-[65%]" onClick={userSignupProcess} />
            <SubTitle subtitle="By clicking continue, you agree to our Terms of Service and Privacy Policy." className=" w-[60%] text-center md:w-[45%] lg:w-[60%] "/>
          </div>

        </div>

      </div>

    </div>
  )
}
