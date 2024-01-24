import React from "react";
import Pagination from "./Pagination";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "./MenuPost";
import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className="flex-[2] mt-[60px]">
      <h2 className="text-base font-medium text-gray-500"> {"What's Hot"}</h2>
      <h1 className="text-lg font-bold text-[#2D3748]"> Most Popular</h1>

      <MenuPost withImage={false} />

      <h1 className="font-medium text-base text-gray-500">
        Discover by Topics
      </h1>
      <h2 className="text-lg font-bold text-[#2D3748]"> Catgories</h2>
      <MenuCategories />

      <h2 className="text-base font-medium text-gray-500"> Chosen by the </h2>
      <h1 className="text-lg font-bold text-[#2D3748]">Editor Pick</h1>
      <MenuPost withImage={true} />

      <Pagination />
    </div>
  );
};

export default Menu;
