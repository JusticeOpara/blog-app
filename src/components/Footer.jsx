import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='flex justify-between  w-full h-[60px] mt-40 items-center border-t-2'>
      <h1><span className='text-base font-bold'>JustyBlog </span><span className='text-base font-normal max-sm:text-[6px]'>2024 copyright all rights reserved </span></h1>
     

      <div className='flex gap-6'>
      <Image src="/instagram.svg" width={24} height={24} alt="social icon" />
        <Image src="/twitter.svg" width={24} height={24} alt="social icon" />
        <Image src="/linkedin.svg" width={24} height={24} alt="social icon" />
      </div>
    </div>
  )
}

export default Footer