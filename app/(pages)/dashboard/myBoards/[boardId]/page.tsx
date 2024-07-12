import { fetchBoardById } from "@/app/actions/memory_boards";
import { getCurrentUser } from "@/app/actions/users";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React from "react";

const MyBoardPage = async ({
  params,
}: {
  params: { boardId: string };
}) => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const boardId = params.boardId;
  console.log("board id", boardId);
  const board = await fetchBoardById(boardId);

  if (!board) return notFound();
  console.log("board", board);
  const numberOfImages = board.images.length;
  const isBoardComplete = numberOfImages === 8;
  console.log("is complete", isBoardComplete);

  return (
    <div className='max-w-6xl mx-auto flex flex-col gap-10'>
      <h1 className='text-8xl text-center'>
        {board.title}
      </h1>
      <p
        className={cn(
          "px-4 py-6 w-full rounded-xl text-lg",
          isBoardComplete ? "bg-green-400" : "bg-yellow-200"
        )}
      >
        {isBoardComplete
          ? "Completed board"
          : `Add more images. Requires ${
              8 - numberOfImages
            } more before it is complete.`}
      </p>
      <div className=''>
        <ul className='flex flex-wrap gap-8'>
          {board.images.map((image, index) => {
            return (
              <li
                key={`${index}-${image}`}
                className='w-[200px] h-[200px] relative'
              >
                <Image
                  src={image}
                  alt={`image number ${index + 1} of ${
                    board.title
                  }`}
                  fill
                  className='object-cover'
                />
              </li>
            );
          })}
          {isBoardComplete && (
            <div className='w-[200px] h-[200px] bg-neutral-200 flex flex-col justify-center items-center rounded-xl'>
              <h3>Add Image</h3>
              <ImageIcon size={100} />
            </div>
          )}
        </ul>
      </div>
      <div className='flex justify-between'>
        <Button asChild size={"lg"} variant={"secondary"}>
          <Link href={`/boards/${board.id}`}>
            View Game
          </Link>
        </Button>
        <Button variant={"destructive"}>Delete Game</Button>
      </div>
    </div>
  );
};

export default MyBoardPage;
