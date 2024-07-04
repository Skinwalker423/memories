"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export const UserMenu = () => {
  const session = useSession();
  return (
    <div className='flex gap-3 items-center z-50'>
      {!session.data ? (
        <button
          className='bg-yellow-500 px-2 py-1 rounded-xl hover:bg-yellow-400'
          onClick={() => signIn()}
        >
          Sign In
        </button>
      ) : (
        <button
          className='bg-neutral-600 px-2 py-1 rounded-xl text-white hover:bg-red-500'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};
