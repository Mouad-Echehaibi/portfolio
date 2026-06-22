import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function B3_Projects() {
  const projects = useRef();
  const projects1 = useRef();
  const projects1_image = useRef();
  const projects2 = useRef();
  const projects2_image = useRef();


  useGSAP(()=>{
    const tl = gsap.timeline({scrollTrigger:{
        trigger: projects.current,
        start:'center center',
        end: "+=1500",
        pin: true,
        scrub: 1
    }})
    .from(projects1.current,{y:'100vh', duration: 0.2},0)
    .from(projects1_image.current,{y:'20vh', duration: 0.3},0)
    .from(projects2.current,{y:'100vh', duration: 0.2},.4)
    .from(projects2_image.current,{y:'20vh', duration: 0.3},.4)
    // .to(projects.current,{scale:2, autoAlpha: 0})
  }, {scope: projects})
  return (
    <main ref={projects} className="min-h-[85vh] w-full grid grid-rows-[auto_1fr] justify-center overflow-hidden">
        <div className="flexy p-5">
            <span id="skills-title" className="text-6xl font-bold">Projects</span> 
        </div>
        <div id="projects-section" className="relative w-[80vw] text-white">
            <section ref={projects1} className="absolute h-full w-full rounded-3xl bg-green-900 dark:bg-green-700 flexy justify-between! p-10">
                <div className="h-full w-full flex flex-col justify-around">
                    <h1 className="text-4xl">Youchef</h1>
                    <span>03/2025 – 04/2025</span>
                    <p>
                        Plateforme collaborative de partage de recettes. Rôles, likes, commentaires, interface admin  
                        Application web collaborative de partage de recettes de cuisine réalisé en équipe de 3 personnes 
                        avec gestion du code en collaboration 
                        via GitHub Fonctionnalités: rôles (admin,client,fournisseur), 
                        système likes-commentaires, 
                        interface admin.
                    </p>
                    <span> Technos : Inertia.js – Tailwind CSS – Laravel – Git</span>
                </div>
                <img ref={projects1_image} src="images/projects/youchef.png" className="bg-contain h-[80%] place-self-center rounded-xl" />
            </section>
            <section ref={projects2} className="absolute h-full w-full rounded-3xl bg-neutral-800 dark:bg-neutral-700 flexy justify-between! p-10">
                <div className="h-full w-full flex flex-col justify-around">
                    <h1 className="text-4xl">Chrono</h1>
                    <span>02/2025 – 05/2025</span>
                    <p>
                        Synchronisation automatique en temps réel d’onglets, 
                        sections, 
                        notes textuelles et tableaux dans une application web d’organisation personnelle. 
                        Interface fluide et responsive connectée à une base de données. 
                        
                    </p>
                    <span> Technos : React.js – Laravel – MySQL – Tailwind CSS.</span>
                </div>
                <img ref={projects2_image} src="images/projects/chrono.png" className="bg-contain h-[80%] place-self-center rounded-xl" />
            </section>
        </div>
    </main>
  );
}
