import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { loadingStatus, shopName } from '../store/atoms/atoms';
import SubTitle from './SubTitle';

export default function ProfileAvatar({ className }) {

  const [shop, setShop] = useRecoilState(shopName);

  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  const logoutProcess = () => {
    localStorage.removeItem('token');
    location.reload(true);
  }

  return (
    <div className={` h-full w-10 relative flex flex-col justify-center items-end`}>
      <div className={` w-10 h-10 flex justify-center items-center rounded-full cursor-pointer ${className}`} onClick={() => {
        setProfileMenuVisible(status => !status);
      }}>
        {shop[0].toUpperCase()}
      </div>
      <div className={` absolute -bottom-14 bg-card border flex flex-col justify-center items-center border-border rounded-md overflow-hidden ${profileMenuVisible===false?" w-0 h-0 ":"w-24 h-14"} `}>
        <SubTitle subtitle="My Profile" className=" text-foreground cursor-pointer" />
        <div className=' w-full border border-b border-border'></div>
        <SubTitle subtitle="Log out" className=" text-foreground cursor-pointer" onClick={logoutProcess} />
      </div>
    </div>
  )
}
