import CherryBlossomPetals from "@/components/CherryBlossom";

const Generate = () => {
    return (
        <>
            <div className="background"></div>
            <div className="generation pt-[8%] my-0 mx-auto flex items-center justify-center text-center">
                <div className="heading-wrapper">
                    <h1 className="font-[Karmatic] text-[6em] text-[--title]">
                        GENERATE
                    </h1>
                </div>
            </div>
            <div className="subheading-wrapper flex items-center justify-center text-center">
                <h3 className="font-[Karmatic] text-[2em] text-[--body] pt-4 pb-8">
                    Kickstart your indie dev journey
                </h3>
            </div>
            <div className="fixed bottom-0 left-0 w-full py-[5%] flex items-center justify-center">
                <input
                    type="text"
                    placeholder="Type something..."
                    className="w-[90%] max-w-[600px] p-2 border font-[SuperLegend]"
                />
            </div>
            <CherryBlossomPetals />
        </>
    );
}
 
export default Generate;