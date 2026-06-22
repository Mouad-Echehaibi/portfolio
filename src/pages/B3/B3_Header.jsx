import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { getTheme, setTheme } from "@/provider/theme";
import { Link } from "react-router-dom";

export default function B3_Header() {
    const [theme, setThemeState] = useState(getTheme());
    const [isOpen, setIsOpen] = useState(false);
    const [scrolltop, setScrollTop] = useState(0);
    const [scrolllast, setScrolllast] = useState(0);
    const headerRef = useRef();
    const container = useRef();

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setThemeState(newTheme);
    };

    
    useEffect(() => {

        let lastScroll = 0;

        const handleScroll = () => {
            const current = window.scrollY;
            setScrollTop(current);
            setScrolllast(lastScroll);
            lastScroll = current;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const { t, i18n } = useTranslation();
    
    /// ghankhedmo b local storage bach ila dkhal site yl9a last language selected
    useEffect(() => {
        const lang = localStorage.getItem("lang") || "ar";
        i18n.changeLanguage(lang);
    }, []);

    const HandleLangueChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }

    useGSAP(() => {
        if (scrolltop === 0)  {  gsap.to(headerRef.current.children,{y:0, opacity:1 ,delay:0.5 ,stagger: 0.03,ease: "power2.out"});}
    }, {scope: container,dependencies: [scrolltop],revertOnUpdate: true});


    return(
        <div dir={i18n.language == "ar" ? "rtl": "ltr"} ref={container} className="hidden md:block">            
            <header ref={headerRef} className={`hidden md:absolute z-50 place-self-center top-0 p-1 flexy gap-5 text-black dark:text-white`}>                    
                    <span className="opacity-0 transform -translate-y-5">contact</span> 
                    <span className="opacity-0 transform -translate-y-5">phone</span> 
                    <span className="opacity-0 transform -translate-y-5">linkedin</span> 
                    <span className="opacity-0 transform -translate-y-5">email</span>
            </header>
            <nav id="navBar" className={`fixed z-50 p-2 place-self-center flexy gap-15 transition-all duration-500 ease-in-out  ${scrolltop > 20  ? 'top-0 w-full scale-100 rounded-none border-none'  : 'scale-80 rounded-full top-7.5 border border-white/20 px-15'}`}>  
                    <span className="text-[#000522] dark:text-[#00f7ff]">{t("About")}</span>
                    <span className="text-[#000522] dark:text-[#00f7ff]">{t("Skills")}</span>
                    <span className="text-[#000522] dark:text-[#00f7ff]">{t("Projects")}</span>
                    <span className="text-[#000522] dark:text-[#00f7ff]">{t("Educations")}</span>
                    <span className="relative group">
                        <span className="text-black dark:text-white">{i18n.language}</span>
                        <div className="hidden group-hover:flex flex-col rounded-xl absolute left-0 bg-neutral-700 p-2 dark:bg-neutral-200">
                            <span className="inline-block flexy text-white dark:text-black hover:bg-neutral-300 px-3 rounded-xl cursor-pointer" onClick={() => HandleLangueChange("en")}>{t("en")}</span>
                            <span className="inline-block flexy text-white dark:text-black hover:bg-neutral-300 px-3 rounded-xl cursor-pointer" onClick={() => HandleLangueChange("fr")}>{t("fr")}</span>
                            <span className="inline-block flexy text-white dark:text-black hover:bg-neutral-300 px-3 rounded-xl cursor-pointer" onClick={() => HandleLangueChange("ar")}>{t("ar")}</span>
                        </div>
                    </span>
                    <span onClick={toggleTheme} className="cursor-pointer">
                        { theme === "dark" ? <span>white</span> : <span>black</span> }
                    </span>
                    <Link to="/contact">
                        Contact Me
                    </Link>
            </nav>
        </div>
    )
}

