import React from 'react'

export default function LogoTitle({ className, logoClassName, titleClassName }) {
  return (
    <div className={` flex gap-1 justify-center items-center ${className} `}>
        <div className={` bg-logo-image bg-contain bg-center bg-no-repeat p-2 h-10 w-10 ${logoClassName} `} style={{
          backgroundImage: `url(${"src/assets/images/logo.webp"})`
        }}></div>
        <p className={` p-2 font-semibold text-2xl ${titleClassName} `}>
          Outfit Ocean
        </p>
    </div>
  )
}
