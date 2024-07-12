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

const MyBoardsPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const boards = await getAllUserBoards(user.id);

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-7xl text-center'>My Boards</h1>
      <div className='my-20'>
        <CreateBoardForm />
      </div>
      <div className='space-y-5'>
        <h3 className='text-3xl font-semibold text-primary'>
          Memories
        </h3>
        <div>
          {boards && (
            <ul className='flex flex-wrap gap-10'>
              {boards.map((board) => {
                const isGameComplete =
                  board.images.length === 8;
                return (
                  <li
                    className='bg-neutral-50 flex flex-col justify-between'
                    key={board.id}
                  >
                    <div className='flex items-center justify-between'>
                      <h4>{board.title}</h4>
                      <span>
                        {isGameComplete ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <CheckCircle className='stroke-green-500' />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Completed Memory. Ready to
                                  play.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <TriangleAlert className='stroke-yellow-500' />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Not complete. Need to add
                                  more images
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </span>
                    </div>
                    <Image
                      src={board.images[0] || "/next.svg"}
                      alt={`image representing the memory board of ${board.title}`}
                      width={200}
                      height={200}
                    />
                    <Button asChild>
                      <Link
                        href={`/dashboard/myBoards/${board.id}`}
                      >
                        {isGameComplete
                          ? "Customize"
                          : "Add Images"}
                      </Link>
                    </Button>
                  </li>
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
