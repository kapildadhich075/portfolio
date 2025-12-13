import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Essence } from "../components/Essence";
import { WhatIDo } from "../components/WhatIDo";
import { SignatureWork } from "../components/SignatureWork";
import { FDIProject } from "../components/FDIProject";
import { AboutMe } from "../components/AboutMe";
import { WorkWithMe } from "../components/WorkWithMe";
import { Contact } from "../components/Contact";
import { ShowreelTeaser } from "../components/ShowreelTeaser";

export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowreelTeaser />
            <Essence />
            <WhatIDo />
            <SignatureWork />
            <FDIProject />
            <AboutMe />
            <WorkWithMe />
            <Contact />
        </>
    );
}
