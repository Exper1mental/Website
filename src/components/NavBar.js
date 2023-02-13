import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#hero" className="flex items-center transition duration-300 px-4 py-2 -m-2 bg-transparent rounded-lg hover:bg-gray-300 hover:bg-opacity-20 focus:bg-gray-300 focus:bg-opacity-10 focus:outline-none focus:shadow-outline">
          Hero
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center transition duration-300 px-4 py-2 -m-2 bg-transparent rounded-lg hover:bg-gray-300 hover:bg-opacity-20 focus:bg-gray-300 focus:bg-opacity-10 focus:outline-none focus:shadow-outline">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#ClemBot" className="flex items-center transition duration-300 px-4 py-2 -m-2 bg-transparent rounded-lg hover:bg-gray-300 hover:bg-opacity-20 focus:bg-gray-300 focus:bg-opacity-10 focus:outline-none focus:shadow-outline">
          ClemBot
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className="mx-auto fixed left-1/2 -translate-x-1/2 max-w-screen-xl px-4 lg:px-8 py-4 fix-corners backdrop-filter backdrop-blur text-white bg-black bg-opacity-50 border-none">
      <div className="container mx-auto flex items-center justify-between !text-white sticky">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Thomas Delvaux</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            <a href="https://www.linkedin.com/in/thomas-delvaux/"
                rel="noopener noreferrer"
                target="_blank">Connect</a>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <a href="https://www.linkedin.com/in/thomas-delvaux/"
                rel="noopener noreferrer"
                target="_blank">Connect</a>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}