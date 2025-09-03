import {  useState } from "react";

const Navbar =()=>{
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    
    const handleMenuClick = (e) =>{
        console.log("Trying to open the menu");
        setIsMenuOpen(!isMenuOpen);
    }
    return(

        <div className={`${isMenuOpen ? "h-[270px]":"h-16"}  
                        flex flex-col px-10 py-5 gap-5 
                        fixed -translate-x-1/2 w-11/12 left-1/2 top-10   
                        lg:h-20 lg:px-20
                        rounded-3xl backdrop-blur-md outline outline-1 outline-white/20 bg-white/5 z-50
                        transition-all duration-300`}>
            
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-black font-roboto lg:text-2xl">Tulasidhar M<span className="hidden sm:inline">ulakaluri</span> </h1>
                <nav>
                    {/* Normal nav */}
                    <div className="hidden lg:flex justify-around"> 
                        <button className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:shadow-md hover:text-black transition-colors delay-20" >
                            Experience
                        </button>
                        <button className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:text-black transition-colors delay-20">
                            Projects
                        </button>
                        <button className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:text-black transition-colors delay-20">
                            About
                        </button>
                        <button className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:text-black transition-colors delay-20">
                            Contact
                        </button>
                    </div>
                    
                    {/* Burger Nav button*/}
                    <button onClick={handleMenuClick} className="display-block p-0.5 lg:hidden"> {isMenuOpen? <span>Ξ</span> : <span>☰</span>} </button>

                </nav> 
            </div>
            

            {/* Burger Nav */}

                <div className={`${isMenuOpen ? "opacity-100":"opacity-0"} flex flex-col lg:opacity-0 transition-all gap-2 duration-300 `}>
                    <button className="p-2 backdrop-blur-lg">Experience</button>
                    <button className="p-2">Projects</button>
                    <button className="p-2">About</button>
                    <button className="p-2">Contact</button>
                </div>
        </div>
        
    )
}

export default Navbar;