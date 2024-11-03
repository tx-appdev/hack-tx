import Demonstration from "@/sections/demonstration";
import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import Body from "@/sections/Body";
import TextScroller from "@/sections/TextScroller";
import CherryBlossomPetals from "@/components/CherryBlossom";
export default function Home() {
  return (
    <>
    
      <div className="site-wrapper">
        <div className="site-content">
          
          <Navbar />
          <TextScroller />
          <Hero />
          <Body />
          <Demonstration/>
          <CherryBlossomPetals />
        </div>
      </div>
    </>
  );
}
