"use client";
import { useState } from "react";

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
  console.log(params);

  const [images, setImages] = useState<
    { alt: string; src: string }[]
  >([]);

  const shuffle = (
    array: { alt: string; src: string }[]
  ) => {
    const newArr = [...array, ...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setImages(shuffle);
    return newArr;
  };

  return (
    <main className='container mx-auto w-full h-screen flex-col justify-center items-center border'>
      <h1>Board title</h1>
      <section>
        <div className='w-full h-full grid grid-cols-4'>
          {mockImages.map(({ alt, src }) => {
            return (
              <div key={alt}>
                <Image
                  src={src}
                  alt={alt}
                  width={50}
                  height={50}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
