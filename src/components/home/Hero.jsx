import { getTheme } from "@/provider/theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Hero() {
    const [theme, setTheme] = useState(getTheme())
    const { t, i18n } = useTranslation();
    const Ref_Hero = useRef();
    const BioRef = useRef();

    useGSAP(()=>{       
        gsap.to('#Laptop',{scaleX:.7,autoAlpha:0,ease:"power1.in",scrollTrigger:{trigger: '#Laptop', start:"top top",end:"+=900",scrub: true}});
        const split = SplitText.create(BioRef.current, { type: "words" });
        gsap.from(split.words, { opacity: 0, y: 20, stagger: 0.03, duration: 1,scrollTrigger:{trigger: BioRef.current, start:"top center",end:"+=200",scrub: true}});
        const tl = gsap.timeline({ease:"power1.out"})
        .from("#HeroName",  {y:20,autoAlpha:0,duration:.5,delay:3},0)
        .from("#HeroTitle", {y:20,autoAlpha:0,duration:.5},"<+.3")
        .from("#Laptop",    {y:'50vh',duration:1,},"<")
    },{scope: Ref_Hero})
    
    return(
        <div ref={Ref_Hero} className="min-h-[200vh] w-full flex justify-center relative">
            {/* <img id="Laptop" src={`${theme==="dark" ? "image/bg-pc-1.jpg" : "image/section-hero-laptop-white.png"} `} alt="bg laptop" className="size-full absolute -z-1"/> */}
            <div id="Laptop" className="size-full absolute -z-1 bg-[url('image/section-hero-laptop-white.png')] dark:bg-[url('image/bg-pc-1.jpg')] bg-cover bg-center"/>
            {/* <img id="Laptop" src="image/section-hero-laptop-white.png" alt="bg laptop" className="size-full absolute -z-1 dark:brightness-50"/> */}

            

            {/* <div className="absolute w-[80%] h-[80vh] noise5 top-[60vh]"></div> */}
            {/* <div className="absolute w-[80%] h-[80vh] border border-cyan-500 top-[60vh]"></div> */}
            <div className="w-[70%] h-fit flexy flex-col! gap-25 justify-between p-10">
                <div id="HeroName" className="rounded-xl h-fit">
                    <div className="size-full relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)] " >
                        <div className=" absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(135deg,rgba(255,0,150,0.25),rgba(0,255,255,0.15),rgba(255,255,0,0.15))] " />
                        <div className=" absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                        <div className="relative z-10 py-4 px-15">
                            <h1 className="text-lg">{t("Name")}</h1>
                            
                        </div>
                    </div>
                </div>
                <h2  id="HeroTitle" className="text-6xl w-full flexy flex-col! font-thin">
                    <div className="whitespace-pre-line text-lg font-semibold text-red-500">
                        {t("soon")}
                    </div>
                    {t("Title")}
                </h2>
            </div>
            <div ref={BioRef} className="text-4xl absolute bottom-[30vh] px-30 font-thin">
                {t("bio")}
            </div>

            
            {/* <div className="w-[70%] h-[80vh] flex flex-col justify-between p-10 BgHero-card rounded-2xl border border-white/20 z-5">
                <h1 className="text-3xl">{t("Title")}</h1>
                <h2 className="text-lg">{t("Name")}</h2>
                <p  className="text-lg">{t("bio")}</p>
                <p  className="text-lg">{getSVG("html")}</p>
            </div> */}
            
        </div>
    )
};
