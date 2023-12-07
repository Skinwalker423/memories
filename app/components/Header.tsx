"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Header = ({
  userSession,
}: {
  userSession: Session | null;
}) => {
  const session = useSession();
  console.log("user session", userSession);
  return (
    <header className=' w-full px-10 nav-gradient'>
      <nav className='flex justify-between items-center w-full py-4'>
        <a href='/'>Logo</a>
        <div className='flex gap-3 items-center'>
          <a href={"/boards"}>Boards</a>
          {!session.data && !userSession ? (
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
