"use client";
import Header from "@/components/Header";
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
      {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You haves a new message!</p>
        </div>
      </div> */}
    </main>
  );
}
