import { auth } from "@/auth";
import { SignInWithGoogle } from "@/components/auth/SignIn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Lightbulb, Settings } from "lucide-react";
import Link from "next/link";
import { SignOut } from "@/components/auth/SignOut";

export const UserMenu = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div className='flex gap-3 items-center z-50'>
      {!session?.user ? (
        <SignInWithGoogle />
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image || ""} />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuLabel>
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/boards/create"}>
              <DropdownMenuItem className='flex justify-start items-center gap-3'>
                <Lightbulb /> <span>Create Memory</span>
              </DropdownMenuItem>
            </Link>
            <Link href={"/dashboard"}>
              <DropdownMenuItem className='flex justify-start items-center gap-3'>
                <Settings /> <span>Dashboard</span>
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />
            <DropdownMenuItem className='bg-destructive flex justify-start items-center gap-3 hover:bg-destructive/80'>
              <SignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
