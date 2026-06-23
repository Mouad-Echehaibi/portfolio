import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/base/Header";
import Hero from "@/components/home/Hero";
import Path from "@/components/home/Path";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Projects from "@/components/home/projects";
import Footer from "@/components/base/Footer";
import Skills from "@/components/home/SkillsHigh";


gsap.registerPlugin(ScrollTrigger,)

export default function Home(){
    const Ref_home = useRef();
    const smootherRef = useRef();

    useGSAP(() => { 
    //     smootherRef.current = ScrollSmoother.create({ smooth: .5 }); 
            smootherRef.current = ScrollSmoother.create({}); 
            smootherRef.current.paused(true);
    },{ scope: Ref_home});

    return (
        <div ref={Ref_home}>
            <Header smootherRef={smootherRef} />
            <div id="smooth-content">
                <Hero />
                {/* <Skills /> */}
                <Skills />
                <Projects />
                <Path />    
                <Footer />
            </div>
        </div>
    );
}