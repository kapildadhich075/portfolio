import { config } from "../config";
import { ArrowUpRight } from "lucide-react";

export function StudioServices() {
    return (
        <section id="studio-services" className="studio-section section-space" aria-labelledby="studio-heading">
            <div className="page-shell studio-panel">
                <div className="studio-identity">
                    <span className="eyebrow">MY AGENCY</span>
                    <img src="/assets/tlr-logo.png" alt="TLR Studios" width="539" height="319" loading="lazy" />
                    <p>Content strategy. Video production.<br />A team to bring it together.</p>
                </div>
                <div className="studio-copy">
                    <span className="eyebrow">CONTENT SERVICES AT TLR</span>
                    <h2 id="studio-heading">For your next project,<br />meet TLR Studios.</h2>
                    <p>TLR Studios is the agency I co-founded. We provide end-to-end content solutions, from strategy and scripting to production, editing, and delivery. Visit TLR to explore our services and discuss your project.</p>
                    <a className="studio-cta" href={config.studio.url} target="_blank" rel="noopener noreferrer">Explore TLR services <ArrowUpRight size={19} /><span className="sr-only"> (opens in a new tab)</span></a>
                    <span className="studio-note">Service enquiries and production briefs go through TLR Studios.</span>
                </div>
            </div>
        </section>
    );
}
