import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className='w-full h-[calc(100vh-2.5rem)] pt-10 sm:pt-20 '>
      <div className='absolute inset-0 bg-gradient-black' />
      <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-12 px-5'>
        <h1 className='max-w-6xl h-fit flex flex-wrap justify-start sm:justify-center  text-5xl sm:text-7xl md:text-8xl text-slate-50 font-bold z-50 text-left sm:text-center'>
          <span>Unleash Your &nbsp;</span>
          <span className='text-secondary'> Memories.</span>
          <span>Create.</span>
          <span>Challenge.</span>
        </h1>
        <p className='max-w-lg text-slate-50 z-50 text-base sm:text-lg xl:text-xl'>
          Memory been a beloved pastime for generations.
          Now, you can create and share your customized game
          by using any pictures you like - family photos,
          vacation snapshots, artwork, even memes. Find and
          play themed games that others have designed!
        </p>
        <div className='z-50 space-x-3'>
          <Link
            href='/boards'
            className='bg-secondary px-3 py-3 sm:px-4 rounded-lg text-secondary-foreground text-base sm:text-xl'
          >
            Browse Memories
          </Link>
          <Link
            href='/dashboard'
            className='border border-secondary bg-transparent px-3 py-3 sm:px-4 rounded-lg text-secondary-foreground text-base sm:text-xl'
          >
            Create a memory
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={"/images/hero.jpg"}
          fill
          alt='hero image'
          className='opacity-30 object-cover aspect-auto'
        />
      </div>
      <span className='text-slate-50 z-50 bottom-0 right-0 absolute'>
        Photo by{" "}
        <a href='https://unsplash.com/@jontyson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
          Jon Tyson
        </a>{" "}
        on{" "}
        <a href='https://unsplash.com/photos/a-pile-of-old-photos-and-postcards-sitting-on-top-of-each-other-P2aOvMMUJnY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>
          Unsplash
        </a>
      </span>
    </section>
  );
};

export default Hero;
