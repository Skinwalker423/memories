import BoardCard from "./components/BoardCard";
import Hero from "./components/layout/hero/Hero";

const boards = [
  {
    title: "John Wick Theme",
    id: "0",
    image: "/images/johmwick.jpg",
  },
  {
    title: "Harry Potter Theme",
    id: "1",
    image: "/images/fakeavatar.jpg",
  },
  {
    title: "Delicious Deserts Theme",
    id: "2",
    image: "/images/cheesecake.jpg",
  },
];

export default async function Home() {
  return (
    <div className='w-full h-full flex flex-col bg-neutral-50'>
      <Hero />
      <div className='flex flex-wrap gap-5 justify-center'>
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
