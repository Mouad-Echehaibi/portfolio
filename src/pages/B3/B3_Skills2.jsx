import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function B3_Skills2() {
    const skills = useRef();
    const frontendImage = useRef();
    const backendImage = useRef();
    const databaseImage = useRef();
    const { t, i18n } = useTranslation();


    useGSAP(()=>{
        let mm = gsap.matchMedia();

        mm.add({isDesktop: "(min-width: 701px)",isMobile: "(max-width: 700px)",},(context) => {
            const { isDesktop, isMobile } = context.conditions;
            if (isDesktop) {
                const tl = gsap.timeline({scrollTrigger:{ trigger: skills.current, start: "center center", end: "+=2000", pin: true, scrub: 1, }})
                tl.to("#skills-title",{scale: .9,y:-50,autoAlpha: 0,duration: 0.2},0)
                .to(frontendImage.current,{scale: 1.5, x:300, duration: 0.2},0)
                .to(backendImage.current,{scale: .5,opacity:.3, duration: 0.1},"<")
                .to(databaseImage.current,{scale: .5,opacity:.3, duration: 0.15},"<")            
            }
        }
        );

        return () => {
            mm.revert();
            // tl.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    },{ scope:skills})
    return(
        <div ref={skills} className="flex flex-col">
            <div className="h-40 flexy">
                <span id="skills-title" className="text-6xl font-bold">SKILLS</span> 
            </div>

            <div className="h-[80vh] w-full flex justify-between px-10 relative">
                <div className="size-70 bg-red-400/50">
                    <img ref={frontendImage} src="/allimages/png-icon-skills-all-frontend-2.png" alt="" />
                </div>
                <div className="size-70">
                    <img ref={backendImage} src="/allimages/png-icon-skills-all-backend-2.png" alt="" />
                </div>
                <div className="size-70">
                    <img ref={databaseImage} src="/allimages/png-icon-skills-all-database-2.png" alt="" />
                </div>
            </div>

        </div>
    )
};
