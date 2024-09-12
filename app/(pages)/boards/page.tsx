import { fetchToPBoards } from "@/app/actions/memory_boards";
import BoardCard from "@/components/memory_game/BoardCard";
import React from "react";

const AllBoardsPage = async () => {
  const boards = await fetchToPBoards();

  if (!boards)
    return (
      <p>No Boards available right now. Check back later</p>
    );

  return (
    <div className='flex flex-wrap gap-5 justify-center my-10'>
      {boards.map(({ title, id, images }) => {
        return (
          <BoardCard
            key={id}
            title={title}
            image={images[0]}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default AllBoardsPage;
