"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";

import { createClient } from "@/utils/supabase/server";
import { loginFormSchema } from "@/lib/schemas";
import { ExtendedUser } from "@/app/types";

export async function login(formData: FormData) {
  const supabase = createClient();

  const formattedFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const formValues = loginFormSchema.safeParse(
    formattedFormData
  );

  if (!formValues.success)
    return { error: formValues.error.issues };

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
  const formDataFormatted = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const formValues = loginFormSchema.safeParse(
    formDataFormatted
  );

  if (!formValues.success) {
    return {
      error: formValues.error.issues,
    };
  }

  const dataValues = {
    email: formValues.data.email,
    password: formValues.data.password,
  };

  const { data, error } = await supabase.auth.signUp(
    dataValues
  );

  if (error || !data.user) {
    redirect(`/auth/error?error=SignUpError`);
  }

  await supabase.from("user").insert({
    id: data.user.id,
  });

  revalidatePath("/", "layout");
  return {
    message:
      "Thank You. Please check your email to confirm your account",
  };
}

export const signInWithGoogle = async () => {
  await signIn("google");
};
export const signOutUser = async () => {
  await signOut();
};

export const getCurrentUser = async () => {
  const supabase = createClient();
  const response = await supabase.auth.getUser();
  return response.data.user;
};

export const getExtendedUser = async (userId: string) => {
  const supabase = createClient();

  const { data } = await supabase
    .from("user")
    .select("*")
    .eq("id", userId)
    .limit(1);

  if (!data) return null;

  return data[0] as ExtendedUser;
};
