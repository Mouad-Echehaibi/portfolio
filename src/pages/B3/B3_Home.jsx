import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { useTranslation } from "react-i18next";
import B3_Hero from "./B3_Hero";
import B3_Skills2 from "./B3_Skills2";
import B3_Skills from "./B3_Skills";
import B3_Projects from "./B3_Projects";
import B3_Path from "./B3_Path";
import B3_Footer from "./B3_Footer";
import B3_Header from "./B3_Header";
import B3_HeaderMobile from "./B3_HeaderMobile";
import './B3.css'


gsap.registerPlugin(ScrollSmoother,ScrollTrigger)
export default function B3_Home() {
    // const { t, i18n } = useTranslation();

//     useGSAP(() => {

//     const smoother = ScrollSmoother.get();

//     if (!smoother) {
//         ScrollSmoother.create({
//             content: "#smooth-content",
//             smooth: 1,
//         });
//     }

// }, []);

    return(
        <div>
            <B3_Header />
            <B3_HeaderMobile />
            <div id="smooth-content">
                <B3_Hero />
                <B3_Skills2 />
                <B3_Skills />
                <B3_Projects />
                <B3_Path />
                <B3_Footer />
            </div>
        </div>
    )
}

