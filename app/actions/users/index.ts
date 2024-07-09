"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";

import { createClient } from "@/utils/supabase/server";
import { loginFormSchema } from "@/lib/schemas";

export async function login(formData: FormData) {
  const supabase = createClient();

  const formValues = loginFormSchema.safeParse(formData);

  if (!formValues.success)
    return { error: formValues.error.message };

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formValues.data.email,
    password: formValues.data.password,
  };

  const { error } = await supabase.auth.signInWithPassword(
    data
  );

  if (error) {
    redirect("/auth/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/auth/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export const signInWithGoogle = async () => {
  await signIn("google");
};
export const signOutUser = async () => {
  await signOut();
};
