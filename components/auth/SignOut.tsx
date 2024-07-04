"use client";

import { LogOut } from "lucide-react";

import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <Button
      className='w-full space-x-3 bg-destructive flex justify-start items-center gap-3 hover:bg-destructive/80'
      onClick={() => signOut()}
    >
      <LogOut /> <span>Sign Out</span>
    </Button>
  );
}
