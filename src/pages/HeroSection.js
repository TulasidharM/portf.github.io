import coolguy from "../images/me.jpeg";
import TextType from "../components/TypeText";
import { FaFileDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import resume from "../assets/TulasidharMulakaluri.pdf";

const HeroSection = ()=>{
    // const [isMenuOpen , setIsMenuOpen] = useState(false); 
    
    return(
        <div className="w-full flex flex-col flex-1 gap-5 p-2 px-10
                        lg:flex-row lg:p-20 lg:gap-20
                        justify-center items-center">
            <img src={coolguy} alt="" className="h-52 lg:h-96 rounded-full"/>

            <div className="flex flex-col gap-3 p-5">
                <div className="text-2xl lg:text-4xl font-roboto h-[60px]">
                    <TextType
                        text={["Hello, this is Tulasidhar", "This is a brief about me."]}
                        typingSpeed={50}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                    <br/>
                </div>
                
                <br/>
                
                <p className="text-sm sm:text-xl/9">
                    I am a Computer Science 2025 undergraduate with real-world experience in various technologies 
                    including FullStack development with SPRING BOOT + REACT, MERN, Django . 
                    Experienced in the niche skill of Post Quantum Security with Crystals PQC library.
                    I am also proficient in VR developement using UNITY Engine, A skill obtained through freelancing and own projects. 
                    <br/><br/>
                    I am Passionate about learning new technologies and solving real-world problems.
                </p>

                <br/>

                <a href={resume} download="TulasidharMulakaluri.pdf" className="flex text-sm sm:text-xl/9 items-center gap-3 text-black bg-white hover:bg-white/70 p-2 rounded-sm hover:text-black mr-auto">
                    <FaFileDownload/>
                    Download resume
                </a>

                
            </div>
    </div>
    );
} 

export default HeroSection;