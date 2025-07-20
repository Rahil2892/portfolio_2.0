import WorkCard from "@components/WorkCard";
export default function Work() {
    return (
        <>

        <main className="sm:px-10 md:px-12 lg:mb-0 lg:px-48 mx-auto h-full">
                <div className="pt-12 flex flex-col items-center mx-auto">
                    <h2
                        className={` selection:text-black/40  bg-gradient-to-tr to-yellow-400 from-red-500  bg-clip-text text-transparent items-center mx-auto text-4xl lg:text-5xl xl:text-6xl font-extrabold`}
                    >
                        Works
                    </h2>
                    <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg xl:text-xl mb-2 ">
                        From websites with pastel hues to intelligent ML models, infused with little
                        bit of playfulness. So go ahead, and take a look around 💖
                    </p>
                </div>
                <div className="mt-12 mb-16 flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-12 mx-auto items-center w-full md:w-[85%] lg:w-[80%]">
                    <WorkCard
                        title={'VAsT'}
                        link={'/Work/VAsT'}
                        description={`A tool to help developers discover vulnerabilities and generate detailed reports for the same. 🧑‍💻⚠️`}
                        arr={[null, null, null, 1, 1, null, null, null, null, null, 1]}
                        img={'/assets/images/VAsT.png'}
                        alt={"VAsT-website"}
                        
                    />

                    <WorkCard
                        title={'FirstLightEvents'}
                        link={'/Work/FirstLightEvents'}
                        description={`Clean and Beautiful design website for a event companies portfolio. 🌟🎨`}
                        arr={[1, null, null, 1, 1, null, null, null]}
                        img={'/assets/images/events-site.png'}
                        alt={"event-website"}
                        
                    />

                    <WorkCard
                        title={'Portfolio'}
                        link={'/Work/Portfolio'}
                        description={`full of life & colorful website you're seeing right now, is also a work of mine 😁😉`}
                        arr={[1, null, null, 1, 1, null, null, null]}
                        img={'/assets/images/porfolio2_img.png'}
                        alt={"portoflio-website"}
                        
                    />

                     <WorkCard
                        title={'QuizR'}
                        link={'/Work/QuizR'}
                        description={`fun & entertaining quiz game that consists a bit of brainstroming  💭🧠`}
                        arr={[1, null, 1, null, 1, 1, null, null]}
                        img={'/assets/images/QZR_img.png'}
                        alt={"quizr-website"}
                        
                    />

                     <WorkCard
                        title={'ELeaning'}
                        link={'/Work/ELeaning'}
                        description={`An online platform for the students to learn and grow with useful courses 📖🧑‍💻`}
                        arr={[1, null, null, null, null, null, null, null,null,null,null,null,1,null,null,null,1]}
                        img={'/assets/images/workdemo_img.png'}
                        alt={"elearning-website"}
                        
                    />
                    
                    <WorkCard
                        title={'SquadBuilder'}
                        link={'/Work/SquadBuilder'}
                        description={`Create your fantasy using top players based on their live performances 🏆⚽`}
                        arr={[1, null, null, null, null, null, null, null,null,null,null,null,1,null,null,null,1]}
                        img={'/assets/images/SQB_img.png'}
                        alt={"squadbuilder-website"}
                        
                    />
                </div>
            </main>
           
        </>
    );
}