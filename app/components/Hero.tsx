import React from "react";

const Hero = () => {
  return (
    <section className='flex flex-col justify-between items-center text-center mt-5 gap-5'>
      <h1 className='md:text-6xl text-3xl header-gradient'>
        Memories
      </h1>
      <p className='max-w-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis atque quaerat numquam quae.
        Commodi ea incidunt error est molestiae molestias
        animi quod in, nulla, nobis et consequatur
        repellendus cumque eveniet.
      </p>
      <a
        href='/boards'
        className='bg-yellow-400 px-4 py-3 rounded-xl text-gray-800'
      >
        Browse Memory Boards
      </a>
    </section>
  );
};

export default Hero;
