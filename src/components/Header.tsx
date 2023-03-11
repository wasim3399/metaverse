import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.webp";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  return (
    <div className=" flex justify-between items-center px-[20px] md:px-[60px] py-4 w-full absolute">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="panaverse-logo"></Image>
        </Link>
      </div>
      <div className=" md:flex items-center space-x-12 text-lg font-semibold hidden">
        <Link href={"/"} className="hover:text-blue-600">Home</Link>
        <Link href={"/"} className="hover:text-blue-600">Explore</Link>
        <Link href={"/"} className="hover:text-blue-600">About</Link>
        <Link href={"/"} className="hover:text-blue-600">Contact</Link>
        <div>
          <button className=" bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-900 text-white font-bold">
            Apply
          </button>
        </div>
        
      </div>
      <div className=" md:hidden text-3xl items-center"><HiMenu></HiMenu></div>
    </div>
  );
}
