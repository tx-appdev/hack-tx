export default function Home() {
  return (
    <>
      <div className="container">
        <section className="hero bg-[#757637]">
          <h1>Section 1</h1>
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
        <section className="about bg-[#375955]">
          <h1>Section 2</h1>
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
        <section className="footer bg-[#645439]">
          <h1>Section 3</h1>
        </section>
      </div>
    </>
  );
}
