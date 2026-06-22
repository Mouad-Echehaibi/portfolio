import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/base/Header";
import Skills from "@/components/home/skills";
import Hero from "@/components/home/Hero";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Projects from "@/components/home/projects";
import Path from "@/components/home/path";

gsap.registerPlugin(ScrollSmoother,ScrollTrigger)

export default function Home(){
    const Ref_home = useRef();

    useGSAP(() => { 
        ScrollSmoother.create({ smooth: .5 }); 
    },{ scope: Ref_home});

    return (
        <div ref={Ref_home}>
            <Header />
            {/* <HeaderMobile /> */}
            <div id="smooth-content">
                <Hero />
                <Skills />
                <Projects />
                <Path />
                <div className="h-[50vh] w-full"></div>
            </div>
        </div>
    );
}