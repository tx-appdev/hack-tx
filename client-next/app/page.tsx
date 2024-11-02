import CherryBlossomPetals from "./CherryBlossom";
import SwordAnimation from "./SwordAnimation";
import "./SwordAnimation.css"
export default function Home() {
  return (
    <>
      <div className="container">
        <section className="hero bg-[#9900FF]">
          <SwordAnimation />
          <CherryBlossomPetals />
        </section>
        
        <section className="hero-img h-[200vh]">
          <img src="img-1.jpg" alt="" />
          <div className="blocks-container top">
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
          </div>
          <div className="blocks-container bottom">
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
          </div>
        </section>
        
        <section className="about bg-[#EDA92D]">
          <h1>section 2</h1>
        </section>
        
        <section className="about-img h-[200vh]">
          <img src="img-2.jpg" alt="" />
          <div className="blocks-container top">
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
          </div>
          <div className="blocks-container bottom">
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
            <div className="blocks-row"></div>
          </div>
        </section>
        
        <section className="footer bg-[#00CCFF]">
          <h1>section 3</h1>
        </section>
      </div>
    </>
  );
}
