import Image from "next/image";
import Link from "next/link";
import React from "react";



const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed hfshfhsjsd");
  }

  return res.json(); 
};



const CategoryList = async() => {


   const data = await getData()


   console.log(data,"--datajfksdfsdfdfdjslkfjlks")

  
  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-3xl font-bold leading-normal">Popular Catergories</h1>
      
      <div className="flex flex-wrap justify-between gap-4 lg:gap-0">
       
          {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${"flex flex-wrap justify-between items-center gap-[20px] py-2 text-center bg-[#F7FAFC] px-6 rounded-lg"} ${item.slug}`}
            key={item._id}
          >
            {item.img && (

              <Image
                src={item.img}
                alt="images"
                width={100}
                height={100}
                className="rounded-[50%] object-cover max-sm:w-[30px]"
              />
            )}
            <span className="text-[#4A5568] text-base font-medium capitalize">
            
            {item.title}
            </span>
           
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default CategoryList;
