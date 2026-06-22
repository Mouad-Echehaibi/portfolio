import { useEffect, useRef, useState } from "react";
import { getTheme, setTheme } from "@/provider/theme";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Header(){
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
        .from(header.current,{padding: 50 ,duration:1})
    },{scope:header})

    return (
        // <div dir={i18n.language == "ar" ? "rtl": "ltr"} id="navBar" className="hidden md:flex text-sm gap-10 rounded-lg fixed z-50 p-2 right-0 top-0 px-15 border border-cyan-500/20">
        <div dir={i18n.language == "ar" ? "rtl": "ltr"} ref={header} className="hidden md:flex text-sm fixed z-50 p-5 w-full justify-between top-0">
            <div className="">
                ME
            </div>
            {/* {["About","Skills","Projects","Educations"].map((title)=><span className="text-[#000522] dark:text-[#00f7ff]">{t(title)}</span>)} */}
            <div className="flex gap-10"> 
                <span className="relative group">
                    <span className="text-black dark:text-white">{i18n.language}</span>
                    <div className="hidden group-hover:flex flex-col rounded-xl absolute left-0 bg-neutral-700 p-2 dark:bg-neutral-200">
                        {["en","fr","ar"].map((title)=><span className="flexy text-white dark:text-black hover:bg-neutral-300 px-2 p-1 rounded-xl cursor-pointer" onClick={() => HandleLangueChange(title)}>{t(title)}</span>)}
                    </div>
                </span>
                <span onClick={toggleTheme} className="cursor-pointer">{theme==="dark"?"white":"black"}</span>
                <Link to="/contact">{t("Contact")}</Link>
            </div>
        </div>
    );
}