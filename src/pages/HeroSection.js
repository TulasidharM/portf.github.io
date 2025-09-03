import coolguy from "../images/me.jpeg";
import TextType from "../components/TypeText";


const HeroSection = ()=>{
    // const [isMenuOpen , setIsMenuOpen] = useState(false); 
    
    return(
        <div className="w-screen flex flex-col flex-1 gap-5 p-2 px-10
                        lg:flex-row lg:p-20 lg:gap-20
                        justify-center items-center">
            <img src={coolguy} alt="" className="h-52 lg:h-96 rounded-full"/>

            <div className="p-5">
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
                    I am a Computer Science 2025 undergraduate with real-world experience in various technologies <br/>
                    including FullStack development with SPRING BOOT, <br/>
                    POST QUANTUM cryptography, VR developement with UNITY3D obtained through freelancing and internships. <br/>
                    Built production-ready applications using REACT<br/>
                    <br/>
                    I am Passionate about learning new technologies and solving real-world problems.<br/>
                </p>
            </div>
    </div>
    );
} 

export default HeroSection;