"use client";
import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import { SocialURLs, EmailInfo } from '../constants/constants';

const EmailSection = () => {
    return (
        <section className="grid md:grid-rows-2 my-12 md:my-12 py-24 gap-4 relative justify-items-center" id="contact">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tertiary-800 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10 justify-items-center -mt-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white my-4 md:my-2">Let&apos;s Connect</h1>
                <p className="text-[#adb7be] mb-4 max-w-md md:text-center">
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open. 
                    Whether you have a question or just want to say hi, I&apos;ll try my best 
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href={SocialURLs.GITHUB} target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href={SocialURLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div className="grid place-items-center -mb-12">
                <a
                    href={EmailInfo.MAIL_TO}
                    className="relative top-0 left-0 bg-tertiary-500 hover:bg-tertiary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transitaion-all duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[8px_8px_0_rgba(217,70,239,0.4)]"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default EmailSection;
