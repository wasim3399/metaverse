"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiFillCodepenCircle,
  AiFillSliders,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

export default function profile() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [animation, inView]);

  return (
    <>
      <div className="flex  bg-zinc-800 text-white">
        <Sidebar></Sidebar>
        <main className=" wrapper p-28 w-3/4">
          {/* banner */}
          <div className=" flex">
            <div className="space-y-10">
              <button className=" flex border border-gray-500 px-6 py-2 rounded-3xl items-center">
                <AiFillHome></AiFillHome>{" "}
                <span className=" pl-4">INTRODUCTION</span>
              </button>
              <h2 className=" text-6xl">
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
              <AiOutlineUser></AiOutlineUser>
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
          <motion.div
            className="flex py-36"
            ref={ref}
            animate={animation}
            initial={{ opacity: 0, y: 50 }}
          >
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
          </motion.div>

          {/* about */}
          <motion.div
            className=" flex"
            ref={ref}
            animate={animation}
            initial={{ opacity: 0, y: 50 }}
            id="about"
          >
            <div className="space-y-10 w-3/4">
              <button className=" flex border border-gray-500 px-6 py-2 rounded-3xl items-center">
                <AiOutlineUser></AiOutlineUser>{" "}
                <span className=" pl-4">ABOUT</span>
              </button>
              <h2 className=" text-4xl">
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
          </motion.div>

          {/* resume */}
          <div className=" flex pt-36">
            <div className="space-y-20 w-3/4">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                RESUME
              </button>
              <h2 className=" text-4xl">
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

          {/* services */}
          <div className=" flex pt-36">
            <div className="">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                SERVICES
              </button>
              <h2 className=" text-4xl py-20">
                My <span className="text-green-500">Specializations</span>
              </h2>

              <div className=" space-y-4">
                <div className=" border border-gray-500 hover:border-green-500 rounded-3xl px-20 py-5 space-y-5">
                  <h3 className=" text-2xl font-semibold dark:text-white">
                    Website Design
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    I created digital products with unique ideas use Figma &
                    Framer
                  </p>
                  <p className="text-lg font-normal text-white dark:text-gray-400">
                    24 Projeccts
                  </p>
                </div>

                <div className=" border border-gray-500 hover:border-green-500 rounded-3xl px-20 py-5 space-y-5">
                  <h3 className=" text-2xl font-semibold dark:text-white">
                    Website Design
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    I created digital products with unique ideas use Figma &
                    Framer
                  </p>
                  <p className="text-lg font-normal text-white dark:text-gray-400">
                    24 Projeccts
                  </p>
                </div>

                <div className=" border border-gray-500 hover:border-green-500 rounded-3xl px-20 py-5 space-y-5">
                  <h3 className=" text-2xl font-semibold dark:text-white">
                    Website Design
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    I created digital products with unique ideas use Figma &
                    Framer
                  </p>
                  <p className="text-lg font-normal text-white dark:text-gray-400">
                    24 Projeccts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* skills */}
          <div className=" flex pt-36">
            <div className="">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                MY SKILLS
              </button>
              <h2 className=" text-4xl py-20">
                My <span className="text-green-500">Advantages</span>
              </h2>

              <div className=" flex flex-wrap space-x-2">
                <div className="border border-gray-500 rounded-full p-14">
                  <Image
                    src="/images/figma.png"
                    alt="figma"
                    width={50}
                    height={50}
                  ></Image>
                  <p>92%</p>
                </div>
                <div className="border border-gray-500 rounded-full p-14">
                  <Image
                    src="/images/figma.png"
                    alt="figma"
                    width={50}
                    height={50}
                  ></Image>
                  <p>92%</p>
                </div>
                <div className="border border-gray-500 rounded-full p-14">
                  <Image
                    src="/images/figma.png"
                    alt="figma"
                    width={50}
                    height={50}
                  ></Image>
                  <p>92%</p>
                </div>
                <div className="border border-gray-500 rounded-full p-14">
                  <Image
                    src="/images/figma.png"
                    alt="figma"
                    width={50}
                    height={50}
                  ></Image>
                  <p>92%</p>
                </div>
              </div>
            </div>
          </div>

          {/* portfolio */}
          <div className=" flex pt-36">
            <div className="">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                PORTFOLIO
              </button>
              <h2 className=" text-4xl py-20">
                Featured <span className="text-green-500">Projects</span>
              </h2>

              <div className=" w-full m-auto justify-center space-y-6">
                <Link
                  href={"https://portal.cardeye.tech/"}
                  target="_blank"
                  className=" space-y-4 dark:text-white hover:text-green-500"
                >
                  <h3 className=" text-2xl font-semibold">CardEye</h3>
                  <Image
                    src="/images/cardeye.png"
                    alt="cardeye"
                    width={500}
                    height={500}
                    className=" rounded-3xl"
                  ></Image>
                </Link>
                <Link
                  href={"https://portal.cardeye.tech/"}
                  target="_blank"
                  className=" space-y-4 dark:text-white hover:text-green-500"
                >
                  <h3 className=" text-2xl font-semibold">CardEye</h3>
                  <Image
                    src="/images/cardeye.png"
                    alt="cardeye"
                    width={500}
                    height={500}
                    className=" rounded-3xl"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>

          {/* testimonials */}
          {/* add slider */}
          <div className=" flex pt-36">
            <div className="">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                TESTIMONIALS
              </button>
              <h2 className=" text-4xl py-20">
                Trusted by{" "}
                <span className="text-green-500">Hundered Clients</span>
              </h2>

              <div className=" space-y-4">
                <div className=" border border-gray-500 hover:border-green-500 rounded-3xl px-20 py-5 space-y-5">
                  <div className=" flex space-x-5">
                    <Image
                      src="/images/client1.jpg"
                      width={50}
                      height={50}
                      alt="client1"
                      className=" rounded-full"
                    ></Image>
                    <div>
                      <h3 className=" text-2xl font-semibold dark:text-white">
                        Li Ji
                      </h3>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                        Project Manager{" "}
                        <span className="text-green-500">Adddemand</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-normal text-white">
                    “Drake - A Developer with the creativity, professional and
                    master of code. Much more than what i'm expect. High quality
                    product & flexiable price. Recommended!.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* add slider */}
          <div className=" flex pt-36">
            <div className="">
              <button className=" border border-gray-500 px-6 py-2 rounded-3xl">
                CONTACT
              </button>
              <h2 className=" text-4xl py-20">
                Let's Work <span className="text-green-500">Together!</span>
              </h2>
              <h3 className=" text-2xl font-semibold dark:text-white">
                Contact Me
              </h3>
              <ul className=" pt-10 text-gray-600">
                <div className=" flex items-center hover:text-green-500">
                  <AiOutlinePhone></AiOutlinePhone>
                  <li>+92 123 4567890</li>
                </div>
                <div className=" flex items-center hover:text-green-500">
                  <AiOutlineMail></AiOutlineMail>
                  <li className=" pl-2">wasim.iqtm@gmail.com</li>
                </div>
                <li className="hover:text-green-500">Lahore, Pakistan</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
