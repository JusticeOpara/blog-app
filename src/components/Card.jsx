import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const Card = () => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
      
        <div className="flex-[1] h-[350px] relative">
          <Image src="/food.png" alt="food" fill className="object-cover" />
        </div>
    
      <div className="flex-[1] flex flex-col gap-[30px]">
        <div className="">
          <span className="">11.02.2023</span>
          <span className="">CULTURE</span>
        </div>

        <Link href='/'>
          <h1 className=' font-bold'>Total TypeScript: Professional TypeScript Training by Matt ...</h1>
        </Link>
        <p className="font-medium">
        The Beginner’s TypeScript tutorial contains 18 lessons, all with problems and solutions presented in an IDE with accompanying video explanations.
         The goal is to make both the Vitest tests and the TypeScript checker happy with your own solutions. Topics covered include:
        </p>
        {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>  */}
        <Link href="/" className="bb-[1px] w-max py-2 ">
          Read More
        </Link>
      </div>
    </div>

  )
}

export default Card

