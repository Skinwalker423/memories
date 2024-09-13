"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

interface MemoryGameProps {
  boardImages: string[];
  title: string;
}

export function MemoryGame({
  boardImages,
  title,
}: MemoryGameProps) {
  const [images, setImages] = useState(boardImages);

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
  const [resetting, setResetting] = useState(false);

  const shuffle = (array: string[]) => {
    const newArr = [...array, ...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setImages(newArr);
  };

  const resetGame = () => {
    setResetting(true);
    setCorrectImages([]);
    setSelectedOne(null);
    setSelectedTwo(null);

    shuffle(boardImages);
    setTimeout(() => {
      setResetting(false);
    }, 700);
  };

  const handlePlayAgainClick = () => {
    resetGame();
  };

  useEffect(() => {
    shuffle(boardImages);
  }, []);
  useEffect(() => {
    if (selectedOne !== null && selectedTwo !== null) {
      setEvaluating(true);
      if (images[selectedOne] === images[selectedTwo]) {
        setCorrectImages([
          ...correctImages,
          selectedOne,
          selectedTwo,
        ]);
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
    <div className='w-full h-full flex items-start justify-between'>
      <aside className='w-fit h-screen border-r shadow-md hidden lg:block max-w-[15rem]'>
        <div className='p-4 flex flex-col w-full h-full gap-10'>
          <h1 className='text-2xl font-bold text-secondary text-center text-clip'>
            {title}
          </h1>
          <div className='bg-slate-50 w-full h-40 rounded-lg p-2 text-left'>
            <h3 className='text-xl font-semibold'>Stats</h3>
            <div>Best time:</div>
            <div>guesses:</div>
          </div>
          <button
            onClick={handlePlayAgainClick}
            className='px-4 py-2 bg-green-500 rounded-xl'
          >
            reset game
          </button>
        </div>
      </aside>

      <section className='max-w-6xl relative flex-auto mx-auto w-full mt-5'>
        <div className='w-full grid grid-cols-4 gap-y-6 max-sm:gap-x-2 px-2'>
          {images.length > 0 &&
            images.map((img, index) => {
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
                  className={`relative md:w-40 xl:w-60 w-full max-sm:h-24 rounded-lg h-40 ${
                    resetting
                      ? ""
                      : "transition-all ease-in-out duration-1000"
                  } card ${selected} ${
                    (correct || selected) && "flip"
                  }`}
                  key={index}
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={img}
                    alt={"memory card image"}
                    fill
                    sizes='(min-width: 80px)'
                    className={`object-cover w-full rounded-lg front ${!selected}`}
                  />
                  <div className='absolute top-0 rounded-lg border shadow-sm object-cover w-full h-full back'>
                    <Image
                      src={images[0] || "/next.svg"}
                      alt={"stock"}
                      fill
                      sizes='(min-width: 80px)'
                      className={`absolute top-0 rounded-lg border shadow-sm object-cover w-full h-auto back`}
                    />
                    <div className='absolute inset-0 bg-slate-500/80 z-50' />
                  </div>

                  <div
                    className={`${
                      correct
                        ? "absolute flex justify-center items-center rounded-lg bg-gray-400 bg-opacity-75 inset-0 w-full h-full"
                        : "hidden"
                    }`}
                  ></div>
                </button>
              );
            })}
        </div>
        {correctImages.length === 16 && (
          <div className='absolute z-50 bg-red-800 flex justify-center items-center flex-col gap-2 text-white w-52 h-44 md:w-[600px] md:h-80 left-1/4 top-1/4 rounded-3xl'>
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
    </div>
  );
}
