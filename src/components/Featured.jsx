import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-[60px] flex justify-center items-center  w-full h-[500px] gap-[50px] bg-[#FBFBFB]">
      <div className="w-[454px]">
       <h1 className="font-bold text-6xl">Here Justy dev here</h1>
     
       <p className="text-[#4A5568] text-3xl font-normal">Discover my stories and creative ideals</p>
      </div>

      <div className="relative h-full w-[500px]">
     
        <Image
          src="/hero.png"
          fill
          objectFit="contain"
          alt="tech pics"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Featured;
