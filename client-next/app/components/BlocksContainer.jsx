const BlocksContainer = () => {
    return (
        <>
            <div className="blocks-container top absolute w-[100%] h-[400px] top-0">
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
            </div>
            <div className="blocks-container bottom absolute w-[100%] h-[400px] bottom-0">
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
                <div className="block-row w-[100%] h-[100px] overflow-hidden flex"></div>
            </div>
        </>
    );
}
 
export default BlocksContainer;