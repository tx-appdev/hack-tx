import Scroller from "@/sections/Scroller";
import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import Body from "@/sections/Body";

export default function Home() {
  return (
    <>
      <div className="site-wrapper">
        <div className="site-content">
          <Navbar />
          <Hero />
          <Scroller />
          <Body />
        </div>
      </div>
    </>
  );
}
