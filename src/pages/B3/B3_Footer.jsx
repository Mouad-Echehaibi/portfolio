import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function B3_Footer(){
    const footer = useRef()

    useGSAP(()=>{

        gsap.from(footer.current,{scale:.7, y:50,scrollTrigger:{
            trigger: footer.current,
            start: "top bottom",
            end: "bottom center",
            scrub: 1
        }})

    },{scope: footer})
    return (
        <div className="h-[70vh] flex p-5 flex-col w-full">
            <footer ref={footer} className="size-full grid grid-cols-[1fr_20vw_1fr] noise5 p-5 rounded-3xl">
                <div></div>
                <span className="text-9xl rounded-3xl bg-neutral-800 text-white"></span>
                <div></div>
            </footer>
        </div>
    );
}