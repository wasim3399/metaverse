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
              <button className=" border px-6 py-2 rounded-3xl">
                Introduction
              </button>
              <h2 className=" text-8xl">
                Say Hi from Drake, Framer Designer and Developer
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

          {/* about */}
          <div className="flex py-52">
            <div className=" p-10 space-y-5">
              <h2 className=" text-green-500 text-8xl">10+</h2>
              <p className=" text-gray-400">YEARS OF EXPERIENCE</p>
            </div>
            <div className=" p-10 space-y-5">
              <h2 className=" text-green-500 text-8xl">182+</h2>
              <p className=" text-gray-400">PROJECTS COMPLETED ON 15 COUNTRIES</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
