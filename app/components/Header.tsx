import Link from "next/link";
import Image from "next/image";
import {UserButton, auth } from "@clerk/nextjs";



const Header = () => {
const { userId} = auth()




  return (
<nav className="bg-white bg-opacity-60  px-6 flex items-center justify-between mb-5 shadow fixed top-0 inset-x-0 backdrop-blur-lg z-10">

  <div className="container-fluid">
    <Link href="/">
     
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={50}
          layout="intrinsic"
        />
      
     
    </Link>
</div>
<div className="text-white flex items-center">
  {!userId && (
    <>
       <Link href="/sign-in" className="text-gray-500 hover:text-slate-800 m-4">
    S'identifier
  </Link>
  <Link href="/sign-up" className="text-gray-500 hover:text-slate-800">
    S'inscrire
  </Link>
    </>
  )}
  {userId && (
    <>
    <Link href="profile" className="text-gray-500 hover:text-slate-800 m-4">
      Profile
      </Link>
      <Link href="/dashboard" className="text-gray-500 hover:text-slate-800 m-4">
     Nos références
      </Link>
      </>
      )}
 <div className="ml-auto">
    <UserButton afterSignOutUrl="/"/>
 </div>
</div>
    </nav>
  );
};

export default Header;