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
    <div>
      <h1>Popular Catergories</h1>
      <div className="flex flex-wrap justify-between gap-[20px]">
       
          {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${"flex flex-wrap justify-between gap-[20px] text-center"} ${item.slug}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt="images"
                width={50}
                height={50}
                className="rounded-2xl"
              />
            )}
            {item.title}
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default CategoryList;
