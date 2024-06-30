import { fetchBoardById } from "@/app/actions/memory_boards";
import { MemoryGame } from "@/app/components/memory_game/MemoryGame";
import { notFound } from "next/navigation";

export default async function BoardPage({
  params,
}: {
  params: { board: string };
}) {
  const board = await fetchBoardById(params.board);
  console.log("board", board?.images);

  if (!board) return notFound();

  if (board.images.length < 8)
    return <p>Not Enough images to form a game </p>;

  <MemoryGame
    boardImages={board.images}
    title={board.title}
  />;
}
