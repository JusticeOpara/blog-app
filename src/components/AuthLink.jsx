// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { signOut, useSession } from "next-auth/react";

// const AuthLink = () => {
//   const [open, setOpen] = useState(false);
//   const {status} = useSession()
//  console.log(status,"--status")

//   return (
//     <>
//       {status === "unauthenticated" ? (

//         <Link href="/login" className="cursor-pointer">Login</Link>

//       ) : (
//         <>
//           <Link href="/write" className="cursor-pointer">Write</Link>
//           <span className="cursor-poointer" onClick={signOut}>Logout</span>
//         </>
//       )}

//       <Image src="bar.svg" className="hidden max-sm:block" height={20} width={20} alt="navbar" onClick={()=> setOpen(!open)} />
//       {open && (
//         <div className="absolute top-[100px] left-0 h-[100vh] w-[100%] flex flex-col justify-center items-center gap-[50px] font-[36px] ">
//           <Link href="/" className="text-base font leading-normal">
//             Home
//           </Link>
//           <Link href="/" className="text-base leading-normal">
//             Contact
//           </Link>
//           <Link href="/" className="text-base leading-normal">
//             About
//           </Link>

//           {status === "notauthenticated" ? (
//             <Link href="/login" className="cursor-pointer">Login</Link>

//           ) : (
//             <>
//               <Link href="/write" className="">Write</Link>
//               <span>Logout</span>
//             </>
//           )}
//         </div>
//       )}

//     </>
//   );
// };

// export default AuthLink;




"use client";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
  console.log("---status",status)

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <span className=" " onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className=" " onClick={() => setOpen(!open)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      {open && (
        <div className="">
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;