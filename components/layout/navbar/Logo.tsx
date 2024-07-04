import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href={"/"}
      className='z-50 flex items-center text-slate-50 text-2xl'
    >
      Logo Text
      <Image
        src={"/next.svg"}
        alt='Memories logo'
        width={100}
        height={48}
      />
    </Link>
  );
};
