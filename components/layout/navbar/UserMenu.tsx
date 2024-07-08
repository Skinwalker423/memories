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
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";

export const UserMenu = async () => {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  return (
    <div className='flex gap-3 items-center z-50'>
      {!user.data.user ? (
        <Button asChild>
          <Link href={"/login"}>Sign In</Link>
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={
                  user.data.user?.user_metadata?.avatar_url
                    ? user.data.user.user_metadata
                        .avatar_url
                    : "/images/fakeavatar.jpg" || ""
                }
              />
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

("http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
("http://localhost:3000/auth/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
