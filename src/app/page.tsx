"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import Image from "next/image";

// flex
// full width
// position absolute

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </main>
  );
}
