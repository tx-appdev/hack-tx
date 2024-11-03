"use client";

import { useGSAP } from "@gsap/react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextScroller = () => {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".scroll-wrapper",
            start: "top top",
            end: "+=900vh",
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                gsap.to(".scroll-wrapper", {
                    x: `${-350 * self.progress}vw`,
                    duration: 0.5,
                    ease: Power3.easeOut,
                });
            }
        });
    }, []);

    return (
        <div className="scroll-container w-[100%] overflow-hidden">
            <div className="scroll-wrapper relative top-0 w-[400vw] h-[100vh] will-change-transform overflow-hidden">
                <h1 className="absolute font-[Karmatic] text-slate-600 w-[100%] pl-8 text-[36vw] align-center m-0">HACK TX 2024</h1>
            </div>
        </div>
    );
}
 
export default TextScroller;