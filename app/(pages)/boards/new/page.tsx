import CreateBoardForm from "@/components/memory_game/CreateBoardForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const BoardCreatePage = async () => {
  const supabase = createClient();

  const response = await supabase.auth.getUser();

  const isLoggedIn = response.data.user;

  if (!isLoggedIn) redirect("/login");

  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <h1 className='text-center text-3xl'>
        Create New Board
      </h1>
      <CreateBoardForm />
    </div>
  );
};

export default BoardCreatePage;
