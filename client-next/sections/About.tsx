import CherryBlossomPetals from "@/components/CherryBlossom";

const About = () => {
    return (
        <>
            <div className="background"></div>
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
                    Developers
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-8 text-[--body]">
                    This project was designed by Dylan Nelson, Noel Varghese, Nathan Foo, and Sean Hau Goh for Hack Texas 2024.
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    Inspiration
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-8 text-[--body]">
                    Our inspiration for this project stems from our desire to make a positive impact in the gaming community. We hope to support indie game developers with this AI tool and enable them to continue doing what they love!
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    What It Does
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-8 text-[--body]">
                    Indie Studio is designed to empower indie developers to create unique and visually appealing games. This tool provides developers with AI-generated assets including themes, sprites, and assets tailored to their specific needs. Users are able to enter a custom prompt to generate retro assets, as well as specify the number of assets needed. After generation, the tool features a live demo using the generated sprites and provides an option to save the new assets.
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    What We Learned
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-8 text-[--body]">
                    Through this project, we learned to utilize AI and stable diffusion for image generation in a full stack environment. We also learned to implement Python with a Next.js frontend to access powerful tools for backend development, and we improved our front end design skills with horizontal scrolling, falling petal effects, preloader animations, and an aesthetic color palette.
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    How We Built It
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-8 text-[--body]">
                    We opted to build our web application using React and Next.js for fast loading speeds and static site generation.
                    <br /><br />
                    We developed three pages including a user friendly landing page, about section, and generative interface for asset creation, and used Flask to connect our application to our Python backend.
                    <br /><br />
                    We used Python to implement stable diffusion and theme color generators with AI, and received generation directions from a text input provided by the user.
                </p>
                <h2 className="font-[Karmatic] text-[3em] text-[--scroll]">
                    Challenges We Faced
                </h2>
                <p className="font-[SuperLegend] text-[1.5em] py-8 text-[--body]">
                    One challenge we faced was implementing stable diffusion into our project. The main problem we faced was the stable diffusion program taking a long time to generate, but we made our best attempt to increase load speeds.
                    <br /><br />
                    Another challenge we faced was designing a clean user experience that fit well with the hackathon theme. We went through several theme ideas before deciding on the current version and encountered problems with implementing several design ideas, but in the end we finally came up with a version that we were satisfied with.
                </p>
                <div className="py-10"></div>
            </div>
            <CherryBlossomPetals />
        </>
    );
}
 
export default About;