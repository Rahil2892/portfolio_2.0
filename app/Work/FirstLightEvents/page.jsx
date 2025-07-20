"use client";

import Link from '@node_modules/next/link';
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
                            src={'/assets/images/events-site.png'}
                            fill
                            // placeholder="blur"
                            loading="lazy"
                            alt="work info"
                            className="object-cover rounded-2xl mx-auto border-orange-100 shadow-2xl drop-shadow-md border-2 "
                        />
                    </div>
                    <div className=" mt-6 md:mt-8 lg:mt-10  text-orange-600 flex w-[50%] mx-auto flex-row space-x-16 md:space-x-20 justify-center">
                        <SiJavascript className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiNextdotjs className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                        <SiTailwindcss className="  w-4 h-4  md:h-5   md:w-5 md:rounded-[0.1rem] " />
                    </div>
                </div>
                <div className="flex flex-col  tracking-wide mx-auto mt-4">
                    <h2 className=" mt-3 font-deca font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
                        FirstLightEvents
                    </h2>{' '}
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    This project was different from all my previous ones, which were usually self-inspired ideas or 
                    concepts that had already been on my mind before development. FirstLightEvents is an event 
                    management company that reached out to me for help in building a web platform for their business.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    At first, I thought it would be an easy task since it wasn’t one of those sites that required 
                    both frontend and backend expertise. It didn’t need any complex data storage or database 
                    integration. However, during development, the client requested a contact form — something 
                    that hadn’t been discussed earlier. I took this as a challenge and an opportunity to learn. 
                    I ended up integrating a form using NextAuth and Nodemailer, allowing submissions to be sent 
                    directly to the client’s email.
                    </p>
                    <p className="mt-8 tracking-normal text-sm leading-5 sm:text-base lg:text-lg mx-auto font-normal  text-gray-900">
                    To enhance the user experience, I also implemented animations using Framer Motion, which made 
                    the site more interactive and visually appealing. After completing the site, I supported the client 
                    throughout the hosting process. In the end, I was happy to see my skills being used in a meaningful way, 
                    and I look forward to more such opportunities in the future...✌️
                    </p>
                    <div className="flex font-medium md:grid-cols-2 gap-2 text-xs sm:text-sm lg:text-base text-[450] mx-auto items-center md:gap-x-20 lg:gap-x-28 justify-center mt-8 mb-16">
                        <Link href={'https://www.firstlightevents.in'} className="hover:text-orange-400 flex mx-auto space-x-2 md:space-x-3 items-center">
                            <IoBrowsersOutline className=" w-[0.73rem] h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                            <p>
                                live website{' '}
                            </p>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;