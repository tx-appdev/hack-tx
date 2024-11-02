"use client";

import { useGSAP } from "@gsap/react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

import "./globals.css";
import CherryBlossomPetals from "../components/CherryBlossom";
import SwordAnimation from "../components/SwordAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;

    const cards = [
      {id: "#card-1", endTranslateX: -2000, rotate: 45},
      {id: "#card-2", endTranslateX: -2000, rotate: -30},
      {id: "#card-3", endTranslateX: -2000, rotate: 45},
      {id: "#card-4", endTranslateX: -2000, rotate: -30},
    ];

    ScrollTrigger.create({
      trigger: ".wrapper",
      start: "top top",
      end: "+=900vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".wrapper", {
          x: `${-350 * self.progress}vw`,
          duration: 0.5,
          ease: Power3.easeOut,
        })
      }
    });

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: "card.id",
        start: "top top",
        end: "+=1200vh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(card.id, {
            x: `${card.endTranslateX * self.progress}px`,
            rotate: `${card.rotate * self.progress * 2}`,
            duration: 0.5,
            ease: Power3.easeOut,
          });
        }
      });
    });
  }, [isMounted]);

  return (
    <>
      <div className="container">
        <nav><a href="#">hacktx</a></nav>
        <section className="wrapper">
          <h1>Hack TX 2024</h1>

          <div className="card" id="card-1">
            <img src="img-1.jpg" alt="" />
          </div>
          <div className="card" id="card-2">
            <img src="img-1.jpg" alt="" />
          </div>
          <div className="card" id="card-3">
            <img src="img-1.jpg" alt="" />
          </div>
          <div className="card" id="card-4">
            <img src="img-1.jpg" alt="" />
          </div>
        </section>
        <section className="outro flex">
          <h1>
            This is our submission for Hack TX 2024!
          </h1>
        </section>
        <div>HI</div>
        {/* <section className="hero bg-[#9900FF] top-28">
            {/* <SwordAnimation />
            <CherryBlossomPetals />
        </section> */}
      </div>
    </>
  );
}
