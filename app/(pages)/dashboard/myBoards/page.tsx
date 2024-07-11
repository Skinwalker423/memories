import { getAllUserBoards } from "@/app/actions/memory_boards";
import { getCurrentUser } from "@/app/actions/users";
import CreateBoardForm from "@/components/memory_game/CreateBoardForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const MyBoardsPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const boards = await getAllUserBoards(user.id);

  return (
    <div>
      <h1>My Boards</h1>
      <div>
        <h2>Create Memory Project</h2>
        <CreateBoardForm />
      </div>
      <div>
        <h3>Memories</h3>
        <div>
          <ul className='flex flex-wrap gap-3'>
            {boards?.map((board) => {
              return (
                <li
                  className='bg-neutral-50 flex flex-col justify-between'
                  key={board.id}
                >
                  <h4>{board.title}</h4>
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
                      Add Images
                    </Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyBoardsPage;
