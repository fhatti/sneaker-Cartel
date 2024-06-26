import React from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full mb-10 sm:max-h-svh">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={200} height={30} />
        </a>
        <h1></h1>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-xl  text-headline font-normal hover:text-paragraph hover:font-bold hover:cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger-icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
