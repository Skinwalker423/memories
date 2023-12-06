"use client";

import {
  signIn,
  signOut,
  getSession,
} from "next-auth/react";

import { isUserLoggedIn } from "@/utils";

const Header = () => {
  const session = isUserLoggedIn();
  console.log(session);
  return (
    <header className=' w-full px-10 bg-slate-400'>
      <nav className='flex justify-between items-center w-full py-4'>
        <a href='/'>Logo</a>
        <div className='flex gap-3'>
          <a href={"/boards"}>Boards</a>
          {!session ? (
            <button
              className='bg-green-400 px-4 py-2 rounded-xl hover:bg-green-600'
              onClick={() => signIn()}
            >
              Sign In
            </button>
          ) : (
            <button
              className='bg-red-400 px-4 py-2 rounded-xl hover:bg-red-500'
              onClick={() => signOut()}
            >
              Sign Out,
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
