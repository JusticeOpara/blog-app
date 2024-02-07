"use client";

import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const session = useSession();
  console.log(session, "session");

  const { status } = session;
  console.log(status, "--session--status data");

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav className=" top-[0] left-[0] w-full flex justify-between items-center h-[70px] ">
      <Link href="/">
        <h1 className="font-bold text-xl text-black cursor-pointer">
          JustyBlog.
        </h1>
      </Link>

      <div className="h-full lg:flex gap-4 xl:gap-6 items-center bg-white hidden">
        <Image src="/search.svg" width={24} height={24} alt="social icon" />
        <input className="outline-none " placeholder="Search..." />

        {/* <ThemeToggle />   */}

        <Link href="/" className="text-base font-normal cursor-pointer">
          {" "}
          Home
        </Link>
        <Link href="/about" className="text-base font-normal cursor-pointer">
          About
        </Link>


        {status === "unauthenticated" ? (
      
        <>
        <Link
          href="/login"
          className="cursor-pointer text-base font-normal"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="text-base font-normal cursor-pointer"
        >
          Register
        </Link>
      </>
        ) : (
          
          <>
          <Link
            href="/write"
            className="text-base font-normal cursor-pointer"
          >
            Write
          </Link>

          <button
            onClick={()=>signOut()}
            className="text-base font-normal cursor-pointer"
          >
            Logout
          </button>
        </>
        )}

        {/* the auth functionality is not working for now */}

        <Image src="/instagram.svg" width={24} height={24} alt="social icon" />
        <Image src="/twitter.svg" width={24} height={24} alt="social icon" />
        <Image src="/linkedin.svg" width={24} height={24} alt="social icon" />
      </div>

      <div onClick={handleToggle} className="block lg:hidden">
        <Image src="/bar.svg" width={24} height={24} alt="navbar" />
      </div>
      <div
        className={
          isExpanded
            ? "h-full fixed overflow-hidden left-0 top-0 w-full mx-auto z-50 block mt-16 ease-in-out flex-col lg:hidden bg-white"
            : "absolute left-[-100%]"
        }
      >
        <ul
          onClick={handleToggle}
          className=" w-full h-screen lg:hidden bg-white pt-5 px-10 flex flex-col gap-8"
        >
          <Link href="/" className="text-lg font-bold">
            <li className="bg-[#F7FAFC] rounded-md h-14 w-full flex items-center p-6 gap-8">
              <Image src="/home.svg" width={24} height={24} alt="home" /> Home
            </li>
          </Link>

          <Link href={""} className="text-lg font-bold">
            <li className="bg-[#F7FAFC] rounded-md h-14 w-full flex items-center p-6 gap-8">
              <Image src="/home.svg" width={24} height={24} alt="home" />
              Contact
            </li>
          </Link>

          <Link href="/about" className="text-lg font-bold">
            <li className="bg-[#F7FAFC] rounded-md h-14 w-full flex items-center p-6 gap-8">
              <Image src="/about.svg" width={24} height={24} alt="home" />
              About
            </li>
          </Link>

          <li className="bg-[#F7FAFC] rounded-md h-14 w-full flex items-center p-6 gap-8 font-bold">
            <Image src="/login.svg" width={24} height={24} alt="home" />

            {status === "unauthenticated" ? (
              <>
                <Link
                  href="/login"
                  className="cursor-pointer text-base font-normal"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="text-base font-normal cursor-pointer"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/write"
                  className="text-base font-normal cursor-pointer"
                >
                  Write
                </Link>

                <button
                  onClick={() => signOut()}
                  className="text-base font-normal cursor-pointer border"
                >
                  Logout
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
