"use client";

import React from "react";
import Link from "next/link";
//  import ThemeToggle from "./ThemeToggle";
import AuthLink from "./AuthLink";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav className=" top-[0] left-[0] w-full flex justify-between items-center h-[70px]">
      <Link href="/">
      <h1 className="font-bold text-xl text-black cursor-pointer">JustyBlog.</h1>
      </Link>
      

      <div className="h-full lg:flex gap-4 xl:gap-6 items-center bg-white hidden">
        <Image src="/search.svg" width={24} height={24} alt="social icon" />
        <input className="outline-none " placeholder="Search..." />

        {/* <ThemeToggle />   */}

        <Link href="/" className="text-base font-normal">
          {" "}
          Home
        </Link>
        <Link href={""} className="text-base font-normal">
          Contact
        </Link>

        <Link href="/about" className="text-base font-normal">
          About
        </Link>
       {/* the auth functionality is not working for now */}
        <AuthLink /> 

        <Image src="/instagram.svg" width={24} height={24} alt="social icon" />
        <Image src="/twitter.svg" width={24} height={24} alt="social icon" />
        <Image src="/linkedin.svg" width={24} height={24} alt="social icon" />
      </div>

      <div onClick={handleToggle} className="block  md:hidden">
        <Image src="/bar.svg" width={24} height={24} alt="navbar" />
      </div>
      <div
          className={
            isExpanded ? 'h-full fixed absodlute left-0 top-0 w-full mx-auto z-50 block mt-16  ease-in-out flex-col md:hidden bg-white' : 'absolute left-[-100%]'
          }
        >
          <ul
            onClick={handleToggle}
            className=' w-full h-screen md:hidden'
          >
            <li>
            <Link href="/" className="text-base font-normal">
          {" "}
          Home
        </Link>
            </li>
            <li> <Link href={""} className="text-base font-normal">
          Contact
        </Link></li>
            <li>
            <Link href="/about" className="text-base font-normal">
          About
        </Link>
            </li>


            <AuthLink />
            
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
