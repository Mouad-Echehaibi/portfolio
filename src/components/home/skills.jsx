import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSVG } from '@/provider/PackSvg';
gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
    const Ref_skills = useRef()
    const { t, i18n } = useTranslation();

    const frontend_Skills = [
        {id:1,name:"html",      color:"",   image: getSVG("html")},
        {id:2,name:"css" ,      color:"",   image: getSVG("css")},
        {id:3,name:"js"  ,      color:"",   image: getSVG("javascript")},
        {id:4,name:"ts"  ,      color:"",   image: getSVG("typescript")},
        {id:5,name:"react",     color:"",   image: getSVG("gsap","green")},
        {id:6,name:"vite",      color:"",   image: getSVG("motion","purple")},
        {id:7,name:"gsap",      color:"",   image: getSVG("tailwindcss")},
        {id:8,name:"motion",    color:"",   image: getSVG("bootstrap")},
    ];
    const backend_Skills = [
        {id:1,name:"php",       color:"",   image: getSVG("php")},
        {id:2,name:"laravel" ,  color:"",   image: getSVG("laravel")},
        {id:3,name:"node"  ,    color:"",   image: getSVG("node")},
        {id:4,name:"express"  , color:"",   image: getSVG("express","white")},
    ];
    const database_Skills = [
        {id:1,name:"mysql",     color:"",   image: getSVG("mysql")},
        {id:2,name:"nosql" ,    color:"",   image: getSVG("nosql")},
    ];

    const skillsGrid = (skillsArray) => {
        return skillsArray.map(skill => (
            <div key={skill.id} className={`skill-item p-3 flexy rounded-lg border border-cyan-500 bg-cyan-950/50`}>
                {/* <img src={skill.image} alt={skill.name} className="w-full h-fit" /> */}
                <span>{skill.image}</span>
            </div>
        ))
    }

    useGSAP(() => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: Ref_skills.current, start: "center center", end: "+=4000", scrub: 1, pin: true, } })
        // .to("#skills-title",{scale: .9,y:-50,autoAlpha: 0,duration: 0.2},0)
        .from("#frontendLogo",{scale: 2,y: '20vh', x:100, duration: 0.25},0.)
        .from("#backendLogo",{scale: 2,y: '20vh', duration: 0.25},"<")
        .from("#databaseLogo",{scale: 2,y: '20vh', x: -100, duration: 0.25},"<")

        .from("#frontendText", {y: '15vh',opacity: 0,duration: 0.1 ,ease: "power3.out"},0.4)
        .from("#backendText", {y: '15vh',opacity: 0,duration: 0.1,ease: "power3.out"},0.47)
        .from("#databaseText", {y: '15vh',opacity: 0,duration: 0.1,ease: "power3.out"},0.44)
        .to("#bg-line1", { scaleX: 1, duration:0.1 },0.45)
        .to("#bg-line2", { scaleX: 1, duration:0.1 },0.42)

        .from("#frontGrid .skill-item" , {opacity: 0 , stagger: 0.02},0.62)
        .to("#line1", { scaleX: 1},"<")
        .from("#backGrid .skill-item" , {opacity: 0 , stagger: 0.02})
        .to("#line2", { scaleX: 1},"<")
        .from("#dbGrid .skill-item" , {opacity: 0 , stagger: 0.02})
    }, {scope: Ref_skills});


    return (
        <div ref={Ref_skills} className='w-full md:w-[80%] lg:w-[80%] noise4 md:p-5 lg:p-5 md:rounded-3xl lg:rounded-3xl md:border lg:border border-neutral-800 place-self-center h-fit flex flex-col gap-[15vh] mt-50'>
            <h1 className='w-full flexy text-5xl font-thin'>{t("Skills")}</h1>
            <div className="w-full p-4 md:px-25 lg:px-25 h-[60vh] lg:h-[60%] md:h-[60%] relative grid grid-cols-[auto_1fr_auto_1fr_auto] text-black text-sm md:text-xl lg:text-xl">
                <div className="flex flex-col gap-4 items-center">
                    <div className="relative w-fit">
                        <img id="frontendLogo" src="/image/png-icon-skills-all-frontend-1.png" className="absolute -z-1 bottom-0 w-full"/>
                        <div id="frontendText" className="px-3 w-fit border z-10 border-neutral-500 bg-neutral-300 rounded-full ">Front-end</div>
                    </div>
                    <div id="frontGrid" className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 lg:grid lg:grid-flow-row lg:grid-cols-2 gap-2 items-center">
                        {skillsGrid(frontend_Skills)}
                    </div>
                </div>
                <div className="flex-col p-3">
                    <div id="bg-line1" className="bg-neutral-700 rounded-full h-1 scale-x-0 origin-left overflow-hidden"><div id="line1" className="h-full bg-white scale-x-0 origin-left"></div></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative w-fit">
                        <img id="backendLogo" src="/image/png-icon-skills-all-backend-2.png" className="absolute -z-1 bottom-0 w-full"/>
                        <div id="backendText" className="px-3 w-fit border z-10 border-neutral-500 bg-neutral-300 rounded-full">Back-end</div>
                    </div>
                    <div id="backGrid" className="flex flex-col gap-2 items-center">
                        {skillsGrid(backend_Skills)}
                    </div>
                </div>
                <div className="flex-col p-3">
                    <div id="bg-line2" className="bg-neutral-700 rounded-full h-1 scale-x-0 origin-left overflow-hidden"><div id="line2" className="h-full bg-white scale-x-0 origin-left"></div></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative w-fit">
                        <img id="databaseLogo" src="/image/png-icon-skills-all-database-1.png" className="absolute -z-1 bottom-0 w-full"/>
                        <div id="databaseText" className="px-3 w-fit border z-10 border-neutral-500 bg-neutral-300 rounded-full">Database</div>
                    </div>
                    <div id="dbGrid" className="flex flex-col gap-2 items-center">
                        {skillsGrid(database_Skills)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
