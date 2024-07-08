import { login, signup } from "@/app/actions/users";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const isLoggedIn = (await supabase.auth.getUser()).data
    .user;

  if (isLoggedIn) redirect("/");

  return (
    <div>
      <form>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          name='email'
          type='email'
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          name='password'
          type='password'
          required
        />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <GoogleButton />
    </div>
  );
}
