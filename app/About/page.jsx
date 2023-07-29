"use client";
import Image from 'next/image';
import CategoryCard from "@components/CategoryCard"

export default function About() {
    return (
        <>
            <main className="lg:mb-12 lg:px-64 mx-auto  max-w-screen ">
                <div className=" mx-auto pt-8 -pb-10 max-w-7xl">
                    <div className=" mx-auto flex flex-col ">
                        <h2
                            className={`mt-3 sm:mt-4 mb-12 bg-gradient-to-br  from-teal-300 to-blue-500 bg-clip-text text-transparent selection:text-gray-700 items-center mx-auto text-4xl lg:text-5xl xl:text-6xl font-extrabold`}
                        >
                            About
                        </h2>
                        <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 shadow-2xl shadow-purple-200 ">
                            <Image
                                src='/assets/images/img_ed_main.jpg'
                                height={320}
                                width={320}
                                className="object-cover rounded-2xl select-none drop-shadow-md shadow-purple-200 shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2"
                                alt="rahil_img_bgr"
                                priority
                            />
                        </div>
                        <div className="text-center mx-auto mt-8 z-20">
                            <h3 className="mx-auto  font-bold text-xl lg:text-xl xl:text-2xl">
                                Rahil Gavande
                            </h3>
                            <p className="text-gray-500 font-normal text-xs sm:text-sm md:text-md lg:text-lg ">
                                NOOB web dev, PRO-crastinator
                            </p>
                        </div>
                    </div>
                    <CategoryCard />
                    <div className=" text-[1.09rem] md:text-[1.1rem] lg:text-lg xl:text-xl mx-auto font-normal text-gray-900 ">
                        <p className="mt-6 mb-12">
                        Greetings to all 👋, I am Rahil, a proficient web developer
                        and UI-UX designer driven by a profound passion for crafting intuitive
                        and functional applications, with a strong advocacy for clean code principles.
                        Presently, I am pursuing a 4-year Bachelors program - B.E. - and I am based in Mumbai.
                        </p>

                        <ul className=" list-disc mb-8">
                            <span className="text-gray-400 select-none font-semibold mb-1 ">Current</span>
                            <li className="pb-12">
                                During my project internship at the
                                <span className=" bg-gradient-to-tr font-bold from-violet-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent text-xl  mx-1 ">
                                   National Informatics Center (NIC),
                                </span>
                                I have been instrumental in migrating Maharashtra Government Websites
                                to the S3WaaS Framework. My tasks involve content migration, following GIGW guidelines,
                                conducting website audits, and preparing detailed reports. 
                                This experience has honed my skills in web development, project management,
                                and adherence to industry standards.
                            </li>
                            <li className="pb-6">
                                As an esteemed member of
                                <span className=" font-semibold mr-1 ">
                                    <span className=" text-blue-400 ml-1">G</span>
                                    <span className=" text-red-400">o</span>
                                    <span className=" text-yellow-500">o</span>
                                    <span className=" text-blue-400">g</span>
                                    <span className=" text-green-400">l</span>
                                    <span className=" text-red-400 mr-1">e</span>
                                    DSC 
                                </span>
                                for my college campus, I possess the necessary knowledge and expertise to undertake diverse projects. My proficiency spans from developing customized websites to optimizing existing systems and constructing robust machine learning models.
                            </li>
                            <p className="mb-2" >Irrespective of project scale, I consistently bring my best efforts, infused with a healthy dose of creativity. My primary focus lies in constructing dynamic websites, designing systems, composing engineering assignments, and diligently exploring and acquainting myself with emerging technologies.</p>
                        </ul>




                        <p className="text-gray-400 select-none font-semibold mb-1 ">Contact</p>
                        <div>
                        Although I may not have a huge online presence, you can reach me easily through my social media channels.
                        Feel free to contact me via Gmail at
                        <p onClick={() =>
                                navigator.clipboard.writeText('rahilhgavande@gmail.com')
                            } className="inline-block font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select relative w-max group "><span className="px-1 group-hover:text-white underline underline-offset-4 decoration-wavy group-hover:no-underline transition-all duration-1000 ease-out decoration-purple-400 ">rahilhgavande@gmail.com</span><span className="absolute left-0 -bottom-0 w-full h-0 group-hover:h-full transition-all duration-300 ease-out bg-purple-500 -z-10"></span></p>
                            or find me on LinkedIn as{' '}
                            <a href="https://www.linkedin.com/in/rahil-gavande-051602222/"
                                className="inline-block font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select relative w-max group mr-1 "><span className="px-1 group-hover:text-white underline underline-offset-4 decoration-wavy group-hover:no-underline transition-all duration-1000 ease-out decoration-purple-400 ">rahil-gavande</span><span className="absolute left-0 -bottom-0 w-full h-0 group-hover:h-full transition-all duration-300 ease-out bg-purple-500 -z-10"></span></a>
                            Or you can dm me on insta{' '}
                            <a href="https://www.instagram.com/rahil_2892/"
                                className="inline-block font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select relative w-max group mr-1 "><span className="px-1 group-hover:text-white underline underline-offset-4 decoration-wavy group-hover:no-underline transition-all duration-1000 ease-out decoration-purple-400 ">rahil_2892</span><span className="absolute left-0 -bottom-0 w-full h-0 group-hover:h-full transition-all duration-300 ease-out bg-purple-500 -z-10"></span></a>🕊️
                        </div>

                    </div>
                    <div className="flex mx-auto justify-center mt-16 select-none ">
                        ✨
                        <span className="font-black font-app text-lg md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6 ">
                            thanks for visiting
                        </span>
                        ✨
                    </div>
                </div>
            </main>
        </>
    );
}