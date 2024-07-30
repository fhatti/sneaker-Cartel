import React, { useState, useContext } from 'react';
import { headerLogo } from "../assets/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { navLinks, account } from "../constants/index";
import Button from "./Button";
import { Link } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import User from '../models/User';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser } = useContext(AuthContext); 
    const userInstance = new User(); 

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    const handleSignOut = async () => {
        try {
            await userInstance.signOutUser();
            console.log("User signed out successfully!");
            setUser(null); 
            window.location.href = '/homepage'; 
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full max-sm:border-2 max-sm:relative">
            <nav className="flex justify-between items-center max-container">
                <Link to="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={250}
                        height={30}
                        className="max-sm:w-[150px]"
                    />
                </Link>
                <span className="openbtn max-sm:hidden" onClick={openNav}>
                    <GiHamburgerMenu />
                </span>
                <div
                    className={`sidenav ${isOpen ? "sidenav-open" : "sidenav-close"} flex flex-col`}
                >
                    <a href="#!" className="closebtn" onClick={closeNav}>
                        <AiOutlineCloseCircle />
                    </a>
                    <ul className="flex-1 flex-col max-lg:hidden">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={`${link.href}`}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col w-full">
                        {user ? (
                            <div className="flex flex-col justify-between items-start mb-10">
                                <div className="flex justify-between items-center m-4 p-2">
                                    <img
                                        src={user.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                                        className="rounded-full ml-6"
                                        width={50}
                                        height={50}
                                        alt="User"
                                    />
                                    <h3 className="font-montserrat p-2 ml-2 text-paragraph">
                                        {user.displayName || user.email || "Username"}
                                    </h3>
                                </div>
                                <div className="font-palanquin p-2 ml-5 mt-[-10px] mb-5">
                                    <ul>
                                        {account.map((acc) => (
                                            <li key={acc.label}>
                                                <Link to={acc.href}>{acc.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                               <div className='max-w-[100px] m-auto mb-5'>
                               <button onClick={handleSignOut} className="text-2xl text-button hover:cursor-pointer hover:underline">
                                    Sign Out
                                </button>
                               </div>
                            </div>
                        ) : (
                            <div className="inline-flex justify-between mb-10 ">
                                <Button
                                    label="Sign Up"
                                    bgColor="bg-inherit"
                                    textColor="text-headline"
                                    to="/signUp"
                                  
                                />
                                <Button
                                    label="Log In"
                                    bgColor="bg-inherit"
                                    textColor="text-headline"
                                    to="/login"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
