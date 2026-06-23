import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t, i18n } = useTranslation();
    const footer = useRef()


    useGSAP(()=>{

        gsap.from(footer.current,{scale:.7, y:50,scrollTrigger:{ trigger: footer.current, start: "top bottom", end: "bottom center", scrub: 1}})

    },{scope: footer})
    return (
        <div className="h-[80vh] flex p-5 flex-col w-full mt-[20vh]">
            <footer ref={footer} className="size-full grid grid-rows-[auto_2fr_1fr] bg-neutral-300/80 dark:bg-neutral-950 rounded-3xl">
                <div className="grid flexy w-full text-[6rem] scale-x-200 font-black tracking-tight dark:text-neutral-200">WEB . DEV</div>
                {/* <h1 className="text-2xl flex w-full items-center px-10 font-semibold">OPEN TO INTERNSHIP OPPORTUNITIES</h1> */}
                <div className="w-full grid grid-cols-3 p-5 px-10">
                    <div className="flexy flex-col!">
                        <h2>{t("Name")}</h2>
                        <h3>{t("Title")}</h3>
                    </div>
                    <div className="flexy flex-col!">Contact Us</div>
                    <div className="flexy flex-col! gap-5">
                        <div className="flex gap-3">
                            {["fc","wt","tw","em","gh","in"].map((contact)=>
                                <span className="size-12 rounded-full flexy border border-neutral-400">{contact}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flexy flex-col! gap-5 w-full  border-t border-dashed border-neutral-800">
                    
                    <div className="flexy font-light text-sm text-neutral-800 dark:text-neutral-300">
                        @copyright 2026 . All right reserved
                    </div>
                    <div className="text-[10px] text-neutral-900 dark:text-neutral-400 font-thin">Built with React, TailwindCSS, GSAP & Framer Motion.</div>
                </div>
            </footer>
        </div>
    );
}