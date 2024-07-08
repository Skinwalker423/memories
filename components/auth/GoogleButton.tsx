"use client";

import { createClient } from "@/utils/supabase/client";
import React from "react";
import { Button } from "../ui/button";

export const GoogleButton = (props: {
  nextUrl?: string;
}) => {
  const supabase = createClient();
  const handleGoogleLogin = async () => {
    const { data, error } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: `${
            location.origin
          }/auth/callback?next=${props.nextUrl || ""}`,
        },
      });

    console.log("data", data);
  };
  return (
    <Button onClick={handleGoogleLogin}>
      Google SignIn
    </Button>
  );
};
