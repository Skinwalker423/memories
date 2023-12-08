import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BoardCardProps {
  image: string;
  title: string;
  id: string;
}

const BoardCard = ({
  image,
  title,
  id,
}: BoardCardProps) => {
  return (
    <li className='w-96 h-96 border bg-slate-300 rounded-2xl flex flex-col items-center max-sm:w-40 max-sm:h-40'>
      <Link
        href={`/boards/${id}`}
        className='relative w-full h-1/2 rounded-2xl'
      >
        <Image
          src={image}
          alt='john wick'
          className='object-cover rounded-t-2xl'
          fill
          sizes="width: '100%'"
        />
        <span className='text-red-500 z-50 absolute'>
          {title}
        </span>
      </Link>
      <p>test</p>
    </li>
  );
};

export default BoardCard;
