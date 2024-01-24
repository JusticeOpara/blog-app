import React from "react";
import Link from "next/link";
//  import ThemeToggle from "./ThemeToggle";
import AuthLink from "./AuthLink";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-[70px] bg-blue-300">
      <h1 className="font-bold text-xl text-black">JustyBlog.</h1>

      <div className=" h-full flex gap-4 xl:gap-6 items-center bg-white">
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

        <AuthLink />

        <Image src="/instagram.svg" width={24} height={24} alt="social icon" />
        <Image src="/twitter.svg" width={24} height={24} alt="social icon" />
        <Image src="/linkedin.svg" width={24} height={24} alt="social icon" />
      </div>
    </nav>
  );
};

export default Navbar;
