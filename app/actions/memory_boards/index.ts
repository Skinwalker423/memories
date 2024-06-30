"use server";

import supabase from "@/db/supabase";

import { type MemoryBoard } from "@/app/types";

export const fetchBoardById = async (id: string) => {
  const { data: memory_board } = await supabase
    .from("memory_board")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (!memory_board) return null;

  return memory_board[0] as MemoryBoard;
};
