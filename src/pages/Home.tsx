import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Essence } from "../components/Essence";
import { WhatIDo } from "../components/WhatIDo";
import { SignatureWork } from "../components/SignatureWork";
// import { FDIProject } from "../components/FDIProject";
import { WorkWithMe } from "../components/WorkWithMe";
import { Contact } from "../components/Contact";
import { ShowreelTeaser } from "../components/ShowreelTeaser";

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <ShowreelTeaser />
            <Essence />
            <WhatIDo />
            <SignatureWork limit={3} />
            {/* <FDIProject /> */}
            <WorkWithMe />
            <Contact />
        </>
    );
}
