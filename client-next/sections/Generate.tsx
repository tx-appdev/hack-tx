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
                    Kickstart your indie dev journey!
                </h3>
            </div>
            <div className="text-input w-full pb-5 flex items-center justify-center">
                <input
                    type="text"
                    maxLength={100}
                    placeholder="Enter your game idea..."
                    className="w-[90%] max-w-[600px] p-2 border font-[SuperLegend]"
                />
            </div>
            <div className="flex items-center justify-center text-center text-[--body]">
                <div className="font-[SuperLegend]">Number of Assets: </div>
                <div className="pl-4">
                    <input
                        type="text"
                        defaultValue="5"
                        step="1"
                        min="1"
                        max="20"
                        maxLength={2}
                        className="w-[70px] p-2 border font-[SuperLegend] text-[black]"
                    />
                </div>
            </div>
            <CherryBlossomPetals />
        </>
    );
}
 
export default Generate;