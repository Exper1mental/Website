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
        <a href="#hero" className="flex items-center">
          Hero
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
        <a href="#ClemBot" className="flex items-center">
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

// import {
//     Menu,
//     MenuHandler,
//     MenuList,
//     MenuItem,
//     Button,
//   } from "@material-tailwind/react";

// function NavBar() {
//     return (
//         // <!-- component -->
//         // <!-- Menu based on: https://tailwindcomponents.com/component/responsive-navbar-with-dropdown by Cricksu -->
//         // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

//         <header className="fixed w-full text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur" style={{zIndex: `2`}}>
//             <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
//                 <div className="p-4 flex flex-row items-center justify-between">
//                     <a href="#" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">Thomas Delvaux</a>
//                     {/* From: https://www.material-tailwind.com/docs/react/menu */}
//                     <Menu
//                         // animate={{
//                         //     mount: { y: 0 },
//                         //     unmount: { y: 25 },
//                         // }}
//                         placement="bottom-start"
//                         // className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
//                         >
//                         <MenuHandler>
//                             <Button variant="text" ripple={true} className="!text-white">Menu</Button>
//                         </MenuHandler>
//                         <MenuList className="transition backdrop-blur duration-300 border-none bg-transparent text-white bg-black bg-opacity-50 backdrop-filter">
//                             <nav>
//                                 <MenuItem className="transition duration-300 !text-white hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#hero">Hero</MenuItem>
//                                 <MenuItem className="transition duration-300 !text-white hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#about">About</MenuItem>
//                                 <MenuItem className="transition duration-300 !text-white hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#ClemBot">ClemBot</MenuItem>
//                             </nav>
//                         </MenuList>
//                     </Menu>
                    
//                     {/* <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @Click="open = !open"> */}
//                     {/* <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick="open = !open">
//                         <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
//                             <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
//                             <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
//                         </svg>
//                     </button> */}
//                 </div>
//                 {/* <nav :className="{'flex': open, 'hidden': !open}" className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"> */}
//                 <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
//                     <a className="transition duration-300 px-4 py-2 mt-2 text-sm font-light bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#hero">Hero</a>
//                     <a className="transition duration-300 px-4 py-2 mt-2 text-sm font-light bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#about">About</a>
//                     <a className="transition duration-300 px-4 py-2 mt-2 text-sm font-light bg-transparent rounded-lg md:mt-0 md:ml-4 hover:bg-gray-200 hover:bg-opacity-20 focus:bg-gray-200 focus:bg-opacity-10 focus:outline-none focus:shadow-outline" href="#ClemBot">ClemBot</a>  
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default NavBar;