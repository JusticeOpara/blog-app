"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const RegisterPage = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(data,"--data")

  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const userInfo = await res.json();
    console.log(userInfo);
    router.push('/login')
  };

  return (
    <div className="w-full h-[75vh] bg-blue-300 flex items-center">
      <div className="w-full h-full relative hidden lg:block">
        <Image src="/register.png" className="" fill alt="Register pic" />
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <form className="lg:p-36 p-0" onSubmit={registerUser}>
          <span className="text-sm font-normal">LET'S GET YOU STARTED</span>

          <h1 className="text-[25px] text-black">Create an Account</h1>

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              required
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "
              placeholder="justiceague40@gmail.com"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
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
              name="password"
              id="password"
              type="password"
              value={data.password}
              required
              className="border text-[#4A5568] text-base rounded-lg  block w-full p-3 border-[#424242] outline-none"
              placeholder="***********"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
          </div>

          <button
            className="uppercase w-full h-[50px] bg-black text-white rounded-lg my-4"
            type="submit"
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

          <div className="text-center text-sm font-normal mt-12">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold underline">
              LOGIN HERE
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
