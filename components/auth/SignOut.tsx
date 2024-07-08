"use client";

import { LogOut } from "lucide-react";

import { Button } from "../ui/button";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function SignOut() {
  const supabase = createClient();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <Button
      className='w-full space-x-3 bg-destructive flex justify-start items-center gap-3 hover:bg-destructive/80'
      onClick={() => handleSignOut()}
    >
      <LogOut /> <span>Sign Out</span>
    </Button>
  );
}
