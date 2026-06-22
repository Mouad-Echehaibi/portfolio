import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { getTheme, setTheme } from "@/provider/theme";
import { Link } from "react-router-dom";

export default function B3_HeaderMobile() {
    const [theme, setThemeState] = useState(getTheme());
    const [isOpen, setIsOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setThemeState(newTheme);
    };

    ////////////// i18n
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lang = localStorage.getItem("lang") || "ar";
        i18n.changeLanguage(lang);
    }, []);

    const HandleLangueChange = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }

    return(
        <main className={`fixed z-20 right-0 top-0 md:hidden text-white flex flex-col items-end p-4`}>
        <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? "X" : "|||"}</div>
            <div className={`bg-neutral-600/50 rounded-2xl overflow-hidden transition-all duration-500 ${isOpen ? "max-h-125 p-5" : "max-h-0"}`}>
                <div className="flex flex-col gap-5 text-center">

                    <span>{t("About")}</span>
                    <span>{t("Skills")}</span>
                    <span>{t("Projects")}</span>
                    <span>{t("Educations")}</span>
            
                    <div className="flex justify-center gap-5">
                        <span onClick={() => HandleLangueChange("en")}>EN</span>
                        <span onClick={() => HandleLangueChange("fr")}>FR</span>
                        <span onClick={() => HandleLangueChange("ar")}>AR</span>
                    </div>

                    <span onClick={toggleTheme} className="cursor-pointer">{theme === "dark"? <span>white</span>: <span>black</span> }</span>

                    <Link to="/contact">
                        Contact Me
                    </Link>
                </div>

            </div>
        </main>
    )
}

