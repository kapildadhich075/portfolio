import { CreativeLabTeaser } from "../components/CreativeLabTeaser";
import { StudioServices } from "../components/StudioServices";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AboutIntro } from "../components/AboutIntro";
import { Hero } from "../components/Hero";
import { Essence } from "../components/Essence";
import { CreatorChannels } from "../components/CreatorChannels";
// import { FDIProject } from "../components/FDIProject";
import { Contact } from "../components/Contact";

export function Home() {
    const { hash } = useLocation();
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            const section = hash ? document.getElementById(hash.slice(1)) : null;
            if (section) section.scrollIntoView();
            else window.scrollTo(0, 0);
        });
        return () => cancelAnimationFrame(frame);
    }, [hash]);

    return (
        <>
            <Navbar />
            <Hero />
            <AboutIntro />
            {/* <ShowreelTeaser /> */}
            <Essence />
            <CreatorChannels />
            <CreativeLabTeaser />
            {/* <SignatureWork limit={3} /> */}
            {/* <FDIProject /> */}
            <StudioServices />
            <Contact />
        </>
    );
}
