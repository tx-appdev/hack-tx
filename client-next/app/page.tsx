import Scroller from "@/sections/Scroller";
import Navbar from "../components/ui/Navbar";
import Hero from "../sections/Hero";
import About from "@/sections/About";
import Generation from "@/sections/Generation";

export default function Home() {
  return (
    <>
      <div className="site-wrapper">
        <div className="site-content">
          <Navbar />
          <Hero />
          <Scroller />
          <About />
          <Generation />
        </div>
      </div>
    </>
  );
}
