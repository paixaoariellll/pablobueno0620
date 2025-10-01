import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Logomarca from "../start/logomarca";

const Navbar04Page = () => {
  return (
    <nav className='fixed z-50 top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full'>
      <div className='h-full flex items-center justify-between mx-auto px-6'>
        <Logomarca />

        <NavMenu className='hidden lg:block' />

        <div className='flex items-center gap-3'>
          <div className='lg:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
