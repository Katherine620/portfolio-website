"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../../public/images/logo.svg";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Skills",
        path: "#skills"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl mg:text-5xl text-white font-semibold">
                    <Image src={Logo} alt="logo" className="h-[80px]" />
                </Link>
                <div className="mobile-menu block md:hidden">
                    { !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            { navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
};

export default NavBar;
