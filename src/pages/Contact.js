import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


const Contact = () =>{
    const [contact,setContact] = useState({
        message:'',
        mail:'',
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(": " + contact.mail + " " +contact.message) ;
        setContact({
            message:'',
            mail:'',
        })    
        toast("Thanks for messaging , I'll get back to you soon!");

    }


    const handleChange = (e) =>{
        setContact((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
    }
    return (
        <div className="flex flex-col m-5 justify-center items-center">
            <h1 className="mb-9 text-xl black font-bold font-roboto
                        bg-white/5 outline outline-1 outline-white/20 p-5 backdrop-blur-sm rounded-lg">
                            Contact Me
            </h1>
            <ToastContainer
                theme="dark"
                position="bottom-right"
                autoClose={2500}
            />
            <div className="relative">
                <h1 className="text-6xl overflow-hidden w-auto font-cedarville opacity-40 absolute -top-[90px] -left-[100px] -z-10">
                    Contact
                </h1>
            </div>
            

                <form onSubmit={handleSubmit} className="w-full flex flex-col">
                    <div className="flex flex-col gap-2">
                        <label>Your mail</label>
                        <input type="email" 
                            value={contact.mail} 
                            onChange={handleChange}
                            name="mail"
                            className="mb-9 text-sm black font-bold font-roboto
                            bg-white/5 outline outline-1 outline-white/20 p-3 backdrop-blur-sm rounded-lg"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Your message</label>
                        <textarea
                            onChange={handleChange}
                            value={contact.message}
                            name="message" 
                            rows="5" 
                            className="mb-9 text-sm black font-bold font-roboto
                            bg-white/5 outline outline-1 outline-white/20 p-3 backdrop-blur-sm rounded-lg"/>
                    </div>

                    <input type="submit"/>
                </form>

        </div>
    )
}

export default Contact;