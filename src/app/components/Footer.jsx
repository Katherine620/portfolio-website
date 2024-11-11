import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";

const Footer = () => {
    return (
        <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span><Image src={Logo} alt="logo" className="h-[50px]" /></span>
                <p className="text-slate-600 text-base font-medium">Copyright 2024. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
