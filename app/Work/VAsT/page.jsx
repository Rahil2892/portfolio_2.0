"use client";

import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import {
    SiNextdotjs,
    SiPython,
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
                            src={'/assets/images/VAsT.png'}
                            fill
                            // placeholder="blur"
                            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
                            loading="lazy"
                            alt="work info"
                            className="rounded-2xl mx-auto border-orange-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10  text-orange-600 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiNextdotjs className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiPython className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        VAsT Website
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    This is the longest I've been away from developing a personal project. Several ideas have started
                    coming to mind, and they could serve as great inspiration for future projects. However, developing VAsT after
                    such a long break has definitely been worth it.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    The project is still in its development phase, but it has already helped me learn many new things,
                    including the use of IndexedDB and how much easier it is to manage data using IDB. In the past, 
                    I had never tried creating a layout for both light and dark themes, and this project motivated me 
                    to experience developing it firsthand.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    There's still a long way to go before the application is complete. Some potential features that might
                    be necessary to integrate include API testing and dynamic reports, among others. Until then, I’m eager
                    to continue building and learning much more from this application.
                    </p>
                    <div className="grid grid-cols font-medium md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <div className="hover:text-orange-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/AnirudhhaSubramanian/VAsT"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
                        <button className="hover:text-orange-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p
                                onClick={() => {
                                    alert('Currently Ongoing ...🤨');
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