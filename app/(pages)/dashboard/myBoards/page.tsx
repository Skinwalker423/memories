import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getAllUserBoards } from "@/app/actions/memory_boards";
import { getCurrentUser } from "@/app/actions/users";

import CreateBoardForm from "@/components/memory_game/CreateBoardForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, TriangleAlert } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MyBoardMemoryCard } from "@/components/cards/MyBoardMemoryCard";

const MyBoardsPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const boards = await getAllUserBoards(user.id);

  return (
    <div className='max-w-6xl mx-auto p-10'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center'>
        My Boards
      </h1>
      <div className='my-20'>
        <CreateBoardForm />
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
