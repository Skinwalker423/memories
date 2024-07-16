import React from "react";
import { redirect } from "next/navigation";

import { getAllUserBoards } from "@/app/actions/memory_boards";
import { getCurrentUser } from "@/app/actions/users";

import CreateBoardForm from "@/components/memory_game/CreateBoardForm";

import { MyBoardMemoryCard } from "@/components/cards/MyBoardMemoryCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const MyBoardsPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const boards = await getAllUserBoards(user.id);

  const numberOfBoardsCreated = boards?.length || 0;

  console.log(
    "num boards created and allowed",
    numberOfBoardsCreated
  );

  return (
    <div className='max-w-6xl mx-auto p-10'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center'>
        My Boards
      </h1>
      <div className='my-20'>
        {numberOfBoardsCreated > 1 ? (
          <Alert variant={"destructive"}>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              <p className='w-full flex justify-between items-center'>
                1 Memory board is allowed for all. To create
                additional memories, see our specials!
                <Button asChild>
                  <Link href={"/purchase"}>View Deals</Link>
                </Button>
              </p>
            </AlertDescription>
          </Alert>
        ) : (
          <CreateBoardForm />
        )}
      </div>
      <div className='flex flex-col gap-4 justify-center'>
        <h3 className='text-3xl font-semibold text-'>
          Memories
        </h3>
        <div>
          {boards && (
            <ul className='flex flex-wrap gap-10 justify-center sm:justify-normal'>
              {boards.map((board) => {
                const isGameComplete =
                  board.images.length === 8;
                return (
                  <MyBoardMemoryCard
                    key={board.id}
                    board={board}
                    isGameComplete={isGameComplete}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBoardsPage;
