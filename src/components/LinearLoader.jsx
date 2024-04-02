import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { loadingStatus } from '../store/atoms/atoms';

export default function LinearLoader() {

  const status = useRecoilValue(loadingStatus);

  const [loaderSize, setLoaderSize] = useState("w-[0%]");
  const [loaderSide, setLoaderSide] = useState("right-0");

  useEffect(() => {
    const timer = setTimeout(() => {

      if (loaderSize === "w-[0%]") setLoaderSize("w-[100%]");
      else setLoaderSize("w-[0%]");
      if (loaderSide === "left-0") setLoaderSide("right-0");
      else setLoaderSide("left-0");

      clearTimeout(timer);
    }, 500);
  }, [loaderSize]);

  return (
    <div className={` w-full ${status===true?" ":" "} bg-transparent sticky top-0 z-[1] `}>
      <div className={` ${status===true?"h-0.5":"h-0"} bg-primary absolute transition-all duration-500 ${loaderSize} ${loaderSide} `}>

      </div>
    </div>
  )
}
