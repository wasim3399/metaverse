import Image from "next/image";
import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Sidebar() {
  return (
    <aside className="h-screen sticky top-0 w-1/4 border border-gray-500 rounded-2xl">
      <div>
        <div className=" flex flex-col justify-between text-center space-y-6">
          <div className="flex justify-around pt-4 items-center">
            <h2 className=" text-4xl">Zia</h2>
            <h2>Sr. Designer</h2>
          </div>
          <Image
            src={"/images/zia.webp"}
            alt="saylani"
            width={200}
            height={50}
            className="  mx-auto rounded-2xl cov"
          ></Image>
          <div className=" text-2xl">
            <p>zia.iqtm@gmail.com</p>
            <p>Based in Lahore, Pakistan</p>
          </div>
          <div className=" text-gray-400">
            <p>© 2022 Drake. All Rights Reserved</p>
          </div>
          <div className="flex justify-center space-x-4">
            <div className=" border border-gray-400 rounded-full p-3"><BsFacebook></BsFacebook></div>
            <div className=" border border-gray-400 rounded-full p-3"><BsGithub></BsGithub></div>
            <div className=" border border-gray-400 rounded-full p-3"><BsLinkedin></BsLinkedin></div>
          </div>
          <div>
            <button className="bg-green-500 px-20 py-2 rounded-3xl">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
