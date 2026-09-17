import { ArrowDown, ArrowUpRight } from "lucide-react";
import { config } from "../config";
import { images } from "../images";

export function Hero() {
    return (
        <section className="portrait-hero" aria-labelledby="hero-heading">
            <div className="hero-topline"><span>CREATIVE STRATEGIST / CONTENT CREATOR</span><span>CO-FOUNDER, TLR STUDIOS</span></div>
            <div className="hero-photo"><img src={images.hero.profile} alt="Himanshu Dadhich standing beside a chair" fetchPriority="high" width="1280" height="1920" /></div>
            <a className="hero-side-link" href="/content">VIDEO COLLECTIONS <ArrowDown size={15} /></a>
            <span className="hero-side-note">STRATEGY MEETS STORYTELLING</span>
            <div className="hero-bottom">
                <div><p className="eyebrow mb-5">CREATIVE STRATEGIST & CONTENT CREATOR</p><h1 id="hero-heading">HIMANSHU<br />DADHICH<span className="hero-period">.</span></h1></div>
                <div className="hero-intro"><p>I’m a creative strategist and content creator. Here you’ll find my work, my videos, and the projects I’ve been part of.</p><a href={config.hero.links.primary}>Explore my videos <ArrowUpRight size={19} /></a></div>
            </div>
            <div className="hero-foot"><span>MY WORK, ON SCREEN AND BEHIND IT.</span><a href="#about">SCROLL TO DISCOVER <ArrowDown size={13} /></a></div>
        </section>
    );
}
