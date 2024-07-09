import { GoogleButton } from "@/components/auth/GoogleButton";
import { LoginForm } from "@/components/auth/LoginForm";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const isLoggedIn = (await supabase.auth.getUser()).data
    .user;

  if (isLoggedIn) redirect("/");

  return (
    <div className='h-screen max-w-7xl mx-auto px-5 flex flex-col gap-8 justify-start items-center mt-5 sm:mt-10'>
      <LoginForm />
      <Separator />
      <GoogleButton />
    </div>
  );
}
