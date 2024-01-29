"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {data, status } = useSession();
   console.log(data,status,"--status --useSession")

  const router = useRouter();

  if (status === "loading") {
    return <div className=" italic">Loading...</div>;
  }

  if (status === "authenticated") {
    
   router.push("/")
  }

  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="flex flex-col gap-[50px] rounded-md py-[150px] px-[200px]">
        <div
          className="p-[20px] rounded-[5px] border-none font-bold cursor-pointer bg-[#ff5555] flex text-white items-center justify-center"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className="p-[20px] rounded-[5px] border-none font-bold cursor-pointer flex bg-[#111] text-white items-center justify-center">
          Sign in with Github
        </div>
        <div className="p-[20px] rounded-[5px] border-none font-bold cursor-pointer flex bg-[#087bea] text-white items-center justify-center">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
