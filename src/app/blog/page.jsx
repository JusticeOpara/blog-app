import React from "react";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const BlogPage = () => {
  return (
    <div>
      <h1 className="text-white text-center bg-slate-500 py-[5px] px-[10px] capitalize font-bold">Style Blog</h1>
      
      <div className="flex gap-[50px]">
        <CardList />
        <Menu />
      </div>
     

    </div>
  );
};

export default BlogPage;
