import {
  signIn,
  signOut,
  getSession,
} from "next-auth/react";

export async function isUserLoggedIn() {
  const session = await getSession().then(
    (data) => data?.user
  );
  console.log(session);
  return session;
}
