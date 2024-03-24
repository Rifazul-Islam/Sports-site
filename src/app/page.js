"use client";

import { useState } from "react";
import Collection from "./components/Collection/Collection";
import Navbar from "./components/Navbar/Navbar";
import Sports from "./components/Sports/Sports";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-[#23272F]" : " "} `}>
      <Navbar dark={dark} setDark={setDark}></Navbar>
      <Sports></Sports>
      <Collection></Collection>
    </div>
  );
}
