const DemonstrationMiddle = () => {
    return (
        <div className="demonstration min-h-[100vh] my-0 mx-auto flex items-left justify-center">
            <div>
                <h1 className='font-[SuperLegend] text-[3em] text-[--body] text-center pb-[50px] pl-[150px]'>
                    <b>Visualize your next indie game</b>
                </h1>

                <h2 className="font-[SuperLegend] text-[1.5em] text-[--body] text-center pl-[150px]">
                    Get a live preview of your new assets in action<br />
                    through a generated theme window. See your main<br />
                    character in a custom retro kingdom!
                </h2>
            </div>
            <img src='example2.png' width="500" height="500" className="w-[1000px] h-[500px] px-[86px]"/>
        </div>
    );
}

export default DemonstrationMiddle;