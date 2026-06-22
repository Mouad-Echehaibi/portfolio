import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact(){
    const [status, setStatus] = useState("idle");//idle sending success error cooldown
    const [cooldown, setCooldown] = useState(0);
    const [formData, setFormData] = useState({name: "",email: "",message: "",});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev,[name]: value}));
    };

    const isEmailValid = (email) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); };

    const handleSubmit = async () => {

        if (cooldown > 0) return;
        if (!formData.name.trim()) {setStatus("error");toast.error("Please enter your name");return;}
        if (!isEmailValid(formData.email)) {setStatus("error");toast.error("Please enter a valid email");return;}
        if (formData.message.trim().length == 0) {setStatus("error");toast.error(`Please write your message`);return;}
        if (formData.message.length > 250) {setStatus("error");toast.error(`Message cannot exceed 250 characters`);return;}

        try {
            setStatus("sending");
            await emailjs.send("service_0cm0wym","template_6hi7an7",{name: formData.name,email: formData.email,message: formData.message,},"cFXn8i0_8fzqNyTtZ");
            setStatus("success");
            toast.info("You can send another message in 10 seconds");
            toast.success("Message sent successfully!");
            setFormData({name: "",email: "",message: "",});
            startCooldown();
        }
        catch {setStatus("error");toast.error("Failed to send message");}
    };

    const startCooldown = () => {
        setStatus("cooldown");
        setCooldown(10);
        const interval = setInterval(() => {
            setCooldown((prev) => {
                if (prev <= 1) { clearInterval(interval); setStatus("idle"); return 0;}
                return prev - 1;
            });
        }, 1000);
    };


    return (
        <div className="h-screen w-screen overflow-hidden flexy bg-neutral-400">
        <motion.div className="w-[90%] h-[90%] p-20 bg-white noise5 rounded-3xl relative flexy flex-col! gap-10" initial={{opacity: 0,y: 100,filter: "blur(10px)"}} animate={{opacity: 1,y: 0,filter: "blur(0px)"}} transition={{duration: 0.6,ease: "easeInOut",}}  >
            
            <Link className="p-2 m-3 rounded-full absolute top-0 left-0 hover:bg-neutral-300/60" to="/">X</Link>
            <div className="flex flex-col gap-2 w-full items-center">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-[50%] p-2 rounded-full text-xl border-b border-black transition duration-300 ease-in-out focus:scale-105 focus:outline-none focus:ring-0 focus:border-none"/>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-[50%] p-2 rounded-full text-xl border-b border-black transition duration-300 ease-in-out focus:scale-105 focus:outline-none focus:ring-0 focus:border-none"/>
            </div>
            <div className="flex flex-col gap-2 w-full items-center">
                <label htmlFor="message">Your Message</label>
                <div className="w-[70%] noise3 relative min-h-30 rounded-3xl overflow-hidden group transition duration-300 ease-in-out p-5 border border-black focus-within:scale-105">
                    <textarea  type="text" name="message" id="message" maxLength={250} value={formData.message} onChange={handleChange} className="size-full focus:outline-none focus:ring-0 focus:border-non" />
                    <div className={`absolute bottom-5 right-5 ${formData.message.length >= 250 ? "text-red-500 animate-shake" : ""}`}>{formData.message.length}/250</div>
                </div>
            </div>
            <button onClick={handleSubmit} disabled={status === "sending" || status === "cooldown"} className="p-3 px-10 rounded-full bg-neutral-900 text-white">
                {status === "sending" ?
                                    <div>
                                        sending
                                        <motion.span animate={{ opacity:[0,1,0] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
                                        <motion.span animate={{ opacity:[0,1,0] }} transition={{ repeat: Infinity, duration: 1,delay:.2 }}>.</motion.span>
                                        <motion.span animate={{ opacity:[0,1,0] }} transition={{ repeat: Infinity, duration: 1,delay:.4 }}>.</motion.span>
                                    </div> 
                                    : status === "success" ? "✓ Sent" 
                                    : status === "error" ? "✕ Error" 
                                    : status === "cooldown" ? `Wait ${cooldown}s` 
                                    : "Send"
                }
            </button>
            <span>Usually replies within 24 hours.</span>
        </motion.div>
        </div>
    );
}
