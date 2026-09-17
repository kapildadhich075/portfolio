import { Contact } from "../components/Contact";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { config } from "../config";
import { Navbar } from "../components/Navbar";
import { StudioServices } from "../components/StudioServices";

const collections: Record<string, string> = {
    "creator-scaling": "conversations",
    "brand-films": "brand",
    "tlr": "studio",
    "bluestone": "brand&video=8",
};

export function CaseStudy() {
    const { id } = useParams();
    const work = config.signatureWork.find(item => item.id === id);
    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!work) return <><Navbar /><div className="page-shell missing-project"><h1>This project could not be found.</h1><Link to="/content">Browse all projects <ArrowUpRight size={18} /></Link></div></>;

    const { details } = work;
    return <>
        <Navbar />
        <article className="case-page page-shell">
            <Link className="back-link" to="/content"><ArrowLeft size={16} /> All projects</Link>
            <header className="case-heading"><p className="eyebrow">{work.subtitle}</p><h1>{work.title}</h1><p>{work.description}</p></header>
            <dl className="case-facts">{details.stats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
            <div className="case-story"><span className="eyebrow">ABOUT THE WORK</span><div><section><h2>The brief</h2><p>{details.overview}</p></section><div className="case-two-column"><section><h2>What needed attention</h2><p>{details.challenge}</p></section><section><h2>How I approached it</h2><p>{details.solution}</p></section></div><section className="case-contribution"><h2>My contribution</h2><p>{details.impact}</p></section><Link className="case-video-link" to={`/content?series=${collections[work.id]}`}>Explore related videos <ArrowUpRight size={20} /></Link></div></div>
            <nav className="case-project-nav" aria-label="Other projects"><span className="eyebrow">MORE WORK</span>{config.signatureWork.filter(item => item.id !== work.id).map(item => <Link key={item.id} to={item.link}>{item.title}<ArrowUpRight size={18} /></Link>)}</nav>
        </article>
        <StudioServices />
        <Contact />
    </>;
}
