import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-between items-center w-full h-full max-sm:px-4'>
        <Logo />
        <UserMenu />
      </nav>
    </header>
  );
};

export default Navbar;
