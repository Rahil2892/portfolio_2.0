"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useRef, useEffect } from "react";
import {
    LuGraduationCap,
    LuBookOpen,
    LuVideo,
    LuInfo,
    LuChevronDown,
    LuListMinus,
    LuGitPullRequest,
    LuMenu,
    LuX,
    LuHome,
    LuUserCog,
} from "react-icons/lu";
import { useRouter } from "next/navigation";


export default function Header() {
    const [menuBar, setMenuBar] = useState(false);
    const mobileRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

	const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('rahil_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'rahil-resume-2.pdf';
                alink.click();
            })
        })
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header className={` head ${isScrolled ? ' scrolled  ' : ' top-0 w-full '} `}>
                <div className=" childHeader ">
                    <Link href="/" className="text-xl  lg:text-2xl font-black font-sat select-none">
                    😎 flopG
                    </Link>
                    <div className="mobParent">
                        <button
                            className="transition-all z-50 duration-150 ease-in"
                            onClick={() => setMenuBar(!menuBar)}
                        >
                            {!menuBar && <LuMenu className="w-6 h-6 xs:w-7 xs:h-7" />}
                        </button>
                        {menuBar && (
                            <div className=" mob ">
                                <button
                                    className=" z-[99] absolute top-12 right-4 transition-all  duration-150 ease-in"
                                    onClick={() => setMenuBar(!menuBar)}
                                >
                                    <LuX className="w-9 h-9 xs:w-10 xs:h-10 stroke-2 fill-gray-700 text-gray-800 border-2 rounded-lg border-slate-500 p-2 " />
                                </button>
                                <div
                                    ref={mobileRef}
                                    className=" mobRef "
                                >
                                    <div className=" mobChild ">
                                        <Link
                                            href={"/"}
                                            onClick={() => setMenuBar(false)}
                                            className=" mobLink  "
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            href={"/About"}
                                            onClick={() => setMenuBar(false)}
                                            className=" mobLink  "
                                        >
                                            About
                                        </Link>
                                        <Link
                                            href={"/Tools"}
                                            onClick={() => setMenuBar(false)}
                                            className=" mobLink  "
                                        >
                                            Tools
                                        </Link>
                                        <Link
                                            href='/Work'
                                            onClick={() => setMenuBar(false)}
                                            className=" mobLink  "
                                        >
                                            Works
                                        </Link>
                                        <Link
                                            href='/Goals'
                                            onClick={() => setMenuBar(false)}
                                            className=" mobLink  "
                                        >
                                            Goals
                                        </Link>
                                        <b onClick={onButtonClick} className="resume cursor-pointer">Resume</b>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className=" mdParent ">

                        <Link
                            href={"/About"}
                            className=" mobLink  "
                        >
                            About
                        </Link>
                        <Link
                            href={"/Tools"}
                            className=" mobLink  "
                        >
                            Tools
                        </Link>
                        <Link
                            href={"/Work"}

                            className=" mobLink  "
                        >
                            Works
                        </Link>
                        <Link
                            href={"/Goals"}
                            className=" mobLink  "
                        >
                            Goals
                        </Link>
                        <b onClick={onButtonClick} className="resume cursor-pointer ">Resume</b>
                    </div>
                </div>
            </header>
        </>
    );
}