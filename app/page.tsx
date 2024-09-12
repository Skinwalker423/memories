import Hero from "@/components/layout/hero/Hero";
import BoardCard from "@/components/memory_game/BoardCard";

const boards = [
  {
    title: "Exotic Foods",
    id: 1,
    image: "/images/cheesecake.jpg",
  },
  {
    title: "John Wick Theme",
    id: 2,
    image: "/images/johmwick.jpg",
  },
  {
    title: "Harry Potter Theme",
    id: 5,
    image: "/images/fakeavatar.jpg",
  },
];

export default async function Home() {
  return (
    <div className='w-full h-full flex flex-col bg-neutral-50'>
      <Hero />
      <h2 className='text-center py-4 px-1 text-5xl'>
        Featured Memories
      </h2>
      <div className='flex flex-wrap gap-5 justify-center mb-10'>
        {boards.map(({ title, id, image }) => {
          return (
            <BoardCard
              key={id}
              title={title}
              image={image}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}
