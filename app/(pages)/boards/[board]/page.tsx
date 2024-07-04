import { notFound } from "next/navigation";

import { fetchBoardById } from "@/app/actions/memory_boards";

import { mockImages } from "@/app/constants";
import { MemoryGame } from "@/components/memory_game/MemoryGame";

export default async function BoardPage({
  params,
}: {
  params: { board: string };
}) {
  const board =
    process.env.NODE_ENV === "production"
      ? await fetchBoardById(params.board)
      : mockImages;

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
