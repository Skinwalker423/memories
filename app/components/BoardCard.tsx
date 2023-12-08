import React from "react";
import Image from "next/image";

interface BoardCardProps {
  image: string;
  title: string;
}

const BoardCard = ({ image, title }: BoardCardProps) => {
  return (
    <div className='w-96 h-96 border bg-slate-300 flex flex-col items-center'>
      <div className='relative w-full h-full rounded-2xl'>
        <Image
          src={image}
          alt='john wick'
          className='object-cover'
          fill
          sizes="width: '100%'"
        />
        <span className='text-red-500 z-50 absolute'>
          {title}
        </span>
      </div>
    </div>
  );
};

export default BoardCard;
