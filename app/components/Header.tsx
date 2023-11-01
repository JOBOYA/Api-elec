import Link from "next/link";
import {UserButton, auth } from "@clerk/nextjs";

const Header = () => {
const { userId} = auth()


  return (
   <nav className="bg-blue-200 py-4 px-6 flex items-center justify-between mb-5 shadow">
  <div className="container-fluid">
    <Link href="/">
      <div className="navbar-brand">Api-elec</div>
    </Link>
</div>
<div className="text-white flex items-center">
  {!userId && (
    <>
       <Link href="/sign-in" className="text-gray-500 hover:text-white m-4">
    S'identifier
  </Link>
  <Link href="/sign-up" className="text-gray-500 hover:text-white">
    S'inscrire
  </Link>
    </>
  )}
  {userId && (
    <>
    <Link href="profile" className="text-gray-500 hover:text-white m-4">
      Profile
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