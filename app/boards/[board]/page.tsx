import wick from "../../../public/images/johmwick.jpg";
import cheescake from "../../../public/images/cheesecake.jpg";
import girl from "../../../public/images/avatar.webp";
import brisket from "../../../public/images/brisket.jpeg";
import curry from "../../../public/images/curry.jpg";
import potter from "../../../public/images/fakeavatar.jpg";
import skinwalker from "../../../public/images/skinwalker.jpg";
import ramen from "../../../public/images/ramen.jpg";

import Image from "next/image";

const mockImages = [
  {
    alt: "wick",
    src: wick,
  },
  {
    alt: "cheesecake",
    src: cheescake,
  },
  {
    alt: "curry",
    src: curry,
  },
  {
    alt: "skinwalker",
    src: skinwalker,
  },
  {
    alt: "harry potter",
    src: potter,
  },
  {
    alt: "brisket",
    src: brisket,
  },
  {
    alt: "girl",
    src: girl,
  },
  {
    alt: "ramen",
    src: ramen,
  },
];

export default function Page({
  params,
}: {
  params: { board: string };
}) {
  console.log(params);
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
