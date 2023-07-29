import React from 'react'
import Link from "next/link";
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



const Footer = () => {
  return (
      <footer className=" flex flex-col sm:flex-row md:flex-row w-full h-full bg-white/30  box-border justify-around items-center mx-auto pt-6 pb-12 backdrop-blur-sm select-none mt-6">
         <div className=" ">
            <ul>
                <li><Link href='/Tools' className='flex flex-center'>⚒️ Tools</Link></li>
                <li><Link href='/Work' className='flex flex-center'>🚀 Works</Link></li>
                <li><Link href='/Goals' className='flex flex-center'>📍 Goals</Link></li>
                <li><Link href='/About' className='flex flex-center'>😄 About Me</Link></li>
            </ul>
         </div>
         <div className=" box-border mix-blend-luminosity shadow-xl rounded-lg p-6 grid grid-cols-2 gap-8  px-20 py-10">

                <Link href='https://www.linkedin.com/in/rahil-gavande-051602222/'  className='flex flex-center'><FaLinkedin />LinkedIn</Link>
                <Link href='https://github.com/Rahil2892' className='flex flex-center'><FaGithub />GitHub</Link>
                <Link href='mailto:rahilhgavande@gmail.com' className='flex flex-center'><MdOutlineMail />Email</Link>
                <Link href='https://www.instagram.com/rahil_2892/' className='flex flex-center'><FaInstagram />Instagram</Link>
           
         </div>
       </footer>

  )
}

export default Footer