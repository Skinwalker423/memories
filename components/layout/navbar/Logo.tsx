import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href={"/"} className='z-50 flex items-center'>
      <Image
        src={"/memories.png"}
        alt='Memories logo'
        className='w-auto h-10 sm:h-12'
        width={200}
        height={64}
      />
    </Link>
  );
};
