import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const BoardCreatePage = async () => {
  const supabase = createClient();

  const response = await supabase.auth.getUser();

  const isLoggedIn = response.data.user;

  if (!isLoggedIn) redirect("/login");

  return <div>BoardCreatePage</div>;
};

export default BoardCreatePage;
