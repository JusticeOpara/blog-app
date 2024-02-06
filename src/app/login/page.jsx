"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const [dataf, setDataf] = useState({ email: "", password: "" });
 console.log(dataf,"login data")
  const { data, status } = useSession();
 console.log(data, status, "--status --useSession");

  // if (status === "loading") {
  //   return <div className=" italic">Loading...</div>;
  // }

  // if (status === "authenticated") {
  //   router.push("/");
  // }

  const loginUser = async (e) => {
    e.preventDefault();
    signIn('credentials',{
      ...data,
      redirect:false
    })
    router.push("/")
  };

  return (
    <div className="w-full h-[75vh] bg-blue-300 flex items-center">
      <div className="w-full h-full relative hidden lg:block">
        <Image src="/login-screen.png" className="" fill alt="login pic" />
      </div>
      <div className="w-full h-full flex flex-col justify-center">
        <form className="lg:p-36 p-0" onSubmit={loginUser}>
          <span>WELCOME BACK</span>
          <h1 className="text-[25px] font-normal text-black">
            Log In to your Account
          </h1>

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
              value={dataf.email}
              name="email"
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "
              placeholder="justiceague404@gmail.com"
              onChange={(e) => {
                setDataf({ ...dataf, email: e.target.value });
              }}
              required
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
              id="password"
              type="password"
              name="password"
              value={dataf.password}
              className="border text-[#4A5568] text-base rounded-lg  block w-full p-3 border-[#424242] outline-none"
              placeholder="***********"
              onChange={(e) => {
                setDataf({ ...dataf, password: e.target.value });
              }}
              required
            />
          </div>

          <button
            className="uppercase w-full h-[50px] bg-black text-white rounded-lg my-4"
            type="submit"
          >
            Continue
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
            New User?{" "}
            <Link href="/register" className="font-semibold underline">
              SIGN UP HERE
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
