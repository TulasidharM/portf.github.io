import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from 'emailjs-com';

const Contact = () =>{
    const [contact,setContact] = useState({
        fromEmail:'tulasidharmulakaluri@gmail.com',
        message:'',
        mail:'',
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(": " + contact.mail + " " +contact.message) ;
        
        
        var message = contact.message;
        var main = contact.mail;
        
        if(message!=="" && main!==""){
            emailjs.sendForm('service_vxjq52s','template_l8f72om',e.target,'9m7xV1Awro84Tn6SH').then(()=>{
                console.log("succesfull");
            })
            .catch((e)=>console.log(e));
            toast("Thanks for messaging , I'll get back to you soon!");
            setContact({
                message:'',
                mail:'',
            })
        }


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
            

                <form onSubmit={handleSubmit} className="w-full sm:w-3/4 flex flex-col">
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

                    <input className="bg-white/90 hover:bg-white/70 w-1/2 sm:w-1/6 p-2 rounded-sm text-black m-auto" type="submit"/>

                </form>

        </div>
    )
}

export default Contact;