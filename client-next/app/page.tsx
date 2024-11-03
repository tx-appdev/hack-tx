import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import Body from "@/sections/Body";
import TextScroller from "@/sections/TextScroller";
import CherryBlossomPetals from "@/components/CherryBlossom";
import DemonstrationTop from "@/sections/DemonstrationTop";
import DemonstrationMiddle from "@/sections/DemonstrationMiddle";
import DemonstrationBottom from "@/sections/DemonstrationBottom";
import GenerateNow from "@/components/ui/GenerateNow";

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
