import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const Card = () => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px] ">
      
        <div className="flex-[1] h-[350px] relative">
          <Image src="/food.png" alt="food" fill className="object-cover rounded-lg" />
        </div>
    
      <div className="flex-[1] flex flex-col md:gap-[30px] gap-4 max-sm:gap-1">
        <div className="text-sm text-[#718096]">
          <span className="">11.02.2023 </span>
          <span className="uppercase">CULTURE</span>
        </div>

        <Link href='/'>
          <h1 className='font-bold text-xl text-[#2D3748] max-sm:text-base'>Total TypeScript: Professional TypeScript Training by Matt ...</h1>
          
        </Link>
        <p className="md:text-base text-xs text-[#718096]">
        The Beginner’s TypeScript tutorial contains 18 lessons, all with problems and solutions presented in an IDE with accompanying video explanations.
         The goal is to make both the Vitest tests and the TypeScript checker happy with your own solutions. Topics covered include:
        </p>
        {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>  */}
        <Link href="/" className="b-[1px] font-bold  text-[#2D3748] text-sm">
          Read More
        </Link>
        
      </div>
    </div>

  )
}

export default Card

