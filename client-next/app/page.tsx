import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import Body from "@/sections/Body";
import TextScroller from "@/sections/TextScroller";
import CherryBlossomPetals from "@/components/CherryBlossom";
import Demonstration from "@/sections/Demonstration";

export default function Home() {
  return (
    <>
      <div className="site-wrapper">
        <div className="site-content">
          <div className="background"></div>
          <Navbar />
          <TextScroller />
          <Hero />
          <Body />
          <Demonstration />
          <CherryBlossomPetals />
        </div>
      </div>
    </>
  );
}
