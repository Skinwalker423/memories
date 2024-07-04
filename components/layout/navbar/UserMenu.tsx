import { auth, signOut } from "@/auth";
import { SignIn } from "@/components/auth/SignIn";
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
import { Lightbulb, LogOut, Settings } from "lucide-react";
import Link from "next/link";

export const UserMenu = async () => {
  const session = await auth();
  return (
    <div className='flex gap-3 items-center z-50'>
      {!session?.user ? (
        <SignIn />
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image || ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuLabel>
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/"}>
              <DropdownMenuItem className='flex justify-start items-center gap-3'>
                <Lightbulb /> <span>Create Memory</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className='flex justify-start items-center gap-3'>
              <Settings /> <span>Settings</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem className='bg-destructive text-destructive-foreground flex justify-start items-center gap-3 hover:bg-destructive/80'>
              <LogOut />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
