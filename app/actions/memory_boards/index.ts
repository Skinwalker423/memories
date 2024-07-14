"use server";

import { type MemoryBoard } from "@/app/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const fetchBoardById = async (id: string) => {
  const supabase = createClient();
  const { data: memory_board } = await supabase
    .from("memory_board")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (!memory_board) return null;

  return memory_board[0] as MemoryBoard;
};

export const createBoardTitle = async (title: string) => {
  const supabase = createClient();
  const currentUser = await supabase.auth.getUser();

  if (!currentUser.data.user?.id) redirect("/login");

  const { data, error } = await supabase
    .from("memory_board")
    .insert({
      title,
      userId: currentUser.data.user.id,
      images: [],
    });

  if (error) {
    return {
      error: error.message,
    };
  }
  revalidatePath("/dashboard/myBoards", "page");
  return {
    message:
      "successfully created a project. Now add some images!",
  };
};

export const getAllUserBoards = async (userId: string) => {
  const supabase = createClient();
  console.log("userId", userId);
  const { data, error } = await supabase
    .from("memory_board")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error(error.message);
  }

  return data as MemoryBoard[] | null;
};

export async function updateMemory(formData: FormData) {
  const supabase = createClient();
  const image = formData.get("file") as File;
  const userId = formData.get("userId") as string;
  const boardId = formData.get("boardId") as string;

  const imageName = `${Math.random()}-${
    image.name
  }`.replace("/", "");
  const imagePath = `${process.env.SUPABASE_BUCKET_BASE_URL}/${imageName}`;

  const { data: currentBoard, error: imagesError } =
    await supabase
      .from("memory_board")
      .select("images")
      .eq("id", boardId)
      .eq("userId", userId);

  if (imagesError)
    return {
      error: imagesError.message,
    };
  const images = currentBoard[0].images;

  const updatedArray = images.length
    ? [...images, imagePath]
    : [imagePath];

  const { data, error } = await supabase
    .from("memory_board")
    .update({ images: updatedArray })
    .eq("id", boardId)
    .eq("userId", userId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("problem adding image");
  }

  if (image.name) {
    const { error: uploadError } = await supabase.storage
      .from("board_images")
      .upload(imageName, image);

    if (uploadError) {
      console.error(uploadError.message);
      console.log("error", uploadError.message);
      await supabase
        .from("memory_board")
        .update({ images: [...images] })
        .eq("id", boardId)
        .eq("userId", userId)
        .select();

      throw new Error(
        "problem uploading image. Try updating the image again."
      );
    }
  }

  revalidatePath(`/dashboard/myBoards/${boardId}`);
  return {
    message: "successfully added an image",
  };
}
