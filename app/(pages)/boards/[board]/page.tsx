import { notFound } from "next/navigation";

import { fetchBoardById } from "@/app/actions/memory_boards";

import { MemoryGame } from "@/components/memory_game/MemoryGame";

export default async function BoardPage({
  params,
}: {
  params: { board: string };
}) {
  const board = await fetchBoardById(params.board);

  if (!board) return notFound();

  if (board.images.length < 8)
    return <p>Not Enough images to form a game </p>;

  return (
    <MemoryGame
      boardImages={board.images}
      title={board.title}
    />
  );
}
