import { useEffect, useRef, useState } from "react";
import { getTheme, setTheme } from "@/provider/theme";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

export default function Header({smootherRef}){
    const { t, i18n } = useTranslation();
    const [theme, setThemeState] = useState(getTheme());
    const header = useRef();

    useEffect(() => { const lang = localStorage.getItem("lang") || "en"; i18n.changeLanguage(lang); }, []);
    const HandleLangueChange = (lang) => { i18n.changeLanguage(lang); localStorage.setItem("lang", lang);}
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setThemeState(newTheme);
    };

    useGSAP(()=>{
        const tl = gsap.timeline({scrollTrigger:{trigger: header.current,start:"0 0" , end:"+=200", scrub:.5}})
        .from(header.current,{padding: 50 ,duration:1});

        // const tlD1= gsap.timeline()
        // .from  (".MP",   { scale: 0 , duration: 1  , ease: "power2.out"} ,0)
        // .to  (".MP",   { scale: 0.6 , duration: 1  , ease: "power2.out"} ,0.5)
        // .from(".M1",   { scaleY: 0,  duration:.5 , ease: "power2.out"}  ,'<')
        // .from(".M2",   { scaleY: 0, duration: .5  , ease: "power2.out"} ,'<0.3')
        // .from(".M3",   { scaleY: 0, duration: .5  , ease: "power2.out"} ,'<0.2')
        // .to(".MP",     { top:140 , width: '17rem',scale:1, duration: 1  , ease: "power2.out"} ,'<0.5')
        // .to(".MP",     { left: 550, duration: 1  , ease: "power2.out"} ,'<1')
        // .to(".TXT",    { autoAlpha: 1, right: -180,scale: 1, display: 'default', duration:  1 , ease: "power2.out"} ,'<')
        // .from(".BG",   { y: '100vh', duration:  1 , ease: "power2.out"} ,'<')
        // .to(".MP",     { left:70 ,top:50, duration:  1 ,scale:0.3, ease: "power2.out"} ,'<1')

        const centerX = window.innerWidth / 2 - header.current.querySelector(".MP").offsetWidth / 2;
        const centerY = window.innerHeight / 2 - header.current.querySelector(".MP").offsetHeight / 2;
        const logoRect = header.current.querySelector(".MP").getBoundingClientRect();

        const tl2 = gsap.timeline({onComplete: () => {smootherRef.current?.paused(false);}});

        tl2
        .from(".M1", { scaleY: 0,y:5, duration: 1 , ease:"power1.out",delay:1,},"<")
        .from(".M2", { scaleY: 0,y:5, duration: .8, ease:"power1.out"}, "<0.2")
        .from(".M3", { scaleY: 0,y:5, duration: .5, ease:"power1.out"}, "<0.1")
        .from(".M4", { scaleX: 0, duration: .5, ease:"power1.out"}, "<0.4")
        .from(".MP", {x: centerX - logoRect.left,y: centerY - logoRect.top,scale: 2,duration: 1.2,ease: "power3.inOut"},"<")
        .from("#RightNav",{autoAlpha:0 , x:50, duration:1.2, ease:"power1.out"})
    },{scope:header})

    return (
        // <div dir={i18n.language == "ar" ? "rtl": "ltr"} id="navBar" className="hidden md:flex text-sm gap-10 rounded-lg fixed z-50 p-2 right-0 top-0 px-15 border border-cyan-500/20">
        <div dir={i18n.language == "ar" ? "rtl": "ltr"} ref={header} className="hidden md:flex text-sm fixed z-50 p-5 w-full justify-between top-0">
            <div></div>
            {/* <div className="IntroLogo absolute w-full h-screen z-999 flexy">
                <section className="MP h-[10vh] w-[10vw] items-end gap-[10%] grid grid-cols-[1fr_1fr_3fr]">
                    
                </section>
            </div> */}
            <section className="MP absolute h-[3vh] w-[4vw] items-end gap-[10%] grid grid-cols-[1fr_1fr_3fr]">
                <div className="M1 origin-bottom h-[50%] bg-black dark:bg-white z-2"></div>
                <div className="M2 origin-bottom h-[75%] bg-black dark:bg-white z-2"></div>   
                <div className="h-full z-2 grid grid-cols-[1fr_2fr]">
                    <div className="M3 origin-bottom h-full bg-black dark:bg-white z-2"></div>  
                    <div className="M4 origin-left h-full z-2 grid grid-rows-3 gap-[20%]">
                        <div className="bg-black dark:bg-white"></div>
                        <div className="bg-black dark:bg-white"></div>
                        <div className="bg-black dark:bg-white"></div>
                    </div>  
                </div>
            </section>

            {/* {["About","Skills","Projects","Educations"].map((title)=><span className="text-[#000522] dark:text-[#00f7ff]">{t(title)}</span>)} */}

            <div id="RightNav" className="flex gap-10"> 
                <span className="relative group">
                    <span className="text-black dark:text-white">{i18n.language}</span>
                    <div className="hidden group-hover:flex flex-col rounded-xl absolute left-0 bg-neutral-700 p-2 dark:bg-neutral-200">
                        {["en","fr","ar"].map((title)=><span className="flexy text-white dark:text-black hover:bg-neutral-300 px-2 p-1 rounded-xl cursor-pointer" onClick={() => HandleLangueChange(title)}>{t(title)}</span>)}
                    </div>
                </span>
                <span onClick={toggleTheme} className={`cursor-pointer rounded-full border border-neutral-500 size-5 ${theme==="dark"?"bg-white":"bg-black"}`}></span>
                <Link to="/contact">{t("Contact")}</Link>
            </div>
        </div>
    );
}