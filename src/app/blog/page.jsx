import React from "react";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const BlogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1
  const {cat} = searchParams
  return (
    <div>
      <h1 className="text-white text-center bg-slate-500 py-[5px] px-[10px] capitalize font-bold">Style Blog</h1>
      
      <div className="flex gap-[50px]">
        <CardList  page={page} cat={cat}/>
        <Menu />
      </div>
     

    </div>
  );
};

export default BlogPage;
