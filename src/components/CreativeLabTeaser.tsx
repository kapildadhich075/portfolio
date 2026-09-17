import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export function CreativeLabTeaser() {
    return <section className="section-space lab-teaser" aria-labelledby="lab-teaser-heading"><div className="page-shell"><div><p className="eyebrow">COHORT 01 / APPLICATIONS OPEN</p><h2 id="lab-teaser-heading">TLR Creative Lab.</h2><p>A 4-week live cohort for early-stage creators and filmmakers. Develop your voice, sharpen your craft, and build a more focused creative practice. Limited to 15 creators.</p></div><Link to="/creative-lab">Explore Cohort 01 <ArrowUpRight size={21} /></Link></div></section>;
}
