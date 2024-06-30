"use server";

import { type MemoryBoard } from "@/app/types";
import supabase from "@/db/supabase";

export const fetchBoardById = async (id: string) => {
  const { data: memory_board } = await supabase
    .from("memory_board")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (!memory_board) return null;

  console.log("memory board", memory_board);
  return memory_board[0] as MemoryBoard;
};
