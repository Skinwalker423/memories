import BoardCard from "./components/BoardCard";
import Hero from "./components/Hero";

const boards = [
  {
    title: "John Wick Theme",
    id: 0,
    image: "/images/johnwick.jpg",
  },
  {
    title: "Harry Potter Theme",
    id: 1,
    image: "/images/fakeavatar.jpg",
  },
  {
    title: "Delicious Deserts Theme",
    id: 2,
    image: "/images/cheesecake.jpg",
  },
];

export default async function Home() {
  return (
    <main className='w-full h-full justify-center'>
      <Hero />
      {boards.map(({ title, id, image }) => {
        return <BoardCard />;
      })}
    </main>
  );
}
