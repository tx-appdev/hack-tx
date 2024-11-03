const About = () => {
    return (
        <>
            <div className="about pt-[8%] my-0 mx-auto flex items-center justify-center text-center">
                <div className="heading-wrapper">
                    <h1 className="font-[Karmatic] text-[6em] text-[--title]">
                        ABOUT
                    </h1>
                </div>
            </div>
            <div className="subheading-wrapper flex items-center justify-center text-center">
                <h3 className="font-[Karmatic] text-[2em] text-[--body] pt-4 pb-8">
                    A Generative AI Assistant
                </h3>
            </div>
            <div className="body-wrapper text-left py-8 px-[10%] max-w-[100%]">
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    Inspiration
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] text-[--body] py-4">
                    Paragraph 1 - Here is some random text to make it seem like we did some super cool stuff
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    What It Does
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4 text-[--body]">
                    Paragraph 2
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    What We Learned
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4 text-[--body]">
                    Paragraph 3
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    How We Built It
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4 text-[--body]">
                    Paragraph 4
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    Challenges We Faced
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-4 text-[--body]">
                    Paragraph 5
                </p>
                <div className="py-10"></div>
            </div>
        </>
    );
}
 
export default About;