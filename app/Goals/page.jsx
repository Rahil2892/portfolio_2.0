"use client";
import { useState } from 'react';

const Goals = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {};
  return (
    <>
      <main className='mt-12 mb-8'>
        <div className="text-center mb-5">
         <h2 className={`mt-3 sm:mt-4 mb-12 bg-gradient-to-br   from-purple-400 via-pink-500 to-white  bg-clip-text text-transparent selection:text-gray-700 items-center mx-auto text-4xl lg:text-5xl xl:text-6xl font-extrabold`}>Goals</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-40vw md:w-auto p-5 md:p-20 bg-white shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-1 hover:-translate-y-1">
            <b className="text-[#aa579b] text-lg">Tech Goals</b>
            <ul className="list-disc list-inside mt-3">
              <li className="line-through">Build a Mern App</li>
              <li className="line-through">Deploy a Mern App</li>
              <li>Build a Mobile App</li>
              <li>Build a Game in Unity</li>
              <li className="line-through">Make an Application using AI/ML</li>
            </ul>
          </div>
          <div className="w-40vw md:w-auto p-5 md:p-20  bg-white shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-1 hover:-translate-y-1">
            <b className="text-[#aa579b]  text-lg">Places to visit</b>
            <ul className="list-disc list-inside mt-3">
              <li>Amsterdam</li>
              <li>Tokyo</li>
              <li>Manchester</li>
              <li className="line-through">Laughtale</li>
            </ul>
          </div>
          <div className="w-40vw md:w-auto p-5 md:p-20  bg-white shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:-translate-x-1 hover:translate-y-1">
            <b className="text-[#aa579b]  text-lg">Gaming Goals</b>
            <ul className="list-disc list-inside mt-3">
              <li>Reach Platinum in Valorant</li>
              <li>Buy Multiple Skins in Valorant</li>
              <li>Complete Minecraft Story</li>
              <li className="line-through">Unlock All Agents in Valorant</li>
              <li>Start Streaming</li>
              <li>Upload Gaming videos on YouTube</li>
            </ul>
          </div>
          <div className="w-40vw md:w-auto p-5 md:p-20  bg-white shadow-md rounded-3xl m-3 transition ease-in-out duration-500 hover:shadow-xl transform hover:translate-x-1 hover:translate-y-1">
            <b className="text-[#aa579b] 0 text-lg">Insane/Fun Goals</b>
            <ul className="list-disc list-inside mt-3">
              <li>Own Mustang</li>
              <li>Own an Island</li>
              <li>Go to space</li>
              <li>Survive a week in the wild with the Boyz</li>
              {/*<li><label className="inline-flex items-center">
                  <input type="checkbox"  className=" text-blue-400 rounded cursor-not-allowed" checked={isChecked}  onChange={handleCheckboxChange} />
                  <span className="ml-2 text-gray-700 line-through">This checkbox is disabled</span>
                  </label>
              </li>
              <li><label className="inline-flex items-center">
                  <input type="checkbox"  className=" text-red-200 rounded cursor-not-allowed" checked={!isChecked}  onChange={handleCheckboxChange} />
                  <span className="ml-2 text-gray-700">This checkbox is not disabled</span>
                  </label>
              </li>*/}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Goals
