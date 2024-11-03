"use client";

import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import Body from "@/sections/Body";
import TextScroller from "@/sections/TextScroller";
import CherryBlossomPetals from "@/components/CherryBlossom";
import DemonstrationTop from "@/sections/DemonstrationTop";
import DemonstrationMiddle from "@/sections/DemonstrationMiddle";
import DemonstrationBottom from "@/sections/DemonstrationBottom";
import GenerateNow from "@/components/ui/GenerateNow";
import { useGSAP } from "@gsap/react";
import { gsap, Power4 } from "gsap";

export default function Home() {
  useGSAP(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        if (currentValue === 100) return;

        currentValue += Math.floor(Math.random() * 10 + 1);

        if (currentValue > 100) {
          currentValue = 100;
        }
  
        counterElement!.textContent = currentValue.toString();
  
        let delay = Math.floor(Math.random() * 200) + 20;
  
        setTimeout(updateCounter, delay);
      }
      updateCounter();
    }
    startLoader();

    gsap.to(".counter", 0.25, {
      delay: 2.5,
      opacity: 0,
    });

    gsap.to(".bar", 1.5, {
      delay: 2.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: Power4.easeInOut,
    });
  });

  return (
    <>
      <h1 className="counter fixed w-[100%] h-[100%] flex justify-end items-end z-30 text-[--body] py-[0.2em] px-[0.4em] text-[20vw] font-[SuperLegend]">0</h1>

      <div className="overlay fixed w-[100vw] h-[100vh] z-[2] flex">
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
        <div className="bar w-[10vw] h-[105vh] bg-[black]"></div>
      </div>

      <div className="site-wrapper">
        <div className="site-content">
          <div className="background"></div>
          <Navbar />
          <TextScroller />
          <Hero />
          <Body />
          <DemonstrationTop />
          <DemonstrationMiddle />
          <DemonstrationBottom />
          <GenerateNow />
          <CherryBlossomPetals />
        </div>
      </div>
    </>
  );
}
