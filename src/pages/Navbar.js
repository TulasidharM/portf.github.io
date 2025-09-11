import { useState } from "react";

const Navbar =()=>{
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    
    const handleMenuClick = (e) =>{
        console.log("Trying to open the menu");
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () =>{
        setIsMenuOpen(false);
    }
    return(

        <div className={`${isMenuOpen ? "h-[220px]":"h-16"}  
                        flex flex-col px-10 py-5 gap-5 
                        fixed -translate-x-1/2 w-11/12 left-1/2 top-10   
                        lg:h-20 lg:px-20
                        rounded-3xl backdrop-blur-md outline outline-1 outline-white/20 bg-white/5 z-50
                        transition-all duration-300`}>
            
            <div className="flex flex-row justify-between items-center">
                <a onClick={closeMenu} href="#top">
                    <h1 className="text-xl font-black font-roboto lg:text-2xl">
                        Tulasidhar M<span className="hidden sm:inline">ulakaluri</span> 
                    </h1>
                </a>
                <nav>
                    {/* Normal nav */}
                    <div className="hidden lg:flex align items-center justify-around"> 
                        <a onClick={closeMenu} href="#experience" className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:shadow-md hover:text-black transition-colors delay-20" >
                            Experience
                        </a>
                        <a onClick={closeMenu} href="#projects" className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:text-black transition-colors delay-20">
                            Projects
                        </a>
                        <a onClick={closeMenu} href="#contact" className="p-2 px-4 mx-2 rounded-lg hover:bg-white hover:text-black transition-colors delay-20">
                            Contact
                        </a>
                    </div>
                    
                    {/*Burger Nav button*/}
                    <button onClick={handleMenuClick} className="display-block p-0.5 lg:hidden"> {isMenuOpen? <span>Ξ</span> : <span>☰</span>} </button>

                </nav> 
            </div>
            
            {/* Burger Nav */}
                <div className={`${isMenuOpen ? "opacity-100":"opacity-0 collapse"} flex items-center flex-col lg:hidden transition-all gap-2 duration-300 `}>
                    <a onClick={closeMenu} href="#experience" className="p-2">Experience</a> 
                    <a onClick={closeMenu} href="#projects" className="p-2">Projects</a>
                    <a onClick={closeMenu} href="#contact" className="p-2">Contact</a>
                </div>
        </div>
        
    )
}

export default Navbar;