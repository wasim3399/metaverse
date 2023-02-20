"use client";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-center">Metaverse</h1>
      <Input type="text" placeholder="enter value" />
      <Button>Submit</Button>
    </main>
  );
}
