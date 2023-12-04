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

  useEffect(() => {
    shuffle(mockImages);
  }, []);
  useEffect(() => {
    console.log("selected 1", selectedOne);
    console.log("selected 2", selectedTwo);
    if (selectedOne !== null && selectedTwo !== null) {
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

      setSelectedOne(null);
      setSelectedTwo(null);
      console.log("correct length", correctImages.length);
      if (correctImages.length === 16) {
        console.log("you won!");
      }
    }
  }, [selectedOne, selectedTwo]);

  const handleImageClick = () => {};

  console.log("correct length", correctImages.length);

  return (
    <main className='container mx-auto w-full h-screen flex-col justify-center items-center border'>
      <h1>Board title</h1>
      <section>
        <div className='w-full h-full grid grid-cols-4 gap-1 px-1'>
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
                  disabled={correct || !!selected}
                  className={`relative w-full max-sm:h-24 h-52 flex gap-1 ${selected} ${
                    correct && ""
                  }`}
                  key={index}
                  onClick={() =>
                    selectedOne === null &&
                    selectedTwo === null
                      ? setSelectedOne(index)
                      : setSelectedTwo(index)
                  }
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes='(min-width: 80px)'
                    className='object-cover w-full h-auto'
                  />
                  <div
                    className={`${
                      correct
                        ? "absolute bg-gray-400 bg-opacity-75 inset-0 w-full h-full"
                        : "hidden"
                    }`}
                  >
                    X
                  </div>
                </button>
              );
            })}
        </div>
      </section>
    </main>
  );
}
