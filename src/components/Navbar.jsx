function Navbar(){
    return(
        <div className="text-white flex justify-around p-6 items-center text-lg">
            <h2 className="text-xl">~ / </h2>
            <div className="flex gap-10">
                <a href="#">about</a>
                <a href="#">skills</a>
                <a href="#">projects</a>
            </div>
        </div>
    )
}
export default Navbar;