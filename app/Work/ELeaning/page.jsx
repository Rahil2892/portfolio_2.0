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
                            src={'/assets/images/workdemo_img.png'}
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
                        Elearning Website
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    For me, this project bears extraordinary importance as it served as a gateway to learning 
                    new skills and honing my web application development abilities. Although it was a 
                    collaborative effort for my college semester, I seized the opportunity to venture into uncharted
                     territories and glean knowledge from the experience. Consequently, I took on the task of 
                     developing a full-stack PHP application, actively participating in both frontend and backend aspects.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    At its core, the project sought to create a dynamic online learning platform catering to students' needs,
                     while also featuring an admin portal exclusively for lecturers. As an added dimension, 
                     we integrated an AI chatbot to facilitate prompt resolution of student queries, elevating the application's
                      utility and innovation.
                    </p>
                    <div className="font-medium text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center justify-center mt-8 mb-16">
                        <div className="hover:text-purple-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <SiGithub className=" w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <a
                                href="https://github.com/Rahil2892/ELearning.github.io"
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