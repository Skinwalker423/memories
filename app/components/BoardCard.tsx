import React from "react";
import Image from "next/image";

const BoardCard = () => {
  return (
    <div className='max-w-2xl h-auto'>
      <Image
        src={"/images/johnwick.jpg"}
        alt='john wick'
        className='object-contain w-10 h-10'
        fill
      />
    </div>
  );
};

export default BoardCard;
