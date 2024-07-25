import React, { useState } from "react";
import { headerLogo, snkrText } from "../assets/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { navLinks, account } from "../constants/index";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full max-sm:border-2 max-sm:relative">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={300} height={30} className="max-sm:w-[150px]"  />
        </a>
        <span className="openbtn max-sm:hidden" onClick={openNav}>
          <GiHamburgerMenu />
        </span>
        <div
          className={`sidenav ${
            isOpen ? "sidenav-open" : "sidenav.closebtn"
          } flex flex-col justify-between items-start`}
        >
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            <AiOutlineCloseCircle />
          </a>
          <ul className="flex-1 flex-col max-lg:hidden">
            {navLinks.map((link) => (
              <li>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col w-full">
            {logIn ? (
              <div className="flex flex-col justify-between items-start">
                <div className="flex justifiy-between items-center m-4 p-2">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    className="rounded-full ml-2"
                    width={50}
                    height={20}
                    alt=""
                  />
                  <h3 className="font-montserrat p-2 ml-2 text-paragraph">
                    Username
                  </h3>
                </div>
                <div className="font-palanquin p-2 ml-5 mt-[-10px] mb-5">
                  <ul>
                    {account.map((acc) => ( 
                      <li>
                        <a href={acc.href}>{acc.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-1 justify-between mx-6 mb-10 mt-2 ">
                <Button
                  label={"Sign Up"}
                  bgColor={"bg-inherit"}
                  textColor={"text-headline"}
                />
                <Button label={"Log In"} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
