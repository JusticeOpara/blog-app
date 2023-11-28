import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex-[5]">
    <h1 className="">Recent Posts</h1>
    
      <div className="my-[50px]">
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
