import React from "react";
import Image from "next/image";
import Link from "next/link";
const MenuPost = (withImage) => {
  return (
    <div className="mt-[35px] mb-[60px] flex flex-col gap-[35px] ">
      <Link href="/" className="flex items-center gap-[20px] ">
        {withImage && (
          <div className="flex-[1] aspect-[1/1] relative">
            <Image
              src="/food.png"
              className="rounded-[50%] object-cover border-[3px] "
              fill
              alt="food"
            />
          </div>
        )}

        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="py-[3px] px-[8px] rounded-[10px] text-[14px] text-white w-max bg-[#ff7857]">
            Travel
          </span>
          <h3 className="text-base text-[#718096]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <div className="text-xs font-medium flex gap-2">
            <span>John Doe </span> -<span>10.02.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex items-center gap-[20px] ">
        {withImage && (
          <div className="flex-[1] aspect-[1/1] relative">
            <Image
              src="/food.png"
              className="rounded-[50%] object-cover border-[3px] "
              fill
              alt="food"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="py-[3px] px-[8px] rounded-[10px] text-[14px] text-white w-max bg-blue-300">
            Food
          </span>
          <h3 className="text-base text-[#718096]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <div className="text-xs font-medium flex gap-2">
            <span>John Doe </span> -<span>10.02.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className="flex items-center gap-[20px] ">
        {withImage && (
          <div className="flex-[1] aspect-[1/1] relative">
            <Image
              src="/food.png"
              className="rounded-[50%] object-cover border-[3px] "
              fill
              alt="food"
            />
          </div>
        )}

        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className="py-[3px] px-[8px] rounded-[10px] text-[14px] text-white w-max bg-orange-300">
            fashoin
          </span>
          <h3 className="text-base text-[#718096]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
          <div className="text-xs font-medium flex gap-2">
            <span>John Doe </span> -<span>10.02.2023</span>
          </div>
        </div>
      </Link>
    </div>

   
  );
};

export default MenuPost;
