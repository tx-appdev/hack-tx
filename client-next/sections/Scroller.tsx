"use client";

import { useGSAP } from "@gsap/react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
    useGSAP(() => {
        const cards = [
            { id: "#card-1", endTranslateX: -2000 },
            { id: "#card-2", endTranslateX: -2000 },
            { id: "#card-3", endTranslateX: -2000 },
            { id: "#card-4", endTranslateX: -2000 },
        ];

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
        <div className="scroll-container w-[100%]">
            <div className="scroll-wrapper relative top-0 w-[400vw] h-[100vh] will-change-transform">
                <div className="card absolute w-[600px] h-[600px] rounded-[20px] overflow-hidden top-[10%] left-[20%]" id="card1">
                    <img src="img-1.jpg" alt="" className="w-[100%] h-[100%] object-cover" />
                </div>
                <div className="card absolute w-[600px] h-[600px] rounded-[20px] overflow-hidden top-[10%] left-[40%]" id="card2">
                    <img src="img-1.jpg" alt="" className="w-[100%] h-[100%] object-cover" />
                </div>
                <div className="card absolute w-[600px] h-[600px] rounded-[20px] overflow-hidden top-[10%] left-[60%]" id="card3">
                    <img src="img-1.jpg" alt="" className="w-[100%] h-[100%] object-cover" />
                </div>
                <div className="card absolute w-[600px] h-[600px] rounded-[20px] overflow-hidden top-[10%] left-[80%]" id="card4">
                    <img src="img-1.jpg" alt="" className="w-[100%] h-[100%] object-cover" />
                </div>
            </div>
        </div>
    );
}
 
export default Scroller;