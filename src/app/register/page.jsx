'use client'

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";




const RegisterPage = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  console.log(userCreated,"---userIsCreated")
  console.log(creatingUser,"--creatingUser")
  async function handleFormSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      header: { "Content-Type": "application/json" },
    });
    console.log(response,"--response of register")
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <div className="w-full h-[75vh] bg-blue-300 flex items-center">
      <div className="w-full h-full relative hidden lg:block">
        <Image src="/register.png" className="" fill alt="Register pic" />
      </div>
      <div className="w-full h-full flex flex-col justify-center">
      
        <form className="lg:p-36 p-0" onSubmit={handleFormSubmit}>
        {userCreated && (
        <div className="my-4 text-center bg-red-500">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center bg-red-500">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
          <span className="text-sm font-normal">LET'S GET YOU STARTED</span>

          <h1 className="text-[25px] text-black">
          Create an Account
          </h1>
          

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "
              placeholder="justiceague40@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              disabled={creatingUser}
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              className="border text-[#4A5568] text-base rounded-lg  block w-full p-3 border-[#424242] outline-none"
              placeholder="***********"
              onChange={(e) => setPassword(e.target.value)}
              disabled={creatingUser}
            />
          </div>

          <button
            className="uppercase w-full h-[50px] bg-black text-white rounded-lg my-4"
            type="submit"
            disabled={creatingUser}
          >
            GET STARTED
          </button>

          
                 
          <div className="flex items-center gap-3">
            <div className="text-center divide-y w-full h-[1px] bg-black"></div>
            <span className="">or</span>
            <div className="text-center divide-y w-full h-[1px] bg-black"></div>
          </div>

          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex gap-4 justify-center rounded-lg border-[#eee] border w-full py-4 cursor-pointer my-4"
          >
            <Image
              src={"/google.svg"}
              alt={"google icon"}
              width={24}
              height={24}
            />
            Login with Google
          </button>

          <button
            type="button"
            className="flex gap-4 justify-center rounded-lg border-[#eee] border w-full py-4 cursor-pointer my-4"
          >
            <Image
              src={"/github.svg"}
              alt={"github icon"}
              width={24}
              height={24}
            />
            Login with Github
          </button>

          <div className="text-center text-sm font-normal mt-12">Already have an account? <Link href="/login" className="font-semibold underline">LOGIN HERE</Link></div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
