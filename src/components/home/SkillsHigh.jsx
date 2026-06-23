import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getSVG } from '@/provider/PackSvg';
gsap.registerPlugin(ScrollTrigger);

export default function SkillsHigh(){
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
        // gsap.from('#SkillsImage',{scaleX:.7,autoAlpha:0,ease:"power1.in",scrollTrigger:{trigger: '#SkillsImage', start:"top bottom",end:"+=400",scrub: true}});
        const tl = gsap.timeline({ scrollTrigger: { trigger: Ref_skills.current, start: "center center", end: "+=4000", scrub: 1, pin: true, } })
        // .to("#skills-title",{scale: .9,y:-50,autoAlpha: 0,duration: 0.2},0)
        .from("#frontendLogo",{scale: 2,y: '50vh',duration: 0.25},0.)
        .from("#backendLogo",{scale: 2,y: '50vh', duration: 0.25},"<")
        .from("#databaseLogo",{scale: 2,y: '50vh', duration: 0.25},"<")

        .from(".texts", {y: '15vh',opacity: 0,duration: 0.3,stagger:0.1 ,ease: "power3.out"},0.4)
        .from(".SkillsGrid", {scaleY:0 ,duration: 0.3,stagger:0.1 ,ease: "power3.out"},0.43)
        // .from("#frontendText", {y: '15vh',opacity: 0,duration: 0.1 ,ease: "power3.out"},0.4)
        // .from("#backendText", {y: '15vh',opacity: 0,duration: 0.1,ease: "power3.out"},0.47)
        // .from("#databaseText", {y: '15vh',opacity: 0,duration: 0.1,ease: "power3.out"},0.49)

        .from("#frontGrid .skill-item" , {opacity: 0 , stagger: 0.02},0.62)
        .from("#backGrid .skill-item" , {opacity: 0 , stagger: 0.02})
        .from("#dbGrid .skill-item" , {opacity: 0 , stagger: 0.02})
    }, {scope: Ref_skills});


    return (
        <div ref={Ref_skills} className='w-[80%] p-5 place-self-center noise4 mt-30 border border-neutral-800 rounded-3xl h-fit flex flex-col gap-30 justify-center'>
            <h1 className='w-full flexy text-5xl font-thin z-2'>{t("Skills")}</h1>
            <div className="w-full p-4 md:px-25 lg:px-25 text-black grid grid-cols-3 gap-[5%] md:gap-[20%] lg:gap-[20%]">
                <div className="relative">
                    <div className='absolute flexy h-1 w-full'>
                        <img id="frontendLogo" src="/image/png-icon-skills-all-frontend-1.png" className="absolute z-1 bottom-0 w-[60%] h-fit"/>
                    </div>
                    <div className='size-full flex flex-col BgSkillsCards rounded-2xl overflow-hidden items-center'>
                        <div id="frontendText"  className="texts p-2 w-full border-b z-10 border-neutral-700 bg-cyan-950 flexy text-white text-sm md:text-2xl lg:text-2xl">Front-end</div>
                        <div id="frontGrid"     className="SkillsGrid flex flex-col p-5 md:grid md:grid-flow-row md:grid-cols-2 lg:grid lg:grid-flow-row lg:grid-cols-2 gap-2 items-center">
                            {skillsGrid(frontend_Skills)}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className='absolute flexy h-1 w-full'>
                        <img id="backendLogo" src="/image/png-icon-skills-all-backend-2.png"  className="absolute z-1 bottom-0 w-[60%] h-fit"/>
                    </div>
                    <div className='size-full flex flex-col BgSkillsCards rounded-2xl overflow-hidden'>
                        <div id="backendText"   className="texts p-2 w-full border-b z-10 border-neutral-700 bg-cyan-950 flexy text-white text-sm md:text-2xl lg:text-2xl">Back-end</div>
                        <div id="backGrid"      className="SkillsGrid flex flex-col p-5 gap-2 items-center">
                            {skillsGrid(backend_Skills)}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className='absolute flexy h-1 w-full'>
                        <img id="databaseLogo" src="/image/png-icon-skills-all-database-1.png" className="absolute z-1 bottom-0 w-[60%] h-fit"/>
                    </div>
                    <div className='size-full flex flex-col BgSkillsCards rounded-2xl overflow-hidden'>
                        <div id="databaseText"  className="texts p-2 w-full border-b z-10 border-neutral-700 bg-cyan-950 flexy text-white text-sm md:text-2xl lg:text-2xl">Database</div>
                        <div id="dbGrid"        className="SkillsGrid flex flex-col p-5 gap-2 items-center">
                            {skillsGrid(database_Skills)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
