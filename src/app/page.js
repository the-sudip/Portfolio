"use client";
import Image from "next/image";
import Button from "./_components/Button";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import PercentageBar from "./_components/PercentageBar";

export default function Home() {
  return (
    
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <PercentageBar name = "SQL" percentage="85" />
    </div>
  );
}
