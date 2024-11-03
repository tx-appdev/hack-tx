const DemonstrationMiddle = () => {
    return (
        <div className="demonstration min-h-[100vh] my-0 mx-auto flex items-left justify-center">
            <div>
                <h1 className='font-[SuperLegend] text-[3em] text-[--body] text-center pb-[50px] pl-[150px]'>
                    <b>Create retro style textures in seconds</b>
                </h1>

                <h2 className="font-[SuperLegend] text-[1.5em] text-[--body] text-center pl-[150px]">
                    Reimagine the lost art of retro gaming through our <br />
                    easy to use AI tool. Simply navigate to the <b>generate</b> <br />
                    tab and enter in a prompt and wait for your image to be created.
                </h2>
            </div>
            <img src='pixel_art.png' width="500" height="500" className="w-[1500px] h-[500px] scale-x-[-1]"/>
        </div>
    );
}

export default DemonstrationMiddle;