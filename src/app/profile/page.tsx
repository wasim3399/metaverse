import Sidebar from "@/components/Sidebar";
import React from "react";

export default function profile() {
  return (
    <>
      <div className="flex  bg-zinc-800 text-white">
        <Sidebar></Sidebar>
        <main>
          <h1>Main Content</h1>
        </main>
      </div>
    </>
  );
}
