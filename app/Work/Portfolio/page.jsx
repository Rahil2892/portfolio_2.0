"use client";

import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import {
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiGithub,
} from 'react-icons/si';

const Portfolio = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-80 ">
                        <Image
                            src={'/assets/images/porfolio_img.png'}
                            fill
                            // placeholder="blur"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            loading="lazy"
                            alt="work info"
                            className="rounded-2xl mx-auto border-purple-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10  text-purple-800 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiJavascript className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <IoLogoReact className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiNextdotjs className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        Portfolio Website
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    For far too long, I procrastinated on the idea of having a professional portfolio,
                    oblivious to its potential in showcasing my skills and experiences to potential 
                    employers and clients. A revelation finally struck, prompting me to wholeheartedly
                    dedicate myself to crafting a portfolio website that would aptly highlight my abilities and achievements.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    However, the journey of developing a portfolio website turned out to be more intricate than
                    I initially anticipated. I invested substantial time in researching and experimenting with 
                    various technologies and frameworks, aiming to find the ideal combination that aligns with my needs
                    and preferences. My goal was to create a visually appealing and user-friendly website.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    The outcome was a portfolio website that, despite its imperfections, I am genuinely proud of. 
                    It may appear a bit unpolished, yet it effectively showcases my past projects, skills, and experiences
                    in an organized and coherent manner. With this portfolio, I am confident that it will bolster my prospects
                    in finding internships and job opportunities in the future.
                    </p>
                    <div className="grid grid-cols font-medium md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/yasier-ansari/portfolio-website"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <button className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p
                                onClick={() => {
                                    alert('Youre already on this site 🤨');
                                }}
                            >
                                live website{' '}
                            </p>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;