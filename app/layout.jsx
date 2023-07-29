import "@styles/global.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
// import { Inter ,Plus_Jakarta_Sans, Urbanist } from "@next/font/google"

export const metadata = {
    title:"Rahil Gavande",
    description:"A portfolio to showcase my skills and projects.",
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className={`main font-geo  `}>
                <div className='gradient flex w-full grow h-full justify-center mx-auto sm:pt-8' />
            </div>
            <Nav />
             <main className='app w-full '>   
                {children}
             </main>
             <Footer/>
        </body>
    </html>
  )
}

export default RootLayout;