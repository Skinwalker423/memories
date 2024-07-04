import { signInWithGoogle } from "@/app/actions/users";
import { Button } from "../ui/button";

export function SignIn() {
  const onSubmit = async () => {
    await signInWithGoogle();
  };

  return (
    <form action={onSubmit}>
      <Button type='submit'>Signin with Google</Button>
    </form>
  );
}
