"use client";

import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const ThemeToggle = () => {
  const {  toggle ,theme} = useContext(ThemeContext);

  console.log(theme, "--theme");

  return (
    <div
      className="w-10 h-5 rounded-[50px] cursor-pointer flex justify-between items-center relative bg-black"
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
     
    >
      <Image src="/moon.svg" alt="moon" width={14} height={14} />

      <div className="w-[15px] h-[15px] bg-white rounded-[50%] absolute left-1 "  style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }></div>

      <Image src="/sun.svg" className="" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
