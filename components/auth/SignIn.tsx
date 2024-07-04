import Link from "next/link";
import { Button } from "../ui/button";

export function SignInWithGoogle() {
  // const onSubmit = async () => {
  //   "use server";
  //   await signIn();
  // };

  return (
    <Button className='bg-yellow-500' type='submit'>
      <Link href={"/auth/login"}>Signin</Link>
    </Button>
  );
}
