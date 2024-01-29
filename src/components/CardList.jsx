import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";


const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed hfshfhsjsd");
  }

  return res.json(); 
};

const CardList = async({page}) => {
  // const data = await getData(page)

  return (
    <div className="flex-[5]">
    <h1 className="text-3xl font-bold leading-normal">Recent Posts</h1>
    {/* {data?.map(items=>(
      <Card key={items.id}/>
    ))} */}
      <div className="md:my-[50px] my-8">
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
