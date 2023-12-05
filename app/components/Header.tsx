import React from "react";

const Header = () => {
  return (
    <header className=' w-full px-10 bg-slate-400'>
      <nav className='flex justify-between items-center w-full py-4'>
        <a href='/'>Logo</a>
        <div className='flex gap-3'>
          <a href={"/boards"}>Boards</a>
          <div>Sign In</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
