"use client"

import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from 'react-quill';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value,setValue] = useState("")
  const { status } = useSession();

  console.log(status, "--StatusData");

  const router = useRouter();

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (status === "authenticated") {
    console.log("authenticated or not")
    router.push("/");
  }
  return (
    <div className="relative flex flex-col bg-blue-400">
      <input
        placeholder="Title"
        text="Text"
        className="p-[50px] border-none outline-none bg-transparent text-[64px]"
      />

      <div className="flex gap-[20px] h-[700px] relative ">
        <button className="w-[36px] h-[36px] rounded-[50%] border flex items-center justify-center cursor-pointer" onClick={()=>setOpen (!open)}>
          <Image src="" width={16} height={16} className="" alt="" />
        </button>
        {open && (
          <div className="flex gap-[20px] absolute z-[999] w-full left-[50px]">
       
            <Image
              src="/food.png"
              width={16}
              height={16}
              className="border-[#1a8917]"
              alt="icon"
            />
            <Image
              src="/food.png"
              width={16}
              height={16}
              className="border-[#1a8917]"
              alt="icon"
            />
            <Image
              src="/food.png"
              width={16}
              height={16}
              className="border-[#1a8917]"
              alt="icon"
            />
          </div>
        )}
        <ReactQuill
          className='w-[100%] bg-white'
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        <button className="absolute top-0 right-0 py-[10px] px-[20px] border-none bg-[#1a8917] text-white cursor-pointer rounded-md">Publiish</button>
       

      </div>
    </div>
  );
};

export default WritePage;
// .container{
//     position: relative;
//     display: flex;
//     flex-direction: column;
//   }

//   .select{
//     margin-bottom: 50px;
//     padding: 10px 20px;
//     margin-left: 50px;
//     width: max-content;
//   }

//   .editor {
//     display: flex;
//     gap: 20px;
//     height: 700px;
//     position: relative;
//   }

//   .button,
//   .addButton {
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     background-color: transparent;
//     border: 1px solid var(--textColor);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//   }

//   .addButton {
//     border-color: #1a8917;
//   }

//   .add {
//     display: flex;
//     gap: 20px;
//     background-color: var(--bg);
//     position: absolute;
//     z-index: 999;
//     width: 100%;
//     left: 50px;
//   }

//   .input{
//     padding: 50px;
//     font-size: 64px;
//     border: none;
//     outline: none;
//     background-color: transparent;
//     color: var(--textColor);
//   }

//   .input::placeholder{
//     color: #b3b3b1;
//   }

//   .textArea {
//     width: 100%;
//   }

//   .publish{
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     padding: 10px 20px;
//     border: none;
//     background-color: #1a8917;
//     color: white;
//     cursor: pointer;
//     border-radius: 20px;
