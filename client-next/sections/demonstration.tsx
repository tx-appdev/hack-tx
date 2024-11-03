const Demonstration = () => {
    return (
        <div className="demonstration min-h-[100vh] nmax-w-[1200px] my-0 mx-auto flex items-left justify-center">
            <img src='pixel_art.png' className="width-[500px]"/>
            <div>
                <h1 className='pt-[200px] font-[SuperLegend] text-[3em] text-[white] text-center pb-[50px]'>
                    <b>Create retro style textures in seconds</b>
                </h1>

                <h2 className="font-[SuperLegend] text-[1.5em] text-[--body] text-center">
                    Reimagine the lost art of retro gaming <br/> through our 
                    easy to use AI tool.<br/> Simply navigate to the <b>  generate  </b>
                    tab and<br/> enter in a prompt and wait for your <br/>image to be created.
                </h2>
            </div>
        </div>
    );
}

export default Demonstration;