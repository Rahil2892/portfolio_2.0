"use client";

import Image from "next/image";
// import eclipse1 from "/assets/images/eclipse1.svg";
// import eclipse2 from "/assets/images/eclipse2.svg";


const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <div className="w-full overflow-hidden relative">
        <div className="img flex justify-end absolute -top-12 md:-top-32  -right-[45%] w-full h-full ">
          <div className="relative w-full h-full max-h-[200px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[400px] overflow-hidden">
        <Image src='/assets/images/hand_img_1.png' alt="hand_1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='object-contain w-full h-full flex-center rotate-[235deg]'></Image>
          </div>
       </div>

       <main className="w-full bg-no-repeat flex justify-center sm:min-h-[90vh] min-h-[95vh]">
        <div className=" w-full bg-no-repeat flex flex-col items-center justify-center">
         <h1 className='mb-20 head_text text-center md:leading-tight leading-tight px-6 sm:px-12 lg:px-20'>
          Embarking on a Webventure - Where
           <div className="relative inline-flex mx-2 px-4"><p className="" >Code</p><span className="absolute w-[120%] h-[120%] -top-[10px] -right-3 "><Image width={600} height={400} className="object-fill w-full h-full rotate-[-10deg] " src="/assets/images/eclipse1.svg" alt="ec1" /></span></div>
             and  
           <div className="relative inline-flex mx-2 px-4"><p className="" >Design</p><span className="absolute w-[120%] h-[120%] -top-[10px] -right-3 "><Image width={600} height={400} className="object-fill w-full h-full rotate-[-10deg] " src="/assets/images/eclipse2.svg" alt="ec1" /></span></div>
            Collide!
         </h1>
         <div className=" flex relative mx-auto justify-center items-center w-12  md:my-16 lg:mt-0  ">
           <div onClick={() => { window.scrollTo(0, 520); }} >
             <div id="wrapper-inner">
               <div id="scroll-down">
                <span className="arrow-down"></span>
               </div>
             </div>
            </div>
          </div>
        </div>
       </main>
       <div className="img  flex justify-end absolute -bottom-96  -left-[50%] w-full h-full ">
          <div className="relative w-full h-full max-h-[200px] sm:max-h-[300px] md:max-h-[300px] lg:max-h-[400px] overflow-hidden">
        <Image src='/assets/images/hand_img_2.png' alt="hand_2" fill className='object-contain w-full h-full flex-center rotate-[35deg]'></Image>
          </div>
       </div>
       </div>

     <div className="w-full flex flex-col justify-center  lg:flex-row md:pt-12 lg:space-x-20 items-center lg:justify-between px-none sm:px-16">
     <div className="mx-auto transition-all duration-1000 ease-in-out -mt-8 ">
                            <Image
                                src='/assets/images/img_ed_main.jpg'
                                height={320}
                                width={320}
                                className="object-cover rounded-full select-none drop-shadow-md shadow-purple-200 shadow-2xl h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 border-white border-2"
                                alt="rahil_img_bgr"
                                priority
                            />
                        </div>
        <div className="relative flex flex-col md:mt-12 lg:basis-[55%] space-y-12 ">
          <div className="absolute top-0 right-6 md:right-10 lg:right-64  ">
            <div className="my-div transition ease-in-out duration-500  transform hover:-translate-y-2">
              <Image width={10} height={10} src="/assets/images/logo.svg" alt="Image test" className="my-img  shadow-lg"/>
            </div>
          </div>                
          <div className="flex mt-20  -mb-3 -space-x-0 items-end justify-center lg:justify-start">
              <h2 className="font-space  animate-text bg-gradient-to-r selection:text-gray-500  from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl font-black">
                  Rahil{'_'}
              </h2>
          </div>
          <p className="mt-12 px-10 xs:px-0 text-[0.9rem] xs:text-base md:text-[1.1rem] lg:text-[1.1rem] xl:text-[1.1rem] tracking-[0.02rem] max-w-lg ">
              Web developer, <span className="font-semibold text-blue-400 ">G</span>
              <span className="font-semibold text-red-400">o</span>
              <span className="font-semibold text-yellow-500">o</span>
              <span className="font-semibold text-blue-400">g</span>
              <span className="font-semibold text-green-400">l</span>
              <span className="font-semibold text-red-400">e</span> DSC member,
              UI/UX designer and a lifelong learner based in{' '}
              <span className="font-semibold select-none animate-text bg-gradient-to-br from-[#ff911b] dark:from-[#ff8400] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#43ff36] dark:to-[#12ff02] rounded-full px-2 py-[0.05rem] ">
                  India
              </span>
              with a love for all things colorful & creative. When not coding,
              🎮 gaming and 🍿 anime are my escape plan.
          </p>
        </div>
      </div>

<div className="h-full w-full py-6  flex items-center justify-start flex-wrap mt-8">
  <p className=" font-semibold text-2xl  sm:ml-36 md:ml-36 ml-36  bg-gradient-to-br from-teal-600 to-blue-400  bg-clip-text text-transparent selection:text-gray-700"> Experience </p>
  <div className="h-full w-full py-6 sm:px-36 px-none flex items-center justify-evenly flex-wrap">
    <div className="bg-white w-72 shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2">
      <div className="h-2/4 w-full">
        <img className="w-full h-full object-cover rounded-t-3xl" src="/assets/images/exp_web.png" alt="piña"/>
      </div>
      <div className="w-full h-2/4 p-4">
       <div className="flex space-x-4 ml-2 justify-start text-[0.6rem] font-semibold py-3 px-8 text-gray-500">
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">NextJs</span>
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">Tailwind</span>
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">Typescript</span>
        </div>
        <p className=" hover:text-yellow-600 text-gray-700">
          <span className="text-lg font-semibold uppercase tracking-wide ">Web Development</span>
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">specialized in creating beautiful and user-friendly websites with my skills mainly in ReactJs centered tools. I have added a splash of personality to every project I work on.</p>

      </div>
    </div>
    <div className="bg-white w-72 shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2">
      <div className="h-2/4 w-full">
        <img className="w-full h-full object-cover rounded-t-3xl" src="/assets/images/exp_des.png" alt="piña"/>
      </div>
      <div className="w-full h-2/4 p-3">
       <div className="flex space-x-4 ml-2 justify-start text-[0.6rem] font-semibold py-3 px-8 text-gray-500">
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">Figma</span>
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">Canva</span>
        </div>
        <p className=" hover:text-blue-400 text-gray-700">
          <span className="text-lg font-semibold uppercase tracking-wide ">Designing</span>
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">With a touch of artistic flair and splash of colors a design becomes a work of art, inviting the user on a journey through its purposeful and visually pleasing elements and animations</p>
      </div>
    </div>
    <div className="bg-white w-72 shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-2">
      <div className="h-2/4 w-full">
        <img className="w-full h-full object-cover rounded-t-3xl" src="/assets/images/exp_ml.png" alt="piña"/>
      </div>
      <div className="w-full h-2/4 p-3">
       <div className="flex space-x-4 ml-2 justify-start text-[0.6rem] font-semibold  py-3 px-8 text-gray-500">
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">Python</span>
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">NLTP</span>
          <span className="bg-gradient-to-b  from-teal-200 to-green-200 rounded-full text-center px-2 py-1">Tensorflow</span>
        </div>
        <p className=" hover:text-teal-600 text-gray-700">
          <span className="text-lg font-semibold uppercase tracking-wide ">Machine Learning</span>
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">yes... I have used ChatGPT and copy.ai for my uni assignments.As Machine Learning as my majors, I want to create software like them to leave a positive impact on human life..</p>
      </div>
    </div>

  </div>
</div>
                    


<div className="end text-center px-4 sm:px-44 md:px-64">🌟 I believe in embracing the journey of continuous improvement and learning. I strive to unlock the full potential of every project, turning visions into reality with innovative solutions. 🌟</div>

  </section>
  )
}

export default Home