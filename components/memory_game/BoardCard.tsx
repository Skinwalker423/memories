import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BoardCardProps {
  image: string;
  title: string;
  id: number;
}

const BoardCard = ({
  image,
  title,
  id,
}: BoardCardProps) => {
  return (
    <li className='w-40 h-40 lg:w-96 lg:h-96  border bg-neutral-200 shadow-md rounded-2xl flex flex-col items-center max-sm:w-40 max-sm:h-40 overflow-hidden'>
      <Link
        href={`/boards/${id}`}
        className='relative w-full h-full rounded-2xl'
      >
        <Image
          src={image || "/images/skinwalker.jpg"}
          alt='john wick'
          className='object-cover rounded-t-2xl transition-transform hover:scale-105'
          fill
          sizes="width: '100%'"
        />
      </Link>
      <p className='text-base lg:text-xl py-3 text-center bg-slate-100/50'>
        {title}
      </p>
    </li>
  );
};

export default BoardCard;
