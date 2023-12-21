"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

const mockImages = [
  {
    alt: "wick",
    src: "/images/johmwick.jpg",
  },
  {
    alt: "cheesecake",
    src: "/images/cheesecake.jpg",
  },
  {
    alt: "curry",
    src: "/images/curry.jpg",
  },
  {
    alt: "skinwalker",
    src: "/images/skinwalker.jpg",
  },
  {
    alt: "harry potter",
    src: "/images/fakeavatar.jpg",
  },
  {
    alt: "brisket",
    src: "/images/brisket.jpeg",
  },
  {
    alt: "girl",
    src: "/images/avatar.webp",
  },
  {
    alt: "ramen",
    src: "/images/ramen.jpg",
  },
];

export default function Page({
  params,
}: {
  params: { board: string };
}) {
  const [images, setImages] = useState<
    { alt: string; src: string }[]
  >([]);

  const [selectedOne, setSelectedOne] = useState<
    number | null
  >(null);
  const [selectedTwo, setSelectedTwo] = useState<
    number | null
  >(null);
  const [correctImages, setCorrectImages] = useState<
    number[]
  >([]);

  const [evaluating, setEvaluating] = useState(false);

  const shuffle = (
    array: { alt: string; src: string }[]
  ) => {
    const newArr = [...array, ...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setImages(newArr);
  };

  const resetGame = () => {
    setCorrectImages([]);
    setSelectedOne(null);
    setSelectedTwo(null);

    shuffle(mockImages);
  };

  const handlePlayAgainClick = () => {
    resetGame();
  };

  useEffect(() => {
    shuffle(mockImages);
  }, []);
  useEffect(() => {
    if (selectedOne !== null && selectedTwo !== null) {
      setEvaluating(true);
      if (
        images[selectedOne].src === images[selectedTwo].src
      ) {
        console.log("matched!");
        setCorrectImages([
          ...correctImages,
          selectedOne,
          selectedTwo,
        ]);
      } else {
        console.log("incorrect!");
      }

      setTimeout(() => {
        setSelectedOne(null);
        setSelectedTwo(null);
        setEvaluating(false);
      }, 1000);
    }
  }, [selectedOne, selectedTwo]);

  const handleImageClick = (index: number) => {
    selectedOne === null && selectedTwo === null
      ? setSelectedOne(index)
      : setSelectedTwo(index);
  };

  return (
    <main className='max-w-6xl mx-auto w-full h-full flex-col justify-center items-center'>
      <div className='absolute w-60 left-0 bg-neutral-100 h-full hidden md:block'>
        <h3>Sidebar</h3>
        <p>Stats</p>
        <p
          onClick={handlePlayAgainClick}
          className='cursor-pointer'
        >
          reset game
        </p>
      </div>
      <h1 className='text-2xl font-bold text-red-400 text-center'>
        Board title
      </h1>
      <section className='relative'>
        <div className='w-full grid grid-cols-4 gap-y-6 max-sm:gap-x-2 mx-auto px-2'>
          {images.length > 0 &&
            images.map(({ alt, src }, index) => {
              const correct = correctImages.includes(index);

              const selected =
                selectedOne === index ||
                selectedTwo === index
                  ? "border-2 border-rose-500"
                  : "";

              return (
                <button
                  disabled={
                    correct || !!selected || evaluating
                  }
                  className={`relative md:w-60 w-full max-sm:h-24 rounded-lg bg-gray-300 h-40 ${selected} ${
                    correct && ""
                  }`}
                  key={index}
                  onClick={() => handleImageClick(index)}
                >
                  {selected || correct ? (
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes='(min-width: 80px)'
                      className='object-cover w-full h-auto'
                    />
                  ) : (
                    <Image
                      src={"/next.svg"}
                      alt={"stock"}
                      fill
                      sizes='(min-width: 80px)'
                      className='object-cover w-full h-auto'
                    />
                  )}
                  <div
                    className={`${
                      correct
                        ? "absolute flex justify-center items-center bg-gray-400 bg-opacity-75 inset-0 w-full h-full text-red-600"
                        : "hidden"
                    }`}
                  >
                    X
                  </div>
                </button>
              );
            })}
        </div>
        {correctImages.length === 16 && (
          <div className='absolute z-50 bg-red-800 flex justify-center items-center flex-col gap-2 text-white w-52 h-44 md:w-[600px] md:h-80 top-1/3 left-1/4 rounded-3xl'>
            <h2>You won!</h2>
            <button
              className='bg-green-700 text-white '
              onClick={handlePlayAgainClick}
            >
              Play Again?
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
