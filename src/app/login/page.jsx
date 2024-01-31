"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {useState} from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const { data, status } = useSession();
  console.log(data, status, "--status --useSession");

  const router = useRouter();

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });
    setLoginInProgress(false)
  }

  if (status === "loading") {
    return <div className=" italic">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="w-full h-[75vh] bg-blue-300 flex items-center">
      <div className="w-full h-full relative">
        <Image src="/login-screen.png" className="" fill alt="login pic" />
      </div>
      <div className="w-full h-full flex flex-col justify-center">
       
        <form className="p-36" onSubmit={handleFormSubmit}>
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
              type="email"
              value={email}
              className="border border-[#424242] outline-none text-[#4A5568] text-base rounded-lg  block w-full p-3 "
              placeholder="justiceague404@gmail.com"
             onChange={(e)=>setEmail(e.target.value)}
             disabled={loginInProgress}
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="Email"
              className="block mb-2 text-base font-medium text-[#4A5568] "
            >
              Password
            </label>
            <input
              type="text"
              value={password}
              className="border text-[#4A5568] text-base rounded-lg  block w-full p-3 border-[#424242] outline-none"
              placeholder="***********"
              onChange={(e)=>setPassword(e.target.value)}
              disabled={loginInProgress}
            />
          </div>

          <button className="uppercase w-full h-[50px] bg-black text-white rounded-lg my-4" type="submit" disabled={loginInProgress}>
            Continue
          </button>

          <div className="text-center">or</div>

          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex gap-4 justify-center rounded-lg border-[#eee] border w-full py-4 cursor-pointer my-4"
          >
            <Image src={"/google.svg"} alt={"google icon"} width={24} height={24} />
            Login with google
          </button>

          <button
            type="button"
            className="flex gap-4 justify-center rounded-lg border-[#eee] border w-full py-4 cursor-pointer my-4"
          >
            <Image src={"/github.svg"} alt={"github icon"} width={24} height={24} />
            Login with Github
          </button>
        </form>
      </div>


    </div>
  );
};

export default LoginPage;
