import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

export default function B3_Hero() {
    const { t, i18n } = useTranslation();
    const hero = useRef();
    const bg_noise = useRef();

    useGSAP(()=>{
        gsap.to(bg_noise.current,{scale:.7,borderRadius: '40px',scrollTrigger:{trigger: hero.current,start: "top top",end: "+=1000",scrub: true,pin: true } })
    },{scope: hero})
    return(
        <div ref={hero} dir={i18n.language == "ar" ? "rtl": "ltr"} className="w-full noise3 relative h-screen ">
            <div ref={bg_noise} className="size-full flexy flex-col! noise5">
                <span id="hero-title" className="text-3xl font-light z-50">{t("title")}</span>
                <span id="hero-bio" className="">{t("bio")}</span>
                <span id="hero-description" className="">{t("description")}</span>
            </div>
        </div>
    )
};
