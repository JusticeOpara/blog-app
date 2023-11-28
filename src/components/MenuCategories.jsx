import React from "react";
import Link from "next/link";


const MenuCategories = () => {
  return (
    <div className="mt-[35px] mb-[60px] flex flex-wrap gap-[20px] ">
      <Link
        href="/blog?cat=style"
        className="py-[10px] px-[25px] rounded-[10px] text-[14px] text-white w-max bg-[#ff7857]"
      >
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-[10px] px-[25px] rounded-[10px] text-[14px] text-white w-max bg-[#ff7857]"
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-[10px] px-[25px] rounded-[10px] text-[14px] text-white w-max bg-[#ff7857]"
      >
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-[10px] px-[25px] rounded-[10px] text-[14px] text-white w-max bg-[#ff7857]"
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className="py-[10px] px-[25px] rounded-[10px] text-[14px] text-white w-max bg-[#ff7857]"
      >
        Food
      </Link>
    </div>
  );
};

export default MenuCategories;
