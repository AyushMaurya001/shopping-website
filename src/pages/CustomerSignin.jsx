import React, { useEffect, useState } from 'react'
import { Anchor, Button, InputBox, LogoTitle, SubTitle, Title } from '../components'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { websiteSlogan } from '../store/atoms/atoms';
import axios from 'axios';

export const CustomerSignin = () => {

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

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const userLoginProcess = async () => {
    try {
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/customer/login', {
        email: userEmail,
        password: userPassword,
      })
      console.log(res);
      const token = res.data.token;
      if (!token){
        alert(res.data.error);
      } else {
        localStorage.setItem('token', token);
        navigate('/home');
      }
    } catch (e){
      console.log(e);
    }
  }

  return (
    <div className=' w-full h-screen bg-background flex justify-center items-center'>

      <div className=' w-0 h-0 overflow-hidden lg:w-[60%] lg:h-[100%] bg-card text-card-foreground'>
        <div className=' lg:w-[100%] lg:h-[70%] lg:flex lg:justify-start lg:items-start lg:p-7'>
          <Title title="Outfit Ocean"/>
        </div>
        <div className=' lg:w-[100%] lg:h-[30%] lg:flex lg:justify-start lg:items-end lg:p-7 lg:font-medium lg:text-2xl'>
          "{websiteSloganArray[index]}"
        </div>
      </div>

      <div className=' w-full h-full lg:w-[40%] bg-card-foreground/10 text-card-foreground'>
        
        <div className={` w-full h-[20%] flex justify-end items-start p-4 lg:w-full lg:h-[20%] lg:flex lg:justify-end lg:items-start lg:p-7`}>
          <Button content="Signup" className=" px-4 text-foreground bg-transparent hover:bg-card/50" onClick={() => {
            navigate('/signup')
          }} />
        </div>
        <div className={` w-full h-[80%] flex flex-col justify-start gap-4 items-center lg:w-full lg:h-[80%] lg:flex lg:flex-col lg:gap-4 lg:p-10 lg:items-center `}>
          <Title title="Welcome back"/>
          <SubTitle subtitle="Enter your credentials to login into your account"/>
          <InputBox placeholder="Email address" type="email" className=" w-[65%] mt-2 md:w-[50%] lg:w-[65%]" onChange={(e) => {
            setUserEmail(e.target.value);
          }} />
          <InputBox placeholder="Password" type="password" className=" w-[65%] md:w-[50%] lg:w-[65%]" onChange={(e) => {
            setUserPassword(e.target.value);
          }} />
          <Button content="Login" className=" w-[65%] bg-primary hover:bg-primary/90 text-primary-foreground md:w-[50%] lg:w-[65%]" onClick={userLoginProcess} />
          <Anchor content="Forgot your password?" onClick={() => {
            alert('forgot password yet to be added')
            console.log('need to perform operations for creating new password')
          }} />
        </div>

      </div>

    </div>
  )
}
