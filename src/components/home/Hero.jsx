import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({children}) => {
  const container = useRef(null);

  const splitText = useMemo(() => {
    return children.split('').map((char, index) => ( 
      <span className="inline-block word" key={index}> {char === ' ' ? '\u00A0' : char} </span>
    ));
  }, [children]);

  useEffect(() => {
  const el = container.current;  if (!el) return;

  const ctx = gsap.context(() => {
    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo( charElements,{ opacity: 0, yPercent: 50, scaleY: 2.3, scaleX: 0.7, transformOrigin: '50% 0%',},
                              { opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1, stagger:  0.05, delay: .5, ease: 'back.inOut(2)',
                                scrollTrigger: { trigger: el, scroller: window, start: 'center bottom+=5  0%', end: 'bottom bottom-=20%', scrub: 1},}
    );
  }, container);

  return () => ctx.revert();
}, []);

  return (
    <h2 ref={container} className={`my-5 overflow-hidden`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-normal`}>{splitText}</span>
    </h2>
  );
};

export default function Hero() {
    const { t, i18n } = useTranslation();
    const Ref_Hero = useRef();

    useGSAP(()=>{
         gsap.to('#Laptop',{scaleX:.7,autoAlpha:0,ease:"power1.in",scrollTrigger:{trigger: '#Laptop', start:"top top",end:"+=900",scrub: true}})
    },{scope: Ref_Hero})
    
    return(
        <div ref={Ref_Hero} className="min-h-[200vh] w-full flex justify-center relative">
            <img id="Laptop" src="/image/bg-pc-1.jpg" alt="bg laptop" className="size-full absolute -z-1"/>
            {/* <div className="absolute w-[80%] h-[80vh] noise5 top-[60vh]"></div> */}
            {/* <div className="absolute w-[80%] h-[80vh] border border-cyan-500 top-[60vh]"></div> */}
            <div className="w-[70%] h-fit flexy flex-col! gap-25 justify-between p-10">
                <div className="rounded-xl h-fit">
                    <div className="size-full relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)] " >
                        <div className=" absolute inset-0 opacity-40 pointer-events-none bg-[linear-gradient(135deg,rgba(255,0,150,0.25),rgba(0,255,255,0.15),rgba(255,255,0,0.15))] " />
                        <div className=" absolute -top-1/2 -left-1/2 h-[200%] w-[200%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)]" />
                        <div className="relative z-10 py-4 px-15 ">
                            <h1 className="text-lg">{t("Name")}</h1>
                        </div>
                    </div>
                </div>
                <h2 className="text-6xl w-min font-thin">{t("Title")}</h2>
            </div>
            <div  className="text-lg absolute bottom-[10vh] p-20">
                <ScrollFloat>
                    {t("bio")}
                </ScrollFloat>
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
