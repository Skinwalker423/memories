import { GoogleButton } from "@/components/auth/GoogleButton";
import { LoginForm } from "@/components/auth/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const isLoggedIn = (await supabase.auth.getUser()).data
    .user;

  if (isLoggedIn) redirect("/");

  return (
    <div>
      <LoginForm />
      <GoogleButton />
    </div>
  );
}
