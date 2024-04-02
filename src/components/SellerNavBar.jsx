import React, { useState } from 'react'
import Button from './Button'
import InputBox from './InputBox'
import { useNavigate } from 'react-router-dom'
import SubTitle from './SubTitle'
import Title from './Title'
import LinearLoader from './LinearLoader'
import ProfileAvatar from './ProfileAvatar'

export default function SellerNavBar({ className }) {

  const [overlayNavBarVisible, setOverlayNavBarVisible] = useState(false);

  const navigate = useNavigate();
  
  return (
    <div className={` sticky top-0 bg-card/70 backdrop-blur-sm w-full ${className}`}>

      <LinearLoader />
      
      <div className={` lg:w-[30%] w-full h-screen bg-card transition-all duration-500 absolute flex flex-col justify-start items-center ${overlayNavBarVisible===false?" -left-full":" left-0"} `}>

        <div className=' w-full h-[10%] flex justify-between items-center px-4 bg-card-foreground/10 border border-border'>
          <Button content={<svg xmlns="http://www.w3.org/2000/svg" className=' h-[65%]' viewBox="0 0 24 24" fill="currentColor"><path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path></svg>} className=" w-10 h-full bg-transparent text-card-foreground" onClick={() => {
            navigate('/seller/dashboard');
            setOverlayNavBarVisible(false);
          }}/>
          <Button content={<svg xmlns="http://www.w3.org/2000/svg" className=' h-[65%]' viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>} className=" w-10 h-full bg-transparent text-card-foreground" onClick={() => {
            setOverlayNavBarVisible(false);
          }}/>
        </div>

        <div className=' w-full h-full flex flex-col justify-start items-center bg-card-foreground/10 border border-border'>
          
          <div className=' w-full h-[10%] pl-7 mt-4 flex gap-4 justify-start items-center'>
            <SubTitle subtitle={<svg xmlns="http://www.w3.org/2000/svg" className=' h-8 w-8 fill-card-foreground' viewBox="0 0 24 24" fill="currentColor"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg>} className="h-full flex justify-center items-center cursor-pointer" onClick={() => {
              navigate('/seller/dashboard');
            }} />
            <Title title="Dashboard" className=" text-card-foreground cursor-pointer" onClick={() => {
              navigate('/seller/dashboard');
            }} />
          </div>
          <div className=' w-full h-[10%] pl-7 flex gap-4 justify-start items-center'>
            <SubTitle subtitle={<svg xmlns="http://www.w3.org/2000/svg" className=' h-8 w-8 fill-card-foreground' viewBox="0 0 24 24" fill="currentColor"><path d="M17.2847 10.6683L22.5 13.9909L17.248 17.3368L12 13.9934L6.75198 17.3368L1.5 13.9909L6.7152 10.6684L1.5 7.34587L6.75206 4L11.9999 7.34335L17.2481 4L22.5 7.34587L17.2847 10.6683ZM17.2112 10.6684L11.9999 7.3484L6.78869 10.6683L12 13.9883L17.2112 10.6684ZM6.78574 18.4456L12.0377 15.1L17.2898 18.4456L12.0377 21.7916L6.78574 18.4456Z"></path></svg>} className="h-full flex justify-center items-center cursor-pointer" onClick={() => {
              navigate('/seller/inventory');
            }} />
            <Title title="Products" className=" text-card-foreground cursor-pointer" onClick={() => {
              navigate('/seller/inventory');
            }} />
          </div>
          <div className=' w-full h-[10%] pl-7 flex gap-4 justify-start items-center'>
            <SubTitle subtitle={<svg xmlns="http://www.w3.org/2000/svg" className=' h-8 w-8 fill-card-foreground' viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>} className="h-full flex justify-center items-center cursor-pointer" onClick={() => {
              navigate('/seller/orders');
            }} />
            <Title title="Orders" className=" text-card-foreground cursor-pointer" onClick={() => {
              navigate('/seller/orders');
            }} />
          </div>
          <div className=' w-full h-[10%] pl-7 flex gap-4 justify-start items-center'>
            <SubTitle subtitle={<svg xmlns="http://www.w3.org/2000/svg" className=' h-8 w-8 fill-card-foreground' viewBox="0 0 24 24" fill="currentColor"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>} className="h-full flex justify-center items-center cursor-pointer" onClick={() => {
              navigate('/seller/customers');
            }} />
            <Title title="Customers" className=" text-card-foreground cursor-pointer" onClick={() => {
              navigate('/seller/customers');
            }} />
          </div>
          <div className=' w-full h-[10%] pl-7 flex gap-4 justify-start items-center'>
            <SubTitle subtitle={<svg xmlns="http://www.w3.org/2000/svg" className=' h-8 w-8 fill-card-foreground' viewBox="0 0 24 24" fill="currentColor"><path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path></svg>} className="h-full flex justify-center items-center cursor-pointer" onClick={() => {
              navigate('/seller/analytics');
            }} />
            <Title title="Analytics" className=" text-card-foreground cursor-pointer" onClick={() => {
              navigate('/seller/analytics');
            }} />
          </div>
          
        </div>

      </div>

      <div className=' w-full h-full bg-card-foreground/10 border border-border px-4 flex justify-between items-center'>

        <Button content={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z"></path></svg>} className=" w-10 h-10 bg-card text-card-foreground" onClick={() => {
          setOverlayNavBarVisible(true);
        }}/>

        <InputBox className=" w-[55%] bg-card/100 text-card-foreground" placeholder="Search products.." />

        <ProfileAvatar className=" text-card-foreground bg-card" />

      </div>
    </div>
  )

}
