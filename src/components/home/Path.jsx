import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const paths = [
  {id: 0 , year: '2022' , color: '', description: 'Stage - Dev',image: '/image/section-path-stage-pragmatic.png',},
  {id: 1 , year: '2023' , color: '', description: 'OFPPT (ISFO) - Full Stack Dev',image: '/image/section-path-centre-1.jfif',},
  {id: 2 , year: '2024' , color: '', description: 'FSAC - 1ere annee physique-chimie',image: '/image/section-path-fsac-1.jpg',},
  {id: 3 , year: '2025' , color: '', description: 'Baccalauréat En Sciences Physiques Et Chimique',image: '/image/section-path-centre-2.jpg',},
]


export default function Path(){
  const { t, i18n } = useTranslation();
  const station = useRef();
  const path = useRef();
  const lineFill = useRef();


  useGSAP(()=>{
    // const tl = gsap.timeline({scrollTrigger:{ trigger: station.current, start:'top bottom', end: "+=1000", scrub: true}})
    // .from("#door1",        {xPercent: -100,ease:"power1.out",duration:.4},0)
    // .from("#door2",        {xPercent:  100,ease:"power1.out",duration:.4},0)

    const sections = gsap.utils.toArray(".panel", path.current);
    // const bg_images = gsap.utils.toArray(".images", path.current);

    const horizontalTween = gsap.timeline({ scrollTrigger:{ trigger: path.current,  start: "top top", scrub: 1, pin: true, end: () => "+=" + window.innerWidth * sections.length}})
    .to(sections, { xPercent: -100 * (sections.length - 1),duration: .9 , ease: "none",},0)    
    // .to("#tramRoad", { x: 1000, ease: "none", duration:1 ,transformOrigin: "left center"},0)


    sections.forEach((section) => {
        const image = section.querySelector("img");
        const tl = gsap.timeline({scrollTrigger: { trigger: section, containerAnimation: horizontalTween, start: "left center",end: "right center",scrub: true}})
        // .from(image, {opacity: .5 },0)
        .from(image, {opacity: 0},0)
        // .to(image, {opacity: 0,duration:.3,xPercent: -20},.7)
    });

    // bg_images.forEach((im) => {const tl = gsap.timeline({scrollTrigger: {  trigger: im,  containerAnimation: horizontalTween,  start: "left center", end: "right center", scrub: true}})     });
  }, {scope: station})

  return (
    <main ref={station} className="w-full relative">
        <article ref={path} className="relative overflow-hidden w-full h-screen">
            <h1 className="text-5xl font-thin flexy w-full absolute top-10">{t("Education")}</h1>
            <div id="horizontalWrapper" className="flexy relative w-fit">
                {paths.map((e)=>
                <section key={e.id} className={`panel w-screen relative h-screen flexy`}>
                        <img src={e.image} className="size-[50%] absolute rounded-3xl -z-100"/>
                        {/* <div className="absolute inset-0 -z-80" style={{boxShadow: ` inset 0 0 300px black, inset 0 0 500px black, inset 0 0 700px black`}}/> */}
                </section>
                )}
            </div>
        </article>
    </main>
  );
}
