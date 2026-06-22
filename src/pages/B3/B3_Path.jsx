import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const paths = [
  {id: 0 , year: '2022' , color: '', description: 'Baccalauréat En Sciences Physiques Et Chimique',image: '/images/education/centre1.jpg',},
  {id: 1 , year: '2023' , color: '', description: 'FSAC - 1ere annee physique-chimie',image: '/images/education/fsac.jpg',},
  {id: 2 , year: '2024' , color: '', description: 'Built Full Stack Projects',image: '/images/education/centre1.jpg',},
  {id: 3 , year: '2025' , color: '', description: 'Working on advanced animations',image: '/images/education/centre1.jpg',},
]

export default function B3_Path() {
  const path = useRef();
  const lineFill = useRef();


  console.log(window.innerWidth)
  useGSAP(() => {

    // const sections = gsap.utils.toArray(".panel");  
    // bach my9alabch f dom kamel:
    const sections = gsap.utils.toArray(".panel", path.current);

    // gsap.from(path.current,{scale: .2, autoAlpha:0,scrollTrigger:{
    //   trigger: path.current,start: "top bottom",scrub: 1,end: "+=200"
    // }})


    const horizontalTween = gsap.timeline({ scrollTrigger:{
        trigger: path.current, 
        start: "top top",
        scrub: 1,
        pin: true,
        end: () => "+=" + window.innerWidth * sections.length
    }})
    .to(sections, { xPercent: -100 * (sections.length - 1),duration: .9 , ease: "none",},0)    
    .to(lineFill.current, { scaleX: 1, ease: "none",duration:1 ,transformOrigin: "left center"},0)

    

    // EACH YEAR ANIMATION
    sections.forEach((section) => {
      const year = section.querySelector(".year");
      const content = section.querySelector(".content");
      const image = section.querySelector("img");
      const bgShadow = section.querySelector("Path-bgShodow");

      const tl = gsap.timeline({scrollTrigger: {
        trigger: section,
        containerAnimation: horizontalTween,
        start: "left center",
        end: "right center",
        scrub: true,
      }})
      .from(year, {y: 100,opacity: 0,})
      .from(content, {opacity: 0,y: 50,}, "-=0.3")
      .from(image, {opacity: .5,scale: .5},0)
      .from(bgShadow, {opacity: 0,scale: .3},0);
    });

  }, { scope: path });

  return (
    <main ref={path} className="relative noise5 overflow-hidden w-full h-screen">

      <div id="pathLine" className="absolute place-self-center bottom-5 w-[70%] z-50">
        <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div ref={lineFill} className="h-full w-full bg-blue-500 scale-x-0"></div>
        </div>
        <div className="flex justify-between mt-4 text-xl font-bold"><span>2022</span><span>2023</span><span>2024</span><span>2025</span></div>
      </div>
    

      <div id="horizontalWrapper" className="flex w-fit">
        {paths.map((e)=>
          <section key={e.id} className={`panel w-screen overflow-hidden h-screen flexy`}>
            <div className="w-[70%] h-[50%] relative flexy overflow-hidden">
              <img src={e.image} className="absolute size-full rounded-3xl"/>
              <h1 className="year text-7xl mb-10">{e.year}</h1>
              <p className="content">{e.description}</p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}