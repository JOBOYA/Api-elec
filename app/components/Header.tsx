import Link from "next/link";
import {UserButton, auth } from "@clerk/nextjs";

const Header = () => {
const { userId} = auth()


  return (
<nav className="bg-white bg-opacity-60 py-4 px-6 flex items-center justify-between mb-5 shadow fixed top-0 inset-x-0 backdrop-blur-lg z-10">

  <div className="container-fluid">
    <Link href="/">
      <div className="navbar-brand">Api-elec</div>
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
      Rechercher une référence
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