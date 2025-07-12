"use client";
import Image from "next/image";
import Button from "./_components/Button";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    
    <div className="bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}
