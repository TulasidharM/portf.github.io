import { FaLinkedin,FaInstagram,FaDiscord } from "react-icons/fa";

  
const Footer = ()=>{
    return (
    <div className="flex flex-col gap-4 sm:flex-row items-center justify-center sm:justify-between sm:mx-20 border-t-2 border-t-white/20 m-2 p-3">
        
        <div className="flex flex-col gap-4 mt-5 items-center justify-center">
            <h2 className="text-2xl font-bold">Tulasidhar Mulakaluri</h2>

            <p className="px-12 sm:px-2 py-2">
                ** This portfolio is built completely without the use of AI ** <br/>
                Thank you for giving your time to look my portfolio.
            </p>
        </div>
        
        <div>
            <h2 className="text-xl font-bold mb-2">Let's stay in touch</h2>
            
            <div className="flex gap-2 text-3xl justify-center">
                <FaLinkedin className="hover:text-blue-600"/>
                <FaInstagram className="hover:text-red-500"/>
                <FaDiscord className="hover:text-blue-300"/>
            </div>
        </div>
    
    </div>
    ) 
}


export default Footer;