import React from "react";
import Link from "next/link";
//  import ThemeToggle from "./ThemeToggle";
import AuthLink from "./AuthLink";


const Navbar = () => {
  return (
    <header className="bg-red-200 w-full h-[50px]">
      <nav className="flex justify-between items-center w-full h-full">
        <h1 className="font-bold text-3xl font-ClashDisplay text-white">Justy Blog.</h1>


        <div className="flex gap-2 items-center bg-white">
          {/* <ThemeToggle />   */}
          <Link href={''} className="text-base leading-normal">Contact</Link>
          <Link href={''} className="text-base leading-normal">About</Link>
          
        <AuthLink/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
