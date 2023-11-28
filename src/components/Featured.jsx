import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className=' mt-[30px]'>
      <h1 className='text-8xl font-normal text'>
        <b>Hey,  JustScript here!</b> Discover my stories and creative ideas.
      </h1>


      <div className='mt-[60px] flex items-center gap-[50px] '>
     
        <div className='relative h-[500px] w-full fl'>
          <Image src="/tech.jpeg"  fill alt="tech pics" className='object-contain'/>
        </div>
        <div className=''>
          <h1 className="">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className=" py-[12px] px-[20px] border-none rounded-[5px] w-max bg-slate-500">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;