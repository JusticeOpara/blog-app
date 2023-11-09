import React from "react";
import Link from "next/link";

const AuthLink = () => {
  const status = "authenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLink;
