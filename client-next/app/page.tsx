import Scroller from "@/sections/Scroller";
import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import Body from "@/sections/Body";
import TextScroller from "@/sections/TextScroller";

export default function Home() {
  return (
    <>
      <div className="site-wrapper">
        <div className="site-content">
          <Navbar />
          {/* <Scroller /> */}
          <TextScroller />
          <Hero />
          <Body />
        </div>
      </div>
    </>
  );
}
