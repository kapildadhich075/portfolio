import { ArrowUpRight, Instagram, Youtube } from "lucide-react";
import { config } from "../config";

export function CreatorChannels() {
    return (
        <section id="personal-channels" className="creator-section section-space" aria-label="My personal channels">
            <div className="page-shell">
                <div className="creator-heading"><div><p className="eyebrow">BEYOND THE PROJECTS</p><h2>I create for<br />myself, too.</h2></div><p>This portfolio is a record of my work. Instagram and YouTube are where I share my own content. Come take a look.</p></div>
                <div className="creator-grid">
                    <a className="creator-card" href={config.contact.socials.instagram} target="_blank" rel="noopener noreferrer"><div className="creator-card-top"><Instagram size={30} strokeWidth={1.5} /><ArrowUpRight size={23} /></div><h3>Instagram</h3><p>@himanshud30</p><span>See what I’m sharing <ArrowUpRight size={15} /><span className="sr-only"> (opens in a new tab)</span></span></a>
                    <a className="creator-card" href={config.contact.socials.youtube} target="_blank" rel="noopener noreferrer"><div className="creator-card-top"><Youtube size={33} strokeWidth={1.5} /><ArrowUpRight size={23} /></div><h3>YouTube</h3><p>@himanshudadhich2785</p><span>Watch my videos <ArrowUpRight size={15} /><span className="sr-only"> (opens in a new tab)</span></span></a>
                </div>
            </div>
        </section>
    );
}
