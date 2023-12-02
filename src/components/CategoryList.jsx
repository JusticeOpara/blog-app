import Image from "next/image";
import Link from "next/link";
import React from "react";



const getData = async ()=>{
  const res = await fetch("/api/categories",{
    catch: "no-store",
  })
 if (!res.ok){
  throw new Error("Failed")
 }
 return res.json
}
const CategoryList = async() => {
  // const data = await getData()
  // console.log(data,"--data")

  
  return (
    <div>
      <h1>Popular Catergories</h1>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center border-[10px] bg-red-200">
          <Link
            href="/blog?cat=style"
            className={`${"flex flex-wrap justify-between gap-[20px] text-center"} `}
          >
            <Image
              src="/food.png"
              className="rounded-[40%] "
              width={50}
              height={50}
              alt="food"
            />
            fruit
          </Link>
        </div>
        <div className="flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center border-[10px] bg-zinc-400">
          <Link
            href="/blog?cat=style"
            className={`${"flex flex-wrap justify-between gap-[20px]"} `}
          >
            <Image
              src="/food.png"
              className="rounded-[40%] "
              width={50}
              height={50}
              alt="food"
            />
            travel
          </Link>
        </div>

        <div className="flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center border-[10px] bg-purple-300">
          <Link
            href="/blog?cat=style"
            className={`${"flex flex-wrap justify-between gap-[20px]"} `}
          >
            <Image
              src="/food.png"
              className="rounded-[40%] "
              width={50}
              height={50}
              alt="food"
            />
            food
          </Link>
        </div>

        <div className="flex items-center gap-[10px] capitalize w-[15%] h-[80px] justify-center border-[10px] bg-sky-200">
          <Link
            href="/blog?cat=style"
            className={`${"flex flex-wrap justify-between gap-[20px]"} `}
          >
            <Image
              src="/food.png"
              className="rounded-[40%] "
              width={50}
              height={50}
              alt="food"
            />
            fashion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
