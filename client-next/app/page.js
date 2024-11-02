"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import BlocksContainer from "./components/BlocksContainer";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const blockRows = document.querySelectorAll(".block-row");
    blockRows.forEach((row) => {
      for (let i = 0; i < 16; i++) {
        const block = document.createElement("div");
        block.className = "block";
        row.appendChild(block);
      }
    });

    const blockContainers = document.querySelectorAll(".blocks-container");
    blockContainers.forEach((container) => {
      const rows = container.querySelectorAll(".block-row");
      const numRows = rows.length;

      rows.forEach((row, rowIndex) => {
        let blocks = Array.from(row.querySelectorAll(".block"));
        let isTop = container.classList.contains("top");

        let randomOrder = gsap.utils.shuffle(blocks.map((block, id) => id));

        ScrollTrigger.create({
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let rowDelay = 0.3 * (numRows - rowIndex - 1);
            let adjusted = Math.max(0, Math.min(1, progress - rowDelay));

            updateBlocksOpacity(blocks, randomOrder, isTop, adjusted);
          }
        });
      });
    });

    function updateBlocksOpacity(blocks, order, isTop, progress) {
      blocks.forEach((block, id) => {
        let offset = order.indexOf(id) / blocks.length;
        let adjusted = (progress - offset) * blocks.length;
        let opacity = isTop
          ? 1 - Math.min(1, Math.max(0, adjusted))
          : Math.min(1, Math.max(0, adjusted));

        block.style.opacity = opacity;
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <section className="hero bg-[#757637]">
          <h1>Section 1</h1>
        </section>
        <section className="hero-img h-[200vh]">
          <img src="img-1.jpg" alt="" />
          <BlocksContainer />
        </section>
        <section className="about bg-[#375955]">
          <h1>Section 2</h1>
        </section>
        <section className="about-img h-[200vh]">
        <img src="img-2.jpg" alt="" />
          <BlocksContainer />
        </section>
        <section className="footer bg-[#645439]">
          <h1>Section 3</h1>
        </section>
      </div>
    </div>
  );
}
