import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="md:mt-[50px] mt-5 flex md:flex-row flex-col justify-center items-center w-full h-[500px] md:gap-[50px] max-sm:h-[400px] bg-[#F7FAFC]">
      <div className="md:w-[454px] w-full">
        
        <h1 className="font-bold md:text-6xl text-3xl">Here Justy dev here </h1>
  
       <p className="text-[#4A5568] md:text-3xl font-medium text-lg">Discover my stories and creative ideals</p>
      </div>

      <div className="relative h-full md:w-[500px] w-full">
     
        <Image
          src="/hero.png"
          fill
          objectFit="contain"
          alt="a picture of a team"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Featured;
