import CherryBlossomPetals from "@/components/CherryBlossom";
const Hero = () => {
    return (
        <div className="hero min-h-[100vh] max-w-[1200px]  my-0 mx-auto flex items-center justify-center">
            <CherryBlossomPetals />
            <div className="text-wrapper">
                <h1 className="font-[Retro] text-[8em] text-[#ff75bc]">
                    INDIE STUDIO
                </h1>
                <h2 className="font-[Retro] text-[2.5em] text-[#] text-center">
                    A generative AI solution to indie<br />
                    game development.
                </h2>
            </div>
        </div>
    );
}
 
export default Hero;