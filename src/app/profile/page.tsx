import Sidebar from "@/components/Sidebar";
import React from "react";
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiFillCodepenCircle,
  AiFillSliders,
} from "react-icons/ai";

export default function profile() {
  return (
    <>
      <div className="flex  bg-zinc-800 text-white">
        <Sidebar></Sidebar>
        <main className=" wrapper p-28 w-3/4">
          {/* banner */}
          <div className=" flex">
            <div className="space-y-20">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                Introduction
              </button>
              <h2 className=" text-8xl">
                Say Hi from <span className="text-green-500">Drake,</span>{" "}
                Framer Designer and Developer
              </h2>
              <p className=" text-gray-400 w-1/2">
                I design and code beautifully simple things and i love what i
                do. Just simple like that! I design and code beautifully simple
                things and i love what i do. Just simple like that!
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4 border border-gray-500 rounded-3xl px-6">
              <AiFillHome></AiFillHome>
              <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
              <AiFillCodepenCircle></AiFillCodepenCircle>
              <AiFillSliders></AiFillSliders>
            </div>
          </div>
          <div className=" pr-24">
            <div className=" mt-8 w-[150px] h-[150px] border border-gray-500 rounded-full flex float-right  justify-center items-center">
              <p>My Projects</p>
            </div>
          </div>

          {/* stats */}
          <div className="flex py-52">
            <div className=" p-10 space-y-5">
              <h2 className=" text-green-500 text-8xl">10+</h2>
              <p className=" text-gray-400">YEARS OF EXPERIENCE</p>
            </div>
            <div className=" p-10 space-y-5">
              <h2 className=" text-green-500 text-8xl">182+</h2>
              <p className=" text-gray-400">
                PROJECTS COMPLETED ON 15 COUNTRIES
              </p>
            </div>
          </div>

          {/* about */}
          <div className=" flex">
            <div className="space-y-20 w-3/4">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                About
              </button>
              <h2 className=" text-6xl">
                Every great design begin with an even{" "}
                <span className="text-green-500">better story</span>
              </h2>
              <p className=" text-gray-400">
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chopsone design problem at a time.
              </p>
            </div>
          </div>

          {/* resume */}
          <div className=" flex pt-52">
            <div className="space-y-20 w-3/4">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                Resume
              </button>
              <h2 className=" text-6xl">
                Education & <span className="text-green-500">Experience</span>
              </h2>
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="pb-10 ml-4 space-y-5 hover:text-green-500">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
                    February 2022 - Present
                  </time>
                  <h3 className=" text-2xl font-semibold dark:text-white">
                    Technical Project Lead/Team Lead
                  </h3>
                  <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Developers Studio
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    March 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Marketing UI design in Figma
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    April 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    E-Commerce UI code in Tailwind CSS
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
