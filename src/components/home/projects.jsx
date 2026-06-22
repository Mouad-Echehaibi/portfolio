import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import { getSVG } from "@/provider/PackSvg";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const { t, i18n } = useTranslation();
  const projects = useRef();
  const projects1 = useRef();
  const projects1_image = useRef();
  const projects2 = useRef();
  const projects2_image = useRef();

  useGSAP(()=>{
    // const tl = gsap.timeline({scrollTrigger:{ trigger: "#projects-section", start:'center center', end: "+=1500", pin: true, scrub: 1}})
    gsap.from("#high",        {yPercent:50,scale:1.5,autoAlpha:0.4,ease:"power1.out",scrollTrigger:{ trigger: "#high", start:'top bottom', end: "+=400", scrub: true}})
    gsap.from(projects1.current,        {scale:.5, duration: 0.2,scrollTrigger:{ trigger: projects1.current, start:'top bottom', end: "+=300", scrub: 1}})
    gsap.from(projects1_image.current,  {y:'20vh', duration: 0.3,scrollTrigger:{ trigger: projects1.current, start:'top bottom', end: "+=300", scrub: 1}})
    gsap.from(projects2.current,        {scale:.5, duration: 0.2,scrollTrigger:{ trigger: projects2.current, start:'top bottom', end: "+=300", scrub: 1}})
    gsap.from(projects2_image.current,  {y:'20vh', duration: 0.3,scrollTrigger:{ trigger: projects2.current, start:'top bottom', end: "+=300", scrub: 1}})
    // .to(projects.current,{scale:2, autoAlpha: 0})
  }, {scope: projects})

  return (
    // <main ref={projects} className="min-h-[300vh] w-full grid grid-rows-[auto_1fr] pb-20 relative justify-center">
    <main ref={projects} className="w-full h-fit gap-20 mt-20 py-40 relative flex flex-col items-center noise4 justify-around">
        <h1 className="text-5xl font-thin">{t("Projects")}</h1>
        <section ref={projects1} className="h-[50vh] w-[70vw] rounded-3xl bg-green-900/80 flexy justify-between! p-10">
            <div className="h-full w-full flex flex-col justify-around">
                <h1 className="text-4xl">Youchef</h1>
                <span>03/2025 – 04/2025</span>
                <p>{t("project_youchef_bio")}</p>
                <span>Inertia.js – Tailwind CSS – Laravel – Git</span>
                <div className="flex gap-2">{getSVG("laravel")} {getSVG("tailwindcss")}</div>
            </div>
            <img ref={projects1_image} src="/image/section-project-youchef.png" className="bg-contain h-[80%] place-self-center rounded-xl" />
        </section>
        <section ref={projects2} className="h-[50vh] w-[70vw] rounded-3xl bg-neutral-800/60 flexy justify-between! p-10">
            <div className="h-full w-full flex flex-col justify-around">
                <h1 className="text-4xl">Chrono</h1>
                <span>02/2025 – 05/2025</span>
                <p>{t("project_chrono_bio")}</p>
                <div className="flex gap-2">{getSVG("react")} {getSVG("laravel")} {getSVG("tailwindcss")} {getSVG("mysql")}</div>
            </div>
            <img ref={projects2_image} src="/image/section-project-chrono.png" className="bg-contain h-[80%] place-self-center rounded-xl" />
        </section>
    </main>
  );
}
