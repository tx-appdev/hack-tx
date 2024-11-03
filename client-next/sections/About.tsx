const About = () => {
    return (
        <>
            <div className="about pt-[10%] my-0 mx-auto flex items-center justify-center text-center">
                <div className="heading-wrapper">
                    <h1 className="font-[Karmatic] text-[6em] text-slate-400">
                        ABOUT
                    </h1>
                </div>
            </div>
            <div className="subheading-wrapper flex items-center justify-center text-center">
                <h3 className="font-[Karmatic] text-[2em] pt-4 pb-8">
                    Description goes here
                </h3>
            </div>
            <div className="body-wrapper text-left py-8 px-[10%] max-w-[100%]">
                <h2 className="font-[Karmatic] text-[3em]">
                    Inspiration
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4">
                    Paragraph 1 - Here is some random text to make it seem like we did some super cool stuff
                </p>
                <h2 className="font-[Karmatic] text-[3em]">
                    What It Does
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4">
                    Paragraph 2
                </p>
                <h2 className="font-[Karmatic] text-[3em]">
                    What We Learned
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4">
                    Paragraph 3
                </p>
                <h2 className="font-[Karmatic] text-[3em]">
                    How We Built It
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4">
                    Paragraph 4
                </p>
                <h2 className="font-[Karmatic] text-[3em]">
                    Challenges We Faced
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4">
                    Paragraph 5
                </p>
            </div>
        </>
    );
}
 
export default About;