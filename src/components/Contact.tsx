import { ArrowUpRight } from "lucide-react";
import { config } from "../config";

export function Contact() {
    return (
        <footer id="contact" className="personal-footer section-space">
            <div className="page-shell">
                <div className="personal-footer-grid"><div><p className="eyebrow">SAY HELLO</p><h2>{config.contact.heading}</h2><p>For creator collaborations, conversations, or just to say hello, you can reach me here.</p><a className="personal-email" href={`mailto:${config.contact.email}`}>{config.contact.email}<ArrowUpRight size={20} /></a></div><div className="footer-links"><span className="eyebrow">FIND ME ELSEWHERE</span><a href={config.contact.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={18} /></a><a href={config.contact.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube <ArrowUpRight size={18} /></a><a href={config.contact.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={18} /></a><p>Looking for content services?<br /><a href={config.studio.url} target="_blank" rel="noopener noreferrer">Visit TLR Studios <ArrowUpRight size={15} /></a></p></div></div>
                <div className="personal-footer-bottom"><span>© {new Date().getFullYear()} Himanshu Dadhich</span><span>Creative strategist. Content creator.</span></div>
            </div>
        </footer>
    );
}
