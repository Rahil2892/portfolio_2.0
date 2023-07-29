"use client";

import Head from 'next/head';
import Image from 'next/image';
import { IoLogoReact, IoBrowsersOutline } from 'react-icons/io5';
import {
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    SiGithub,
    SiPhp,
    SiCss3,
} from 'react-icons/si';

const ELearning = () => {
    return (
        <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-7xl">
            <main className="min-h-screen max-w-screen ">
                <div className="pt-20 mx-auto ">
                    <div className=" relative sm:w-[95%] md:w-[80%] mx-auto h-40 sm:h-44 md:h-56 lg:h-80 ">
                        <Image
                            src={'/assets/images/SQB_img.png'}
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
                        <SiPhp className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiCss3 className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                    SquadBuilder Website
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    The inception of this project marked the beginning of my journey in web application development.
                     Driven by curiosity and a hunger for knowledge, I delved into the intricacies of creating websites,
                      enthusiastically exploring an array of technologies. Combining basic HTML, CSS, and PHP at the frontend,
                       and implementing a MySQL database at the backend, I set out on this transformative endeavor.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    The application's primary objective was to offer users a platform to log in, engage with live information
                     from previous match weeks, and create fantasy teams of their choice. The freedom to select preferred
                      formations and easy access to the current points table enriched the user experience on the homepage.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    As my maiden project, it holds a special place in my heart. Nonetheless, I humbly acknowledge
                     that as a novice developer, the user interface could have been further refined. This project,
                      however, became a pivotal turning point, as it heightened my self-awareness and instilled a
                       fervent determination to overcome my shortcomings and invest in my growth as a developer.
                    </p>
                    <div className="font-medium text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center justify-center mt-8 mb-16">
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/Rahil2892/SquadBuilder"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                source code{' '}
                            </a>
                        </div>
{/*                        <button className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p
                                onClick={() => {
                                    alert('Youre already on this site 🤨');
                                }}
                            >
                                live website{' '}
                            </p>
                            </button>*/}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ELearning;