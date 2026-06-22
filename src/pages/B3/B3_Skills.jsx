import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function B3_Skills() {
    const skills = useRef()
    const { t, i18n } = useTranslation();


    useGSAP(()=>{
        const fronts = gsap.utils.toArray(".fronts");
        const backs = gsap.utils.toArray(".backs");
        const dbs = gsap.utils.toArray(".dbs");
        let mm = gsap.matchMedia();

        mm.add({isDesktop: "(min-width: 701px)",isMobile: "(max-width: 700px)",},(context) => {
            const { isDesktop, isMobile } = context.conditions;
            if (isDesktop) {
                const tl = gsap.timeline({scrollTrigger:{ trigger: skills.current, start: "center center", end: "+=2000", pin: true, scrub: 1, }})
                tl.to("#skills-title",{scale: .9,y:-50,autoAlpha: 0,duration: 0.2},0)
                .from("#frontendLogo",{scale: 2,y: '20vh', x:150, duration: 0.2},0)
                .from("#backendLogo",{scale: 2,y: '20vh', duration: 0.1},0.1)
                .from("#databaseLogo",{scale: 2,y: '20vh', x: -150, duration: 0.05},0.15)
                //  texts + lines
                .from("#frontendText", {y: 50,opacity: 0,duration: 0.05 ,ease: "power3.out"},0.35)
                .to("#bg-line1", { scaleX: 1, duration:0.05 })
                .from("#backendText", {y: 50,opacity: 0,duration: 0.05,ease: "power3.out"})
                .to("#bg-line2", { scaleX: 1, duration:0.05 })
                .from("#databaseText", {y: 50,opacity: 0,duration: 0.05,ease: "power3.out"})
                // skills shows
                .from(fronts , {opacity: 0 , stagger: 0.02})
                .to("#line1", { scaleX: 1},"<")
                .from(backs , {opacity: 0 , stagger: 0.02})
                .to("#line2", { scaleX: 1},"<")
                .from(dbs , {opacity: 0 , stagger: 0.02})
            }

            if (isMobile) {
                const tl = gsap.timeline({scrollTrigger:{ trigger: skills.current, start: "center center", end: "+=2000", pin: true, scrub: 1}})
                tl.from("#frontendLogo",{scale: 2,x:'50%',duration: 0.2},0)
                .from("#backendLogo",{scale: 2,x:'50%', duration: 0.1},0.1)
                .from("#databaseLogo",{scale: 2 ,x:'50%', duration: 0.05},0.15)
                //  texts + lines
                .from("#frontendText", {y: 50,opacity: 0,duration: 0.05 ,ease: "power3.out"},0.35)
                .to("#bg-line1", { scaleY: 1, duration:0.05 })
                .from("#backendText", {y: 50,opacity: 0,duration: 0.05,ease: "power3.out"})
                .to("#bg-line2", { scaleY: 1, duration:0.05 })
                .from("#databaseText", {y: 50,opacity: 0,duration: 0.05,ease: "power3.out"})
                // skills shows
                .from(fronts , {opacity: 0 , stagger: 0.02})
                .to("#line1", { scaleY: 1},"<")
                .from(backs , {opacity: 0 , stagger: 0.02})
                .to("#line2", { scaleY: 1},"<")
                .from(dbs , {opacity: 0 , stagger: 0.02})
            }
        }
        );

        return () => {
            mm.revert();
            // tl.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    },{ scope:skills})

    const frontsLineWidthDesktop = <div className="fronts w-5 border border-cyan-400 border-dashed"></div>
    const frontsLineHeightDesktop = <div className="fronts h-5 border border-cyan-400 border-dashed"></div>
    const frontsLineWidthMobile = <div className="fronts h-5 border border-cyan-400 border-dashed"></div>
    const frontsLineHeightMobile = <div className="fronts border border-cyan-400 border-dashed"></div>
    const frontsImageDesktop = (image) => <img className="fronts h-10" src={`/images/png/skills/${image}`}/>

    return(
        <div ref={skills} className="flex flex-col">
            <div className="h-40 flexy">
                <span id="skills-title" className="text-6xl font-bold">SKILLS</span> 
            </div>
            {/* Desktop */}
            <section className="h-fit w-full px-30 hidden relative noise3 md:grid lg:grid grid-cols-[auto_1fr_auto_1fr_auto]">
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <img id="frontendLogo" src="/images/png/skills/frontend3.png" className="absolute -z-1 bottom-0 h-[16vh] dark:invert-95"/>
                        <div id="frontendText" className="px-3 w-full border z-10 border-neutral-300 dark:border-neutral-500 bg-neutral-800 dark:bg-neutral-300 rounded-full text-white dark:text-black">Front-end</div>
                    </div>
                    <div className="flex flex-col w-full h-full gap-2 items-center">
                        {frontsImageDesktop('front-html.png')}
                        {frontsLineHeightDesktop}
                        <div className="relative flex">
                            {frontsImageDesktop('front-css.png')}
                            <div className="absolute flex items-center top-0 left-10 min-w-60 h-full">
                                {frontsLineWidthDesktop} {frontsImageDesktop('tailwindcss.png')}
                                {frontsLineWidthDesktop} {frontsImageDesktop('bootstrap.png')}
                            </div>
                        </div>
                        {frontsLineHeightDesktop}
                        <div className="relative flex">
                            {frontsImageDesktop('front-js.png')}
                            <div className="absolute flex items-center top-0 left-10 min-w-60 h-full">
                                {frontsLineWidthDesktop} {frontsImageDesktop('typescript.png')}
                                {frontsLineWidthDesktop} {frontsImageDesktop('gsap.png')}
                                {frontsLineWidthDesktop} {frontsImageDesktop('front-motion.png')}
                            </div>
                        </div>
                        {frontsLineHeightDesktop}
                        <div className="relative flex">
                            {frontsImageDesktop('front-react.png')}
                            <div className="absolute flex items-center top-0 left-10 min-w-60 h-full">
                                {frontsLineWidthDesktop} {frontsImageDesktop('vite.png')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-3">
                    <div id="bg-line1" className="bg-neutral-700 rounded-full h-1 scale-x-0 origin-left overflow-hidden"><div id="line1" className="h-full bg-white scale-x-0 origin-left"></div></div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <img id="backendLogo" src="/images/png/skills/backend3.png" className="absolute -z-1 bottom-0 h-[16vh] dark:invert-95"/>
                        <div id="backendText" className="px-3 w-full border z-10 border-neutral-300 dark:border-neutral-500 bg-neutral-800 dark:bg-neutral-300 rounded-full text-white dark:text-black">Front-end</div>
                    </div>
                    <div className="flex flex-col w-full h-full gap-2 items-center">
                        <div className="relative flex">
                            <img className="backs size-10" src="/images/png/skills/back-php.png"/>
                            <div className="absolute flex items-center top-0 left-10 min-w-60 h-full">
                                <div className="backs w-5 border border-cyan-400 border-dashed"></div><img className="backs h-10" src="/images/png/skills/back-laravel.png"/>
                            </div>
                        </div>
                        <div className="backs h-5 border border-cyan-400 border-dashed"></div>
                        <div className="relative flex">
                            <img className="backs size-10" src="/images/png/skills/back-nodeJs.png"/>
                            <div className="absolute flex items-center top-0 left-10 min-w-60 h-full">
                                <div className="backs w-5 border border-cyan-400 border-dashed"></div><img className="backs h-10" src="/images/png/skills/back-express.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-3">
                    <div id="bg-line2" className="bg-neutral-700 rounded-full h-1 scale-x-0 origin-left overflow-hidden"><div id="line2" className="h-full bg-white scale-x-0 origin-left"></div></div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="relative">
                        <img id="databaseLogo" src="/images/png/skills/database3.png" className="absolute -z-1 bottom-0 h-[16vh] dark:invert-95"/>
                        <div id="databaseText" className="px-3 w-full border z-10 border-neutral-300 dark:border-neutral-500 bg-neutral-800 dark:bg-neutral-300 rounded-full text-white dark:text-black">Database</div>
                    </div>
                    <div className="flex flex-col w-full h-full gap-2 items-center">
                        <img className="dbs size-10" src="/images/png/skills/db-mysql.png"/>
                        <div className="dbs h-5 border border-cyan-400 border-dashed"></div><img className="dbs size-10" src="/images/png/skills/db-nosql.png"/>
                
                    </div>
                </div>
            </section>     

            {/* Mobile */}
            <section className="min-h-[80vh] px-5 w-full md:hidden lg:hidden relative flex flex-col gap-2">

                <div className="flex gap-2 items-center relative">
                    <div className="">
                        <img id="frontendLogo" src="/images/png/skills/frontend3.png" className="-z-1 bottom-0 h-[16vh] dark:invert-95"/>
                        <div id="frontendText" className="w-[16vw] flexy full text-nowrap border z-10 border-neutral-300 dark:border-neutral-500 bg-neutral-800 dark:bg-neutral-300 rounded-full text-white dark:text-black">Front-end</div>
                    </div>
                    <div className="grid grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] w-full h-full gap-2 items-center">
                        {frontsImageDesktop('front-html.png')}
                        {frontsLineHeightMobile}
                        <div className="relative flex flex-col">
                            {frontsImageDesktop('front-css.png')}
                            <div className="absolute flex flex-col items-center top-10 left-0 min-h-60 w-full">
                                {frontsLineWidthMobile} {frontsImageDesktop('tailwindcss.png')}
                                {frontsLineWidthMobile} {frontsImageDesktop('bootstrap.png')}
                            </div>
                        </div>
                        {frontsLineHeightMobile}
                        <div className="relative flex flex-col">
                            {frontsImageDesktop('front-js.png')}
                            <div className="absolute flex flex-col items-center top-10 left-0 min-h-60 w-full">
                                {frontsLineWidthMobile} {frontsImageDesktop('typescript.png')}
                                {frontsLineWidthMobile} {frontsImageDesktop('gsap.png')}
                                {frontsLineWidthMobile} {frontsImageDesktop('front-motion.png')}
                            </div>
                        </div>
                        {frontsLineHeightMobile}
                        <div className="relative flex flex-col">
                            {frontsImageDesktop('front-react.png')}
                            <div className="absolute flex flex-col items-center top-10 left-0 min-h-60 w-full">
                                {frontsLineWidthMobile} {frontsImageDesktop('vite.png')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[16vw] flexy">
                    <div id="bg-line1" className="bg-neutral-700 rounded-full w-1 h-20 scale-y-0 origin-top overflow-hidden">
                        <div id="line1" className="h-full bg-white scale-y-0 origin-top"></div></div>
                </div>
                <div className="flex gap-2 items-center relative">
                    <div className="">
                        <img id="backendLogo" src="/images/png/skills/backend3.png" className="-z-1 bottom-0 h-[16vh] dark:invert-95"/>
                        <div id="backendText" className="w-[16vw] flexy border z-10 text-nowrap border-neutral-300 dark:border-neutral-500 bg-neutral-800 dark:bg-neutral-300 rounded-full text-white dark:text-black">Back-end</div>
                    </div>
                    <div className="flex w-full h-full gap-2 items-center">
                        <div className="relative flex flex-col">
                            <img className="backs size-10" src="/images/png/skills/back-php.png"/>
                            <div className="absolute flex flex-col items-center top-10 left-0 min-h-60 w-full">
                                <div className="backs h-5 border border-cyan-400 border-dashed"></div><img className="backs h-10" src="/images/png/skills/back-laravel.png"/>
                            </div>
                        </div>
                        <div className="backs border w-13 border-cyan-400 border-dashed"></div>
                        <div className="relative flex flex-col">
                            <img className="backs size-10" src="/images/png/skills/back-nodeJs.png"/>
                            <div className="absolute flex flex-col items-center top-10 left-0 min-h-60 w-full">
                                <div className="backs h-5 border border-cyan-400 border-dashed"></div><img className="backs h-10" src="/images/png/skills/back-express.png"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-[16vw] flexy">
                    <div id="bg-line2" className="bg-neutral-700 rounded-full w-1 h-20 scale-y-0 origin-top overflow-hidden">
                        <div id="line2" className="h-full bg-white scale-y-0 origin-top"></div></div>
                </div>
                <div className="flex gap-2 items-center relative">
                    <div className="">
                        <img id="databaseLogo" src="/images/png/skills/database3.png" className="-z-1 bottom-0 h-[16vh] dark:invert-95"/>
                        <div id="databaseText" className="w-[16vw] flexy border z-10 text-nowrap border-neutral-300 dark:border-neutral-500 bg-neutral-800 dark:bg-neutral-300 rounded-full text-white dark:text-black">Database</div>
                    </div>
                    <div className="flex w-full h-full gap-2 items-center">
                        <img className="dbs size-10" src="/images/png/skills/db-mysql.png"/>
                        <div className="dbs border w-13 border-cyan-400 border-dashed"></div><img className="dbs size-10" src="/images/png/skills/db-nosql.png"/>
                    </div>
                </div>

            </section>          
        </div>
    )
};
