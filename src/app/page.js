"use client";
import Image from "next/image";
import Button from "./_components/Button";
import Navbar from "./_components/navbar/Navbar";
import Navbar2 from "./_components/navbar/Navbar2";
import HeroSection from "./_components/HeroSection";
import PercentageBar from "./_components/skills/PercentageBar";
import Skills from "./_components/skills/Skills";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar2 />
      <HeroSection />
      {/* <PercentageBar name = "SQL" percentage="85" /> */}
      <h2>Ski</h2>
      <Skills />
    </div>
  );
}
