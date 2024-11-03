const Navbar = () => {
    return (
        <div className="navbar-wrapper font-[Rocabe] text-[--body] fixed top-0 left-0 w-[100%] py-5 px-[10%] flex justify-between align-center z-50">
            <a href="/">INDIE STUDIO</a>

            <nav className="navbar">
                <a href="/" className="relative ml-10">Home</a>
                <a href="/about" className="relative ml-10">About</a>
                <a href="/generate" className="relative ml-10">Generate</a>
            </nav>
        </div>
    );
}
 
export default Navbar;